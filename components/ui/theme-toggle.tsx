"use client";
import { useCallback, useEffect, useState } from "react";
import * as React from "react";
import { useTheme } from "next-themes";


function useLocalClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);
  return now
    ? new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", timeZone: profile.timezone }).format(now)
    : "--:--";
}
import { profile } from "@/content/profile";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const time = useLocalClock();

  React.useEffect(() => setMounted(true), []);

  return (
    <button
      className="flex w-full cursor-pointer items-center justify-between gap-2 
      border border-foreground px-4 py-3 text-left text-[11px] 
      font-bold uppercase tracking-[0.25em] transition-colors
      hover:bg-accent focus-visible:outline-none focus-visible:ring-2 
      focus-visible:ring-ring active:bg-accent"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    ><span className="flex items-center gap-2">
      {mounted ? (resolvedTheme === "dark" ? "Night" : "Day") : "\u00A0"}
      </span>
      <span className="font-normal tracking-normal text-muted-foreground">{time}</span>
    </button>
  );
}

