'use client';

import { useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { CreateTaskForm } from './CreateTaskForm';

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export function CreateTaskModal({ isOpen, onClose, onSuccess }: CreateTaskModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90%] max-w-[500px] translate-x-[-50%] translate-y-[-50%] overflow-auto rounded-lg border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:bg-gray-800">
          <Dialog.Title className="text-lg font-semibold leading-none text-gray-900 dark:text-white">
            Create New Task
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-gray-900 dark:text-white">
            Add a new task to your list
          </Dialog.Description>

          <div className="mt-6">
            <CreateTaskForm 
              onSuccess={() => {
                if (onSuccess) {
                  onSuccess();
                }
                closeButtonRef.current?.click();
              }}
              onCancel={() => closeButtonRef.current?.click()}
            />
          </div>

          <Dialog.Close
            ref={closeButtonRef}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
} 