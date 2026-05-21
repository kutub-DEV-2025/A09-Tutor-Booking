"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function TutorsPage() {

  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchTutors = async () => {

      try {

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/tutors`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch tutors");
        }

        const data = await response.json();

        setTutors(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

    fetchTutors();

  }, []);

  if (loading) {

    return (
      <div className="min-h-screen flex justify-center items-center">

        <span className="loading loading-spinner loading-lg text-primary"></span>

      </div>
    );
  }

  return (

    <section className="max-w-7xl mx-auto px-4 py-20">

      <div className="text-center mb-14">

        <h1 className="text-4xl md:text-5xl font-bold text-primary">

          All Tutors

        </h1>

        <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">

          Explore expert tutors and book your learning sessions easily.

        </p>

      </div>

      {tutors.length === 0 ? (

        <div className="text-center py-20">

          <h2 className="text-3xl font-semibold text-gray-400">

            No Tutors Found

          </h2>

        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {tutors.map((tutor) => (

            <div
              key={tutor._id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 rounded-2xl overflow-hidden border border-base-200"
            >

              <figure>

                <img
                  src={
                    tutor.photo ||
                    tutor.tutorImage ||
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                  }
                  alt={tutor.tutorName}
                  className="h-64 w-full object-cover"
                />

              </figure>

              <div className="card-body">

                <h2 className="card-title text-2xl text-primary">

                  {tutor.tutorName}

                </h2>

                <p>

                  <span className="font-semibold">
                    Subject:
                  </span>{" "}

                  {tutor.subject}

                </p>

                <p>

                  <span className="font-semibold">
                    Experience:
                  </span>{" "}

                  {tutor.experience}

                </p>

               
                <p>

                  <span className="font-semibold">
                    Teaching Mode:
                  </span>{" "}

                  {tutor.teachingMode}

                </p>

             
                <p>

                  <span className="font-semibold">
                    Available:
                  </span>{" "}

                  {tutor.availableDays}

                </p>

               
                <p className="text-lg font-bold text-secondary mt-2">

                  ${tutor.hourlyFee}/hr

                </p>

      
                <div className="card-actions justify-end mt-5">

                  <Link
                    href={`/tutors/${tutor._id}`}
                    className="btn btn-primary rounded-full px-6"
                  >

                    View Details

                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </section>
  );
}