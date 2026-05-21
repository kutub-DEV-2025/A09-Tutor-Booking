"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {

  const router = useRouter();

  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "";

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleRegister =
    async (e) => {

      e.preventDefault();

      setError("");
      setLoading(true);

      const form = e.target;

      const name =
        form.name.value;

      const email =
        form.email.value;

      const password =
        form.password.value;

      const image =
        form.image.value;

      try {

        const res = await fetch(
          `${API_URL}/auth/register`,
          {
            method: "POST",
            credentials: "include",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              name,
              email,
              password,
              image,
            }),
          }
        );

        const data =
          await res.json();

        if (!res.ok) {

          setError(
            data.message ||
            "Registration Failed"
          );

          return;
        }

        router.push("/login");
        router.refresh();

      } catch (err) {

        setError(
          "Something went wrong"
        );

      } finally {

        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-5xl bg-base-100 rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div className="hidden lg:flex flex-col justify-center bg-primary text-white p-12">

          <h1 className="text-5xl font-bold leading-tight">
            Join
            <br />
            MediQueue
          </h1>

          <p className="mt-6 text-lg text-white/80">
            Create your account and
            manage tutors, sessions,
            and bookings easily with
            a modern learning platform.
          </p>

          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>

              <p>
                Secure Authentication
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>

              <p>
                Manage Tutors Easily
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>

              <p>
                Fast Booking System
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="p-8 lg:p-14">

          <div className="mb-8">

            <h2 className="text-4xl font-bold">
              Create Account
            </h2>

            <p className="text-base-content/60 mt-2">
              Register to continue
            </p>

          </div>

          <form
            onSubmit={handleRegister}
            className="space-y-5"
          >

            <div>

              <label className="label">
                <span className="label-text font-medium">
                  Full Name
                </span>
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className="input input-bordered w-full"
              />

            </div>

            <div>

              <label className="label">
                <span className="label-text font-medium">
                  Profile Image URL
                </span>
              </label>

              <input
                type="text"
                name="image"
                placeholder="https://"
                className="input input-bordered w-full"
              />

            </div>

            <div>

              <label className="label">
                <span className="label-text font-medium">
                  Email Address
                </span>
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />

            </div>

            <div>

              <label className="label">
                <span className="label-text font-medium">
                  Password
                </span>
              </label>

              <input
                type="password"
                name="password"
                required
                placeholder="Create password"
                className="input input-bordered w-full"
              />

            </div>

            {error && (

              <div className="alert alert-error">

                <span>
                  {error}
                </span>

              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full text-base"
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>

          </form>

          <div className="divider">
            OR
          </div>

          <button className="btn btn-outline w-full">
            Continue With Google
          </button>

          <p className="text-center mt-8 text-base-content/70">

            Already have an account?
            {" "}

            <Link
              href="/login"
              className="text-primary font-semibold hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}