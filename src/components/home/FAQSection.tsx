"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";

export function FAQSection() {
  const faqs = [
    {
      q: "What is Green Pulse?",
      a: "Green Pulse is a community sustainability portal. People publish climate ideas, the community votes and comments, and approved proposals can be funded and followed.",
    },
    {
      q: "Do I need to be an expert?",
      a: "No. Clear problem statements and practical solutions matter more than credentials. Reviewers look for real-world impact, not jargon.",
    },
    {
      q: "Can an idea receive funding?",
      a: "Yes. Approved ideas can stay free or offer a paid implementation guide. Supporters pay through Stripe checkout.",
    },
    {
      q: "Is the platform secure?",
      a: "Sessions are authenticated, roles separate members and admins, and payments run through Stripe. Voting and comments are tied to real accounts.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader
          title="Questions, answered"
          subtitle="Everything you need to know before you plant your first idea."
          badge="FAQ"
        />

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="overflow-hidden rounded-2xl border border-emerald-900/10 bg-white dark:border-white/10 dark:bg-emerald-950/40"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-zinc-500 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden px-5 transition-all duration-300 ${
                  openIndex === i ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-zinc-600 dark:text-zinc-400">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
