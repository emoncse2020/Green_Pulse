"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import Link from "next/link";
import { useState } from "react";

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ForgotPasswordForm = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordForm) => {
    setIsLoading(true);
    try {
      const { error } = await authClient.requestPasswordReset({
        email: data.email,
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        throw new Error(error.message || "Could not send the reset link");
      }

      // Always confirm without revealing whether the address has an account.
      setSentTo(data.email);
    } catch (error: any) {
      toast.error(error.message || "Could not send the reset link");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 p-6">
      <div className="w-full max-w-md bg-white dark:bg-zinc-950 p-8 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800">
        {sentTo ? (
          <>
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Check your inbox</h1>
              <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                If an account exists for <span className="font-medium text-zinc-700 dark:text-zinc-200">{sentTo}</span>,
                we&apos;ve sent a link to reset your password. It expires in 1 hour.
              </p>
            </div>

            <Button variant="outline" className="w-full" onClick={() => setSentTo(null)}>
              Use a different email
            </Button>
          </>
        ) : (
          <>
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Forgot password?</h1>
              <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                Enter your email and we&apos;ll send you a link to reset it
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input {...register("email")} placeholder="name@example.com" autoComplete="email" />
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending link..." : "Send reset link"}
              </Button>
            </form>
          </>
        )}

        <p className="mt-8 text-center text-sm text-zinc-500">
          Remembered it?{" "}
          <Link href="/login" className="text-primary font-semibold hover:underline">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}
