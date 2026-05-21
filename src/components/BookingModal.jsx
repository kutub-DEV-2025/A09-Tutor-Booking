"use client";

import { useState } from "react";

const BookingModal = ({ tutor }) => {

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const handleBooking =
    async (e) => {

      e.preventDefault();

      setLoading(true);

      setMessage("");

      const form = e.target;

      const bookingData = {

        studentName:
          form.studentName.value,

        studentEmail:
          form.studentEmail.value,

        phone:
          form.phone.value,

        tutorId:
          tutor?._id,

        tutorName:
          tutor?.tutorName,
      };

      try {

        const response =
          await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/bookings`,
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              credentials:
                "include",

              body: JSON.stringify(
                bookingData
              ),
            }
          );

        const data =
          await response.json();

        if (data.success) {

          setMessage(
            "Booking Successful"
          );

          form.reset();

          setTimeout(() => {

            document
              .getElementById(
                "booking_modal"
              )
              ?.close();

          }, 1000);

        } else {

          setMessage(
            data.message ||
            "Booking Failed"
          );
        }

      } catch (error) {

        console.log(error);

        setMessage(
          "Something Went Wrong"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <dialog
      id="booking_modal"
      className="modal"
    >

      <div className="modal-box">

        <h3 className="text-2xl font-bold mb-6">

          Book Session

        </h3>

        <form
          onSubmit={
            handleBooking
          }
          className="space-y-4"
        >

          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            className="input input-bordered w-full"
            required
          />

          <input
            type="email"
            name="studentEmail"
            placeholder="Student Email"
            className="input input-bordered w-full"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="input input-bordered w-full"
            required
          />

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >

            {
              loading
                ? "Booking..."
                : "Confirm Booking"
            }

          </button>

        </form>

        {
          message && (

            <p className="text-center mt-4 text-primary font-medium">

              {message}

            </p>
          )
        }

        <div className="modal-action">

          <form method="dialog">

            <button className="btn">

              Close

            </button>

          </form>

        </div>

      </div>

    </dialog>
  );
};

export default BookingModal;