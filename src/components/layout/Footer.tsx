import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-emerald-900/10 bg-[#efe8d8] dark:border-lime-400/10 dark:bg-[#05110c]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-16">
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-700 text-lime-100">
                <Logo className="h-5 w-5" />
              </div>
              <span className="text-lg font-semibold">Green Pulse</span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              A community portal for climate ideas — publish, vote, review, and fund
              work that restores ecosystems.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Platform</h4>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/ideas" className="hover:text-emerald-700">
                  Browse ideas
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-emerald-700">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-emerald-700">
                  Join the community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/about" className="hover:text-emerald-700">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-emerald-700">
                  Journal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-700">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/terms" className="hover:text-emerald-700">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-emerald-700">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-emerald-900/10 pt-8 dark:border-white/10 md:flex-row">
          <p className="text-sm text-zinc-500">
            © {currentYear} Green Pulse. Built for the planet, not as a leftover assignment.
          </p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
