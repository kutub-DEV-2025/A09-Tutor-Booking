"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaBookOpen,
} from "react-icons/fa";

const Banner = () => {

  return (

    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 min-h-screen">

      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>


      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="hero-content flex-col-reverse lg:flex-row items-center gap-16">


          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >


            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-5 py-2 rounded-full text-sm text-white mb-6 backdrop-blur-md">

              <FaBookOpen className="text-primary" />

              Trusted Learning Platform

            </div>


            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight text-white">

              Learn With

              <span className="text-primary block mt-2">

                Expert Tutors

              </span>

            </h1>

            <p className="mt-8 text-lg text-slate-300 leading-8 max-w-2xl">

              Book online and offline tutoring sessions with experienced teachers.
              Improve your learning journey with flexible schedules,
              personalized guidance, and interactive classes.

            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 mt-10">

              <Link
                href="/tutors"
                className="btn btn-primary btn-lg rounded-full px-10 shadow-xl hover:scale-105 duration-300"
              >

                Explore Tutors

              </Link>


              <Link
                href="/register"
                className="btn btn-outline btn-lg rounded-full px-10 text-white border-white hover:bg-white hover:text-black duration-300"
              >

                Join Now

              </Link>

            </div>


            

            <div className="grid grid-cols-3 gap-5 mt-14">

              <div className="bg-white/10 border border-white/10 rounded-2xl p-5 backdrop-blur-md">

                <h2 className="text-3xl font-bold text-primary">

                  500+

                </h2>

                <p className="text-slate-300 text-sm mt-1">

                  Tutors

                </p>

              </div>


              <div className="bg-white/10 border border-white/10 rounded-2xl p-5 backdrop-blur-md">

                <h2 className="text-3xl font-bold text-secondary">

                  5K+

                </h2>

                <p className="text-slate-300 text-sm mt-1">

                  Students

                </p>

              </div>


              <div className="bg-white/10 border border-white/10 rounded-2xl p-5 backdrop-blur-md">

                <h2 className="text-3xl font-bold text-accent">

                  98%

                </h2>

                <p className="text-slate-300 text-sm mt-1">

                  Success

                </p>

              </div>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex-1 relative"
          >

           
            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
                alt="Tutor"
                className="rounded-[40px] shadow-2xl border border-white/10 object-cover w-full max-w-xl mx-auto"
              />

              

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -top-6 -left-6 bg-white text-black p-4 rounded-2xl shadow-2xl flex items-center gap-3"
              >

                <FaChalkboardTeacher className="text-primary text-3xl" />

                <div>

                  <h3 className="font-bold">

                    Live Classes

                  </h3>

                  <p className="text-sm text-gray-500">

                    Interactive Sessions

                  </p>

                </div>

              </motion.div>


             
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -bottom-6 -right-6 bg-white text-black p-4 rounded-2xl shadow-2xl flex items-center gap-3"
              >

                <FaUserGraduate className="text-secondary text-3xl" />

                <div>

                  <h3 className="font-bold">

                    Smart Learning

                  </h3>

                  <p className="text-sm text-gray-500">

                    Personalized Guidance

                  </p>

                </div>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Banner;