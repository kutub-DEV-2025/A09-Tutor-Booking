"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white mt-24 overflow-hidden">


      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div>
            <h2 className="text-3xl font-bold text-primary">
              MediQueue
            </h2>

            <p className="mt-5 text-sm text-slate-300 leading-6">
              Book tutors easily and improve your learning experience online.
              Learn smarter with expert guidance and flexible scheduling.
            </p>

           
            <div className="flex gap-4 mt-6">

              <a className="p-2 bg-white/10 rounded-full hover:bg-primary transition">
                <FaFacebook />
              </a>

              <a className="p-2 bg-white/10 rounded-full hover:bg-primary transition">
                <FaTwitter />
              </a>

              <a className="p-2 bg-white/10 rounded-full hover:bg-primary transition">
                <FaGithub />
              </a>

              <a className="p-2 bg-white/10 rounded-full hover:bg-primary transition">
                <FaEnvelope />
              </a>

            </div>
          </div>

        
          <div>
            <h2 className="text-xl font-semibold mb-5 text-white">
              Services
            </h2>

            <ul className="space-y-3 text-sm text-slate-300">
              <li className="hover:text-primary cursor-pointer transition">
                Online Tutoring
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                Offline Classes
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                Exam Preparation
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                Study Support
              </li>
            </ul>
          </div>

          
          <div>
            <h2 className="text-xl font-semibold mb-5 text-white">
              Contact
            </h2>

            <div className="space-y-3 text-sm text-slate-300">

              <p className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                support@mediqueue.com
              </p>

              <p>📞 +880123456789</p>

              <p>📍 Dhaka, Bangladesh</p>

            </div>

            
            <Link
              href="/tutors"
              className="inline-block mt-6 btn btn-primary btn-sm rounded-full"
            >
              Find Tutors
            </Link>

          </div>

        </div>

        <div className="border-t border-white/10 mt-14 pt-6 text-center text-sm text-slate-400">
          © 2026 MediQueue. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;