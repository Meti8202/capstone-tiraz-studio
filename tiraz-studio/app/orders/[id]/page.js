export default function OrderWorkspacePage({ params }) {
  const { id } = params;

  return (
    <section className="page">
      <h1 className="text-2xl font-bold text-ink mb-2">Order Workspace</h1>
      <p className="text-ink-muted mb-2">
        Viewing order: <strong className="text-ink">{id}</strong>
      </p>
      <p className="text-ink-muted">
        Progress, payments and notes for this order will be managed here.
      </p>
    </section>
  );
}
