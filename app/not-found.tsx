import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-full flex-col items-center justify-center py-16 text-center">
      <p className="font-mono text-sm text-muted-foreground">404</p>
      <h1 className="mt-3 text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
        The page you’re looking for doesn’t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-6 border border-foreground px-4 py-2 text-sm transition-colors hover:bg-foreground hover:text-background"
      >
        Back to home
      </Link>
    </section>
  );
}