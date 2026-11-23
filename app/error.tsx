'use client';

import { useEffect } from "react";

export default function ErrorPage({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <section className="flex min-h-full flex-col items-center justify-center py-16 text-center">
      <p className="font-mono text-sm text-muted-foreground">ERROR</p>
      <h1 className="mt-3 text-3xl font-semibold">Something went wrong</h1>
      <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
        An unexpected error occurred. Please try again.
      </p>
      <button
        type="button"
        onClick={retry}
        className="mt-6 border border-foreground px-4 py-2 text-sm transition-colors hover:bg-foreground hover:text-background"
      >
        Try again
      </button>
    </section>
  );
}