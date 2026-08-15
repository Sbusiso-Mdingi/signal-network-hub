import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { SequrinMark } from "@/components/site/Brand";
import { APP_SIGN_IN_URL } from "@/lib/siteLinks";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in | Sequrin" },
      { name: "description", content: "Continue to the secure Sequrin application sign-in." },
      { property: "og:title", content: "Sign in | Sequrin" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sequrin.tech/login" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/login" }],
  }),
  component: LoginRedirectPage,
});

function LoginRedirectPage() {
  useEffect(() => {
    window.location.replace(APP_SIGN_IN_URL);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-3" aria-label="Sequrin home">
            <span className="text-primary"><SequrinMark className="h-7 w-7" /></span>
            <span className="font-display text-xl">Sequrin</span>
          </Link>
          <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Back to website</Link>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <p className="label-mono">Secure workforce workspace</p>
          <h1 className="mt-4 text-3xl md:text-4xl">Opening Sequrin sign in</h1>
          <p className="mt-3 leading-relaxed text-muted-foreground">You are being redirected to the authenticated Sequrin application.</p>
          <a href={APP_SIGN_IN_URL} className="mt-8 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">Continue to sign in</a>
        </div>
      </main>
    </div>
  );
}
