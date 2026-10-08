import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="space-y-12">
      <section className="text-center pt-4 pb-2">
        <p className="text-sm font-semibold uppercase  text-accent mb-3">
          For independent makers
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-ink mb-4">
          Tiraz Studio
        </h1>
        <p className="mx-auto max-w-xl text-lg text-ink-muted ">
          Order planning and pricing for knitters and crocheters who create
          custom clothing and accessories — one workspace instead of scattered
          notebooks and chat threads.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-hover"
          >
            Open Dashboard
          </Link>
          <Link
            href="/orders/new"
            className="rounded-lg border border-brand-300 bg-brand-50 px-6 py-3 text-sm font-semibold text-ink hover:bg-brand-200/60"
          >
            Start a Quote
          </Link>
        </div>
      </section>

      <section className="page">
        <h2 className="text-xl font-bold text-ink mb-3">
          What Tiraz Studio does
        </h2>
        <p className="text-ink-muted mb-4">
          Many crafts sellers take custom orders through Instagram, Telegram or
          word of mouth, then track measurements, yarn costs, payments, and
          deadlines in separate places. Tiraz Studio turns a customer request
          into a priced, trackable order in one place.
        </p>
        <ul className="space-y-2 text-ink-muted list-disc list-inside">
          <li>Record customer details, measurements, materials and labour</li>
          <li>See a suggested quote and set the final selling price</li>
          <li>
            Follow progress, payments and notes after the quote is accepted
          </li>
          <li>Keep a material price book for yarns and supplies</li>
        </ul>
      </section>

      <section className="page">
        <h2 className="text-xl font-bold text-ink mb-4">How to use it</h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-black">
              1
            </span>
            <div>
              <p className="font-semibold text-ink">Open the dashboard</p>
              <p className="text-sm text-ink-muted">
                See active orders, approaching deadlines and material reminders.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-black">
              2
            </span>
            <div>
              <p className="font-semibold text-ink">Build a quote</p>
              <p className="text-sm text-ink-muted">
                Enter the customer, product, measurements, yarn, labour, and
                deadline. Adjust the final price when you are ready.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex h-8 w-8  items-center justify-center rounded-full text-sm font-bold text-black">
              3
            </span>
            <div>
              <p className="font-semibold text-ink">Run the order</p>
              <p className="text-sm text-ink-muted">
                After acceptance, update progress, record payments, and keep
                notes on the order workspace.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="text-center pb-4">
        <p className="text-ink-muted mb-4">
          Ready to organise your next custom order?
        </p>
        <Link
          href="/dashboard"
          className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover"
        >
          Go to Dashboard
        </Link>
      </section>
    </div>
  );
}
