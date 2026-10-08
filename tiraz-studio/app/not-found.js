import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page">
      <h1 className="text-2xl font-bold text-ink mb-2">404 — Page not found</h1>
      <p className="text-ink-muted mb-4">
        That route does not exist in Tiraz Studio.
      </p>
      <Link
        href="/dashboard"
        className="font-semibold text-accent hover:text-accent-hover"
      >
        Back to Dashboard
      </Link>
    </section>
  );
}
