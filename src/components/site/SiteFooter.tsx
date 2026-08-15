import { Link } from "@tanstack/react-router";
import { APP_SIGN_IN_URL, PUBLIC_CONTACT_EMAIL, PUBLIC_CONTACT_MAILTO } from "@/lib/siteLinks";
import { SequrinMark } from "./Brand";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-primary"><SequrinMark className="h-6 w-6" /></span>
            <span className="font-display text-lg">Sequrin</span>
          </div>
          <p className="label-mono mt-3">Secure Integrity Network</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          <nav aria-label="Explore" className="flex flex-col gap-3 text-sm">
            <p className="label-mono">Explore</p>
            <Link to="/product" className="text-muted-foreground hover:text-foreground">Product</Link>
            <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground">How It Works</Link>
            <Link to="/impact" className="text-muted-foreground hover:text-foreground">Impact</Link>
            <Link to="/for-medical-schemes" className="text-muted-foreground hover:text-foreground">For Medical Schemes</Link>
          </nav>
          <nav aria-label="Company" className="flex flex-col gap-3 text-sm">
            <p className="label-mono">Company</p>
            <Link to="/network" className="text-muted-foreground hover:text-foreground">Secure Integrity Network</Link>
            <Link to="/governance" className="text-muted-foreground hover:text-foreground">Governance</Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link>
            <a href={APP_SIGN_IN_URL} className="text-muted-foreground hover:text-foreground">Sign In</a>
          </nav>
        </div>

        <div className="text-sm">
          <p className="label-mono">Contact</p>
          <a href={PUBLIC_CONTACT_MAILTO} className="mt-3 inline-block text-foreground underline-offset-4 hover:underline">
            {PUBLIC_CONTACT_EMAIL}
          </a>
          <nav aria-label="Policies" className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-xs">
            <Link to="/policies" hash="privacy" className="text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link to="/policies" hash="terms" className="text-muted-foreground hover:text-foreground">Terms</Link>
            <Link to="/policies" hash="security" className="text-muted-foreground hover:text-foreground">Security</Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted-foreground">© 2026 Sequrin. All rights reserved.</p>
      </div>
    </footer>
  );
}
