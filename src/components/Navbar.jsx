"use client";

import Link from "next/link";
import {
  useRouter,
} from "next/navigation";

import {
  useEffect,
  useState,
} from "react";

import ThemeToggle
from "@/components/ThemeToggle";

import {
  HiMenuAlt3,
  HiOutlineLogout,
} from "react-icons/hi";

import {
  FaChalkboardTeacher,
} from "react-icons/fa";

const Navbar = () => {

  const [user, setUser] =
    useState(null);

  const router = useRouter();

  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "";

  const [loading, setLoading] =
    useState(true);

  const [menuOpen, setMenuOpen] =
    useState(false);

  useEffect(() => {

    const getSession =
      async () => {

        try {

          const res =
            await fetch(
              `${API_URL}/auth/me`,
              {
                credentials: "include",
              }
            );

          const data =
            await res.json();

          setUser(
            data?.user || null
          );

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);
        }
      };

    getSession();

    const handleAuthChange = () => {
      getSession();
    };

    window.addEventListener(
      "auth-change",
      handleAuthChange
    );

    return () => {
      window.removeEventListener(
        "auth-change",
        handleAuthChange
      );
    };
  }, []);

  const handleLogout =
    async () => {

      try {

        const res = await fetch(
          `${API_URL}/auth/signout`,
          {
            method: "POST",
            credentials: "include",
          }
        );

        if (!res.ok) {
          throw new Error("Logout failed");
        }

        setUser(null);
        router.push("/login");

      } catch (error) {

        console.log(error);
      }
    };

  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className="hover:text-primary transition"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href="/tutors"
          className="hover:text-primary transition"
        >
          Tutors
        </Link>
      </li>

      {user && (
        <>
          <li>
            <Link
              href="/add-tutor"
              className="hover:text-primary transition"
            >
              Add Tutor
            </Link>
          </li>

          <li>
            <Link
              href="/my-tutors"
              className="hover:text-primary transition"
            >
              My Tutors
            </Link>
          </li>

          <li>
            <Link
              href="/my-booked-sessions"
              className="hover:text-primary transition"
            >
              Booked Sessions
            </Link>
          </li>
        </>
      )}
    </>
  );

  if (loading) {

    return (
      <div className="fixed top-0 left-0 w-full bg-base-100 z-50 shadow-sm">

        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center">

          <span className="loading loading-spinner loading-md"></span>

        </div>

      </div>
    );
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-base-100/80 border-b border-base-300">

      <div className="max-w-7xl mx-auto navbar px-4 lg:px-8">

        <div className="navbar-start gap-2">

          {/* MOBILE MENU */}

          <div className="dropdown lg:hidden">

            <button
              onClick={() =>
                setMenuOpen(
                  !menuOpen
                )
              }
              className="btn btn-ghost btn-circle"
            >
              <HiMenuAlt3 size={24} />
            </button>

            {menuOpen && (

              <ul className="menu menu-sm absolute mt-3 z-[100] p-4 shadow-2xl bg-base-100 rounded-2xl w-64 space-y-2">

                {navLinks}

              </ul>
            )}

          </div>

          <Link
            href="/"
            className="flex items-center gap-2"
          >

            <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center text-xl shadow-lg">

              <FaChalkboardTeacher />

            </div>

            <div>

              <h1 className="text-2xl font-extrabold tracking-tight">

                MediQueue

              </h1>

              <p className="text-xs text-base-content/60 -mt-1">

                Smart Tutor Platform

              </p>

            </div>

          </Link>

        </div>

        <div className="navbar-center hidden lg:flex">

          <ul className="menu menu-horizontal gap-2 px-1 font-medium">

            {navLinks}

          </ul>

        </div>

        <div className="navbar-end gap-3">

          

          <ThemeToggle />

          {user ? (
            <>


              <div className="hidden md:flex items-center gap-3 bg-base-200 px-3 py-2 rounded-full">

                <div className="avatar">

                  <div className="w-10 rounded-full ring ring-primary ring-offset-2">

                    <img
                      src={
                        user.image ||
                        user.photoURL ||
                        "https://i.ibb.co/4pDNDk1/avatar.png"
                      }
                      alt="user"
                    />

                  </div>

                </div>

                <div className="leading-tight">

                  <h2 className="font-semibold text-sm">

                    {user.name ||
                      user.displayName ||
                      "User"}

                  </h2>

                  <p className="text-xs text-base-content/60">

                    {user.email}

                  </p>

                </div>

              </div>

              <button
                onClick={
                  handleLogout
                }
                className="btn btn-error btn-sm rounded-full px-5"
              >

                <HiOutlineLogout size={18} />

                Logout

              </button>

            </>
          ) : (
            <>

              <Link
                href="/login"
                className="btn btn-ghost btn-sm rounded-full px-5"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="btn btn-primary btn-sm rounded-full px-5 shadow-lg"
              >
                Register
              </Link>

            </>
          )}

        </div>

      </div>

    </header>
  );
};

export default Navbar;