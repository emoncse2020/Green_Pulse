"use client";

import Link from "next/link";
import { useAuth } from "@/components/providers/AuthProvider";
import { Button } from "@/components/ui/Button";
import { LogOut, LayoutDashboard, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Ideas", href: "/ideas" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-emerald-900/10 bg-[#f4f1ea]/80 backdrop-blur-md dark:border-lime-400/10 dark:bg-[#07140f]/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="z-50 flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-700 text-lime-100 shadow-lg shadow-emerald-700/25 transition-transform group-hover:rotate-6">
            <Logo className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">
            Green Pulse
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-emerald-700 dark:hover:text-lime-300",
                pathname === link.href
                  ? "text-emerald-700 dark:text-lime-300"
                  : "text-zinc-600 dark:text-zinc-400",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <div className="flex items-center gap-3">
              <Link
                href={
                  user.role === "ADMIN"
                    ? "/admin-dashboard"
                    : "/member-dashboard"
                }
              >
                <Button variant="ghost" className="gap-2">
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                className="gap-2 border-rose-200 hover:bg-rose-50 hover:text-rose-600"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/register">
                <Button className="rounded-full bg-emerald-700 px-5 text-white hover:bg-emerald-800">
                  Join
                </Button>
              </Link>
            </>
          )}
        </div>

        <div className="z-50 md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-zinc-600 dark:text-zinc-400"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#f4f1ea] px-6 pt-24 dark:bg-[#07140f] md:hidden transition-all duration-300",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-4 opacity-0",
        )}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-lg font-semibold",
                pathname === link.href
                  ? "text-emerald-700"
                  : "text-zinc-600 dark:text-zinc-400",
              )}
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <>
              <Link
                href={
                  user.role === "ADMIN"
                    ? "/admin-dashboard"
                    : "/member-dashboard"
                }
              >
                <Button className="w-full bg-emerald-700 text-white">Dashboard</Button>
              </Link>
              <Button variant="outline" onClick={logout} className="w-full">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/register">
                <Button className="w-full bg-emerald-700 text-white">Register</Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
