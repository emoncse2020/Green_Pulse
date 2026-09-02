import { createAuthClient } from "better-auth/react";

const getBaseURL = () => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

  if (apiURL) {
    return `${apiURL}/auth`;
  }

  if (typeof window !== "undefined") {
    return "http://localhost:5000/api/auth";
  }

  return "http://localhost:5000/api/auth";
};

export const authClient = createAuthClient({
  baseURL: getBaseURL(),
});

export const { signIn, signUp, useSession, signOut } = authClient;
