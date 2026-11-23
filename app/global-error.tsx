'use client';

export default function GlobalError({
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <html lang="en">
      <head>
        <title>Something went wrong</title>
      </head>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "#f7f7f5",
          color: "#1b2a41",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <main
          style={{
            display: "grid",
            minHeight: "100vh",
            placeContent: "center",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <p style={{ margin: 0, fontFamily: "monospace", color: "#737b88" }}>
            ERROR
          </p>
          <h1 style={{ margin: "0.75rem 0", fontSize: "1.875rem" }}>
            Something went wrong
          </h1>
          <p style={{ margin: "0 0 1.5rem", color: "#737b88" }}>
            An unexpected error occurred. Please try again.
          </p>
          <button
            type="button"
            onClick={retry}
            style={{
              justifySelf: "center",
              border: "1px solid currentColor",
              background: "transparent",
              color: "inherit",
              cursor: "pointer",
              padding: "0.625rem 1rem",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}