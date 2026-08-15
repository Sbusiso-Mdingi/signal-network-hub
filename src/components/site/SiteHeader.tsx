import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { APP_SIGN_IN_URL } from "@/lib/siteLinks";
import { Wordmark } from "./Brand";

const navigation = [
  { label: "Product", to: "/product" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Impact", to: "/impact" },
  { label: "For Medical Schemes", to: "/for-medical-schemes" },
  { label: "About", to: "/about" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Wordmark />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={APP_SIGN_IN_URL}
            className="rounded-md border border-border-strong px-4 py-1.5 text-sm text-foreground transition-colors hover:bg-secondary"
          >
            Sign In
          </a>
        </nav>
        <button
          type="button"
          className="rounded-md border border-border-strong px-3 py-1.5 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a href={APP_SIGN_IN_URL} className="text-sm text-primary" onClick={() => setOpen(false)}>
              Sign In
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
