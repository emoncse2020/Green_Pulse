import { Logo } from "@/components/ui/Logo";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Link href="/" className="flex items-center gap-2 group max-w-7xl mx-auto py-2 px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
          <Logo className="h-6 w-6" />
        </div>
        <span className="text-xl font-bold tracking-tight">Green Pulse</span>
      </Link>

      {children}
    </>
  );
}
