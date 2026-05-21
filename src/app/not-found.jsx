import Link from "next/link";

import {
  FaExclamationTriangle,
} from "react-icons/fa";

export const metadata = {
  title: "404 | MediQueue",
};

export default function NotFound() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">

      <div className="max-w-2xl text-center">


        <div className="flex justify-center mb-6">

          <div className="w-24 h-24 rounded-full bg-error/10 flex items-center justify-center text-error text-5xl shadow-lg">

            <FaExclamationTriangle />

          </div>

        </div>


        <h1 className="text-8xl md:text-9xl font-extrabold text-primary tracking-tight">

          404

        </h1>

        <h2 className="text-3xl md:text-5xl font-bold mt-4">

          Page Not Found

        </h2>

       
        <p className="mt-5 text-base-content/60 text-lg leading-relaxed">

          Sorry, the page you are trying to access
          does not exist or may have been removed.

        </p>

       

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

          <Link
            href="/"
            className="btn btn-primary rounded-full px-8"
          >
            Back To Home
          </Link>

          <Link
            href="/tutors"
            className="btn btn-outline rounded-full px-8"
          >
            Browse Tutors
          </Link>

        </div>

      </div>

    </div>
  );
}