import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Wordmark } from "./Brand";

const sections = [
  { label: "Product", hash: "product" },
  { label: "How It Works", hash: "how-it-works" },
  { label: "Principles", hash: "principles" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  const sectionLink = (label: string, hash: string) =>
    onHome ? (
      <a
        key={hash}
        href={`#${hash}`}
        onClick={() => setOpen(false)}
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {label}
      </a>
    ) : (
      <Link
        key={hash}
        to="/"
        hash={hash}
        onClick={() => setOpen(false)}
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {label}
      </Link>
    );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Wordmark />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {sections.map((s) => sectionLink(s.label, s.hash))}
          <Link
            to="/about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-sm text-foreground" }}
          >
            About
          </Link>
          <Link
            to="/login"
            className="rounded-md border border-border-strong px-4 py-1.5 text-sm text-foreground transition-colors hover:bg-secondary"
          >
            Sign In
          </Link>
        </nav>
        <button
          type="button"
          className="rounded-md border border-border-strong px-3 py-1.5 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {sections.map((s) => sectionLink(s.label, s.hash))}
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="text-sm text-primary"
            >
              Sign In
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
