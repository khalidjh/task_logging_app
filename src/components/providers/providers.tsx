'use client';

import { PropsWithChildren } from 'react';
import { AuthProvider } from './auth-provider';
import { ToasterProvider } from './toaster-provider';

export function Providers({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <ToasterProvider />
      {children}
    </AuthProvider>
  );
} 