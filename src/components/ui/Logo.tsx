"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Green Pulse brand mark — a leaf with an ECG pulse line running through it.
 *
 * Draws in `currentColor`, so it drops into the same coloured tile the old
 * lucide <Leaf /> sat in and inherits the surrounding text colour. The pulse is
 * knocked out of the leaf with a mask, leaving a thin gap on either side so the
 * line still reads at 20px.
 */
export function Logo({ className }: { className?: string }) {
  // Two logos render on the same page (navbar + footer), so the mask id has to
  // be unique per instance or the first one wins for both.
  const maskId = useId();

  const leaf = "M12 2C17 7 19 10 19 12c0 3.5-3 7.5-7 10-4-2.5-7-6.5-7-10 0-2 2-5 7-10Z";
  const pulse = "M6 12.6h2.6l1.7-3.9 2.6 6.6 1.6-2.7H18";

  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("shrink-0", className)}
      role="img"
      aria-label="Green Pulse"
    >
      <mask id={maskId}>
        {/* White = keep, black = cut away. */}
        <path d={leaf} fill="white" />
        <path
          d={pulse}
          fill="none"
          stroke="black"
          strokeWidth={3.9}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </mask>

      {/* Pulse sits underneath; the leaf's knockout band lets it show through
          with a clean gap on each side. */}
      <path
        d={pulse}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d={leaf} fill="currentColor" mask={`url(#${maskId})`} />
    </svg>
  );
}

export default Logo;
