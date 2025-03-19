'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, BarChart2, BellRing } from 'lucide-react';

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [status, router]);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-blue-600 p-1">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-white dark:to-blue-300">TaskLogs</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="/sign-in"
              className="rounded-full bg-transparent px-4 py-2 text-sm font-medium text-gray-900 dark:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,rgba(59,130,246,0.1),transparent)]"></div>
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-white">
                  Manage Your Tasks with Ease
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-white">
                  A simple and efficient way to keep track of your daily tasks, set reminders, and
                  organize your priorities.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild variant="outline" size="lg" className="bg-blue-600 text-white rounded-full h-12 px-8 border-2 shadow-lg hover:shadow-xl transition-all dark:border-gray-600">
                  <Link href="/sign-up">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-8 border-2 shadow-lg hover:shadow-xl transition-all dark:text-white dark:border-gray-600">
                  <Link href="/sign-in">Sign In</Link>
                </Button>
              </div>
              <div className="mt-12 w-full max-w-5xl">
                <div className="relative rounded-2xl border border-gray-200 bg-white/50 shadow-xl backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50 dark:from-blue-950 dark:to-gray-900"></div>
                  <div className="relative p-6">
                    <div className="aspect-video rounded-xl bg-gray-100 dark:bg-gray-800"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl dark:text-white">Features that make a difference</h2>
              <p className="mt-4 text-gray-600 dark:text-white max-w-2xl mx-auto">
                Everything you need to stay organized and productive
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 md:gap-12 py-8 lg:grid-cols-3">
              <div className="flex flex-col justify-center space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold dark:text-white">Simple Task Management</h3>
                <p className="text-gray-600 dark:text-white">
                  Easily add, edit, and delete tasks with a clean and intuitive interface.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-white">
                  <BarChart2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold dark:text-white">Set Priorities</h3>
                <p className="text-gray-600 dark:text-white">
                  Categorize tasks by priority and due dates to focus on what matters most.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-white">
                  <BellRing className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold dark:text-white">Email Reminders</h3>
                <p className="text-gray-600 dark:text-white">
                  Never miss a deadline with timely email reminders for your important tasks.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">Ready to get started?</h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-white">
                  Join thousands of users who are already organizing their lives with TaskLogs.
                </p>
              </div>
              <div className="pt-4">
                <Button asChild size="lg" className="bg-blue-600 text-white rounded-full h-12 px-8 border-2 shadow-lg hover:shadow-xl transition-all dark:border-gray-600">
                  <Link href="/sign-up">Start for free</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto py-10 px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-blue-600 p-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold dark:text-white">TaskLogs</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-white">
                A modern task management app to organize your daily tasks
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider dark:text-white">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-200">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-200">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider dark:text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-200">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider dark:text-white">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-200">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-200">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col sm:flex-row justify-between">
            <p className="text-xs text-gray-600 dark:text-white">
              © 2025 TaskLogs. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0 flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
