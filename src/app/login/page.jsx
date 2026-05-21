"use client";

import Link from "next/link";

import {
  useRouter,
} from "next/navigation";

import {
  useState,
} from "react";

import {
  HiOutlineMail,
  HiOutlineLockClosed,
} from "react-icons/hi";

import {
  FaGoogle,
} from "react-icons/fa";

export default function LoginPage() {

  const router = useRouter();

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin =
    async (e) => {

      e.preventDefault();

      setError("");

      setLoading(true);

      const form = e.target;

      const email =
        form.email.value;

      const password =
        form.password.value;

      try {

        const res =
          await fetch(
            "/api/auth/sign-in/email",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                email,
                password,
              }),
            }
          );

        const data =
          await res.json();

        if (!res.ok) {

          setError(
            data.message ||
            "Invalid email or password"
          );

          return;
        }

        router.push("/");

        router.refresh();

      } catch (error) {

        console.log(error);

        setError(
          "Something went wrong"
        );

      } finally {

        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-6xl bg-base-100 shadow-2xl rounded-3xl overflow-hidden grid lg:grid-cols-2">


        <div className="hidden lg:flex flex-col justify-center bg-primary text-white p-14 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">

            <h1 className="text-5xl font-extrabold leading-tight">

              Welcome
              <br />
              Back 

            </h1>

            <p className="mt-6 text-lg text-white/80 leading-relaxed">

              Login to manage tutors,
              bookings, and sessions
              with MediQueue’s smart
              learning platform.

            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-white"></div>

                <p>
                  Secure Authentication
                </p>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-white"></div>

                <p>
                  Easy Tutor Management
                </p>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-white"></div>

                <p>
                  Fast Booking System
                </p>

              </div>

            </div>

          </div>

        </div>


        <div className="p-8 lg:p-14 flex flex-col justify-center">

          <div className="mb-8">

            <h2 className="text-4xl font-bold">
              Login Account
            </h2>

            <p className="text-base-content/60 mt-2">
              Please login to continue
            </p>

          </div>

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            <div>

              <label className="label">

                <span className="label-text font-medium">
                  Email Address
                </span>

              </label>

              <div className="relative">

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="input input-bordered w-full pl-12"
                />

                <HiOutlineMail
                  size={20}
                  className="absolute top-1/2 left-4 -translate-y-1/2 text-base-content/50"
                />

              </div>

            </div>


            <div>

              <label className="label">

                <span className="label-text font-medium">
                  Password
                </span>

              </label>

              <div className="relative">

                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Enter your password"
                  className="input input-bordered w-full pl-12"
                />

                <HiOutlineLockClosed
                  size={20}
                  className="absolute top-1/2 left-4 -translate-y-1/2 text-base-content/50"
                />

              </div>

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
              className="btn btn-primary w-full text-base rounded-xl"
            >

              {loading
                ? "Logging In..."
                : "Login"}

            </button>

          </form>

          <div className="divider my-8">
            OR
          </div>


          <button className="btn btn-outline w-full rounded-xl">

            <FaGoogle size={18} />

            Continue With Google

          </button>


          <p className="text-center mt-8 text-base-content/70">

            Don’t have an account?
            {" "}

            <Link
              href="/register"
              className="text-primary font-semibold hover:underline"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}