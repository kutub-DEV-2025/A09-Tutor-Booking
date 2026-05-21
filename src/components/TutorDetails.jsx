"use client";

import BookingModal from "@/components/BookingModal";

export default function TutorDetails() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co.com/fdz7K9R/tutor1.jpg"
            alt="Tutor"
            className="w-full lg:w-96 h-full object-cover"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-4xl">
            John Doe
          </h2>

          <p>
            <strong>Subject:</strong> Mathematics
          </p>

          <p>
            <strong>Fee:</strong> $20/hr
          </p>

          <p>
            <strong>Available Time:</strong> Sun - Thu 5PM - 8PM
          </p>

          <p>
            <strong>Location:</strong> Dhaka
          </p>

          <p>
            <strong>Mode:</strong> Online
          </p>

          <div className="card-actions mt-5">
            <button
              className="btn btn-primary"
              onClick={() =>
                document.getElementById("booking_modal").showModal()
              }
            >
              Book Session
            </button>
          </div>
        </div>
      </div>

      <BookingModal />
    </div>
  );
}