"use client";

export default function OrdersError({ error, reset }) {
  return (
    <section className="page">
      <div className="rounded-xl border border-accent bg-accent-soft p-5">
        <h2 className="text-lg font-bold text-accent-hover mb-2">
          Something went wrong in Orders
        </h2>
        <p className="text-ink-muted">
          {error?.message || "An unexpected error occurred."}
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-4 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-hover"
        >
          Try again
        </button>
      </div>
    </section>
  );
}
