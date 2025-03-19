'use client';

import { useState } from 'react';
import type { Task, Priority } from '@prisma/client';
import { formatDate } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast';

interface TaskWithCategory extends Task {
  category: {
    name: string;
    color: string;
  };
}

interface TaskItemProps {
  task: TaskWithCategory;
  onEdit: (task: TaskWithCategory) => void;
  onDelete: (taskId: string) => void;
}

const priorityColors = {
  LOW: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
  MEDIUM: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
  HIGH: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100',
  URGENT: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
};

export function TaskItem({ task, onEdit, onDelete }: TaskItemProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleComplete = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/tasks/${task.id}/toggle-complete`, {
        method: 'PATCH',
      });

      if (!response.ok) {
        throw new Error('Failed to update task');
      }

      toast.success(
        task.completed
          ? 'Task marked as incomplete'
          : 'Task marked as complete'
      );
    } catch (error) {
      console.error('Error toggling task completion:', error);
      toast.error('Failed to update task');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col rounded-lg border bg-white p-4 shadow-sm dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggleComplete}
            disabled={isLoading}
            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
          />
          <h3
            className={`font-medium ${
              task.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            {task.title}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
              priorityColors[task.priority]
            }`}
          >
            {task.priority}
          </span>
          <span
            className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium"
            style={{
              backgroundColor: `${task.category.color}20`,
              color: task.category.color,
            }}
          >
            {task.category.name}
          </span>
        </div>
      </div>
      {task.description && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {task.description}
        </p>
      )}
      <div className="mt-4 flex items-center justify-between">
        {task.dueDate ? (
          <span className="text-xs text-gray-500">
            Due: {formatDate(task.dueDate)}
          </span>
        ) : (
          <span className="text-xs text-gray-500">No due date</span>
        )}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(task)}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
} 