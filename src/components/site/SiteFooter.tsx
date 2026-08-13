import { Link } from "@tanstack/react-router";
import { SequrinMark } from "./Brand";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-primary">
              <SequrinMark className="h-6 w-6" />
            </span>
            <span className="font-display text-lg">Sequrin</span>
          </div>
          <p className="label-mono mt-3">Secure Integrity Network</p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3 text-sm">
          <Link to="/" hash="product" className="text-muted-foreground hover:text-foreground">
            Product
          </Link>
          <Link to="/" hash="how-it-works" className="text-muted-foreground hover:text-foreground">
            How It Works
          </Link>
          <Link to="/" hash="principles" className="text-muted-foreground hover:text-foreground">
            Principles
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link to="/login" className="text-muted-foreground hover:text-foreground">
            Sign In
          </Link>
        </nav>

        <div className="text-sm">
          <p className="label-mono">Contact</p>
          <a
            href="mailto:sbusiso@sequrin.tech"
            className="mt-3 inline-block text-foreground underline-offset-4 hover:underline"
          >
            sbusiso@sequrin.tech
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted-foreground">
          © 2026 Sequrin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
