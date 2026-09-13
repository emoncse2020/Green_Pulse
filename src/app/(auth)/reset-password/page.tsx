"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import Link from "next/link";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// better-auth rejects anything shorter than 8 characters server-side.
const resetPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ResetPasswordForm = z.infer<typeof resetPasswordSchema>;

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  // better-auth's /reset-password/:token callback forwards here with the
  // validated token, or with ?error=INVALID_TOKEN when the link is stale.
  const token = searchParams.get("token");
  const linkError = searchParams.get("error");
  const isLinkUsable = Boolean(token) && !linkError;

  const { register, handleSubmit, formState: { errors } } = useForm<ResetPasswordForm>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: ResetPasswordForm) => {
    if (!token) return;

    setIsLoading(true);
    try {
      const { error } = await authClient.resetPassword({
        newPassword: data.password,
        token,
      });

      if (error) {
        throw new Error(error.message || "Could not reset your password");
      }

      toast.success("Password updated! Please log in.");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message || "Could not reset your password");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLinkUsable) {
    return (
      <>
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Link expired</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2">
            This password reset link is invalid or has already been used. Request a fresh one to continue.
          </p>
        </div>

        <Button asChild className="w-full">
          <Link href="/forgot-password">Request a new link</Link>
        </Button>
      </>
    );
  }

  return (
    <>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Set a new password</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-2">Choose a password you haven&apos;t used before</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">New Password</label>
          <Input
            type="password"
            autoComplete="new-password"
            placeholder="••••••••"
            {...register("password")}
          />
          {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Confirm Password</label>
          <Input
            type="password"
            autoComplete="new-password"
            placeholder="••••••••"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-xs text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Updating password..." : "Reset password"}
        </Button>
      </form>
    </>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 p-6">
      <div className="w-full max-w-md bg-white dark:bg-zinc-950 p-8 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800">
        <Suspense
          fallback={<p className="text-center text-sm text-zinc-500">Loading...</p>}
        >
          <ResetPasswordForm />
        </Suspense>

        <p className="mt-8 text-center text-sm text-zinc-500">
          <Link href="/login" className="text-primary font-semibold hover:underline">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}
