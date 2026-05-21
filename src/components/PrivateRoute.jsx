"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useRouter,
  usePathname,
} from "next/navigation";

export default function PrivateRoute({
  children,
}) {

  const router = useRouter();

  const pathname =
    usePathname();

  const [loading, setLoading] =
    useState(true);

  const [authorized, setAuthorized] =
    useState(false);

  useEffect(() => {

    const checkAuth =
      async () => {

        try {

          const res =
            await fetch(
              "/api/auth/get-session"
            );

          const data =
            await res.json();

          if (data?.user) {

            setAuthorized(true);

          } else {

            router.push(
              `/login?redirect=${pathname}`
            );
          }

        } catch (error) {

          console.log(error);

          router.push("/login");

        } finally {

          setLoading(false);
        }
      };

    checkAuth();

  }, [pathname, router]);

  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center">

        <span className="loading loading-spinner loading-lg"></span>

      </div>
    );
  }

  if (!authorized) {

    return null;
  }

  return children;
}