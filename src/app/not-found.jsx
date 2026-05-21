import Link from "next/link";

export const metadata = {
  title: "404 | MediQueue",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-primary">
          404
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="mt-5 text-gray-500 max-w-xl mx-auto">
          Sorry! The page you are looking for does not exist
          or has been moved to another location.
        </p>

        <Link
          href="/"
          className="btn btn-primary mt-8"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
}