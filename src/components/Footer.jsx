"use client";

import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";

import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {

  return (
    <footer className="bg-base-200 text-base-content mt-24 border-t border-base-300">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">


          <div>

            <h2 className="text-3xl font-extrabold text-primary">

              MediQueue

            </h2>

            <p className="mt-4 text-sm text-base-content/70 leading-6">

              A smart tutor booking platform to
              connect students with expert tutors.
              Learn faster, schedule smarter.

            </p>


            <div className="flex gap-3 mt-6">

              <a className="btn btn-circle btn-sm btn-outline hover:btn-primary">

                <FaFacebook />

              </a>

              <a className="btn btn-circle btn-sm btn-outline hover:btn-primary">

                <FaTwitter />

              </a>

              <a className="btn btn-circle btn-sm btn-outline hover:btn-primary">

                <FaGithub />

              </a>

              <a className="btn btn-circle btn-sm btn-outline hover:btn-primary">

                <FaEnvelope />

              </a>

            </div>

          </div>

       

          <div>

            <h3 className="text-xl font-semibold mb-5">

              Services

            </h3>

            <ul className="space-y-3 text-sm text-base-content/70">

              <li className="hover:text-primary transition cursor-pointer">

                Online Tutoring

              </li>

              <li className="hover:text-primary transition cursor-pointer">

                Offline Classes

              </li>

              <li className="hover:text-primary transition cursor-pointer">

                Exam Preparation

              </li>

              <li className="hover:text-primary transition cursor-pointer">

                Study Support

              </li>

            </ul>

          </div>

        

          <div>

            <h3 className="text-xl font-semibold mb-5">

              Contact

            </h3>

            <div className="space-y-3 text-sm text-base-content/70">

              <p className="flex items-center gap-2">

                <FaEnvelope className="text-primary" />

                support@mediqueue.com

              </p>

              <p>📞 +8801770141411</p>

              <p className="flex "> <CiLocationOn />Jhenaidah, Bangladesh</p>

            </div>

            <Link
              href="/tutors"
              className="btn btn-primary btn-sm mt-6 rounded-full"
            >

              Find Tutors

            </Link>

          </div>

        </div>

     

        <div className="border-t border-base-300 mt-10 pt-6 text-center text-sm text-base-content/60">

          © 2026 MediQueue. All rights reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;