import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 border-b border-brand-200/80 bg-brand-50/90 ">
            <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-5 min-h-14">
              <Link href="/" className="text-xl font-bold text-ink">
                <div id="logo"> Tiraz </div>
                Studio
              </Link>
              <nav className="flex flex-wrap items-center gap-6 text-sm font-medium text-ink">
                <Link href="/dashboard" className="hover:text-accent-hover ">
                  Dashboard
                </Link>
                <Link href="/orders" className="hover:text-accent-hover ">
                  Orders
                </Link>
                <Link href="/orders/new" className="hover:text-accent-hover ">
                  New Quote
                </Link>
                <Link href="/materials" className="hover:text-accent-hover ">
                  Materials
                </Link>
              </nav>
            </div>
          </header>

          <main className="mx-auto w-full max-w-content flex-1 px-5 py-8">
            {children}
          </main>

          <footer className="border-t border-brand-200/80 bg-brand-200/40 px-5 py-5 text-center text-sm text-ink-muted">
            <p>Tiraz Studio — made for knitters &amp; crocheters</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
