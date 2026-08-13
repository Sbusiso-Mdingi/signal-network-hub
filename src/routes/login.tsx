import { createFileRoute, Link } from "@tanstack/react-router";
import { SequrinMark } from "@/components/site/Brand";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in | Sequrin" },
      {
        name: "description",
        content: "Sign in to your organisation's Sequrin claims-integrity workspace.",
      },
      { property: "og:title", content: "Sign in | Sequrin" },
      {
        property: "og:description",
        content: "Sign in to your organisation's Sequrin claims-integrity workspace.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/login" },
      { name: "robots", content: "noindex" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/login" }],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-3" aria-label="Sequrin home">
            <span className="text-primary">
              <SequrinMark className="h-7 w-7" />
            </span>
            <span className="font-display text-xl">Sequrin</span>
          </Link>
          <Link
            to="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to website
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <p className="label-mono">Investigator console</p>
          <h1 className="mt-4 text-3xl md:text-4xl">Welcome to Sequrin</h1>
          <p className="mt-3 text-muted-foreground">
            Sign in to your organisation&apos;s Sequrin workspace.
          </p>

          <div
            role="status"
            className="mt-8 border border-border-strong bg-surface px-4 py-3 text-sm"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-primary align-middle" />
            The Sequrin application environment is currently unavailable.
          </div>

          <form
            className="mt-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
            aria-describedby="login-status"
          >
            <div>
              <label htmlFor="email" className="label-mono block">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                disabled
                placeholder="name@organisation.co.za"
                className="mt-2 w-full rounded-md border border-input bg-surface px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>
            <div>
              <label htmlFor="password" className="label-mono block">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                disabled
                placeholder="••••••••"
                className="mt-2 w-full rounded-md border border-input bg-surface px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>
            <button
              type="submit"
              disabled
              className="w-full rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground disabled:cursor-not-allowed disabled:opacity-60"
            >
              Sign In
            </button>
            <p id="login-status" className="text-xs text-muted-foreground">
              Sign-in is disabled while the application environment is unavailable. Forgot password
              recovery will be available alongside it.
            </p>
          </form>

          <p className="mt-6 text-sm text-muted-foreground">
            Enquiries:{" "}
            <a
              href="mailto:sbusiso@sequrin.tech"
              className="text-foreground underline-offset-4 hover:underline"
            >
              sbusiso@sequrin.tech
            </a>
          </p>
        </div>
      </main>

      <footer className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted-foreground">
          © 2026 Sequrin. Secure Integrity Network.
        </p>
      </footer>
    </div>
  );
}
