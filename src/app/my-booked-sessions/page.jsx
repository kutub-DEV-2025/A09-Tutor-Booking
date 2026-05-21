"use client";

import { useEffect, useState } from "react";
import {
  CalendarDays,
  Mail,
  Trash2,
  User2,
} from "lucide-react";

export default function MyBookedSessions() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);


  const currentUserEmail = "student@gmail.com";

  useEffect(() => {
 
    const bookingData = [
      {
        _id: 1,
        tutorName: "Dr. Sarah Ahmed",
        studentName: "Mohammad",
        email: "student@gmail.com",
        date: "25 May 2026",
        status: "confirmed",
      },
      {
        _id: 2,
        tutorName: "Tanvir Hasan",
        studentName: "Mohammad",
        email: "student@gmail.com",
        date: "28 May 2026",
        status: "pending",
      },
      {
        _id: 3,
        tutorName: "Nusrat Jahan",
        studentName: "Rahim",
        email: "rahim@gmail.com",
        date: "29 May 2026",
        status: "confirmed",
      },
    ];

    const userBookings = bookingData.filter(
      (booking) => booking.email === currentUserEmail
    );

    setTimeout(() => {
      setSessions(userBookings);
      setLoading(false);
    }, 1000);
  }, []);

  // Cancel Booking
  const handleCancel = (id) => {
    const updated = sessions.map((session) =>
      session._id === id
        ? { ...session, status: "cancelled" }
        : session
    );

    setSessions(updated);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">

     
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-slate-800">
            My Booked Sessions
          </h1>

          <p className="text-slate-500 mt-2">
            Manage all your booked tutor sessions easily.
          </p>
        </div>

        {sessions.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center shadow-sm border">
            <h2 className="text-3xl font-bold text-slate-700">
              No Booked Sessions Found
            </h2>

            <p className="text-slate-500 mt-3">
              You haven’t booked any tutor sessions yet.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-3xl shadow-sm border border-slate-100">

            <table className="table">
             
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th>#</th>
                  <th>Tutor</th>
                  <th>Student</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {sessions.map((session, index) => (
                  <tr key={session._id} className="hover">

                   
                    <td className="font-semibold">
                      {index + 1}
                    </td>

                
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-3 rounded-xl">
                          <User2 className="w-5 h-5 text-primary" />
                        </div>

                        <div>
                          <h2 className="font-bold text-slate-700">
                            {session.tutorName}
                          </h2>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="flex items-center gap-2">
                        <User2 className="w-4 h-4 text-slate-500" />
                        {session.studentName}
                      </div>
                    </td>

                    <td>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-slate-500" />
                        {session.email}
                      </div>
                    </td>

                    {/* DATE */}
                    <td>
                      <div className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4 text-slate-500" />
                        {session.date}
                      </div>
                    </td>

                    <td>
                      <span
                        className={`px-4 py-2 rounded-full text-xs font-bold
                        ${
                          session.status === "confirmed"
                            ? "bg-green-100 text-green-700"
                            : session.status === "pending"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-red-100 text-red-700"
                        }
                      `}
                      >
                        {session.status}
                      </span>
                    </td>

                    <td>
                      <button
                        onClick={() =>
                          handleCancel(session._id)
                        }
                        disabled={
                          session.status === "cancelled"
                        }
                        className="btn btn-sm bg-red-500 hover:bg-red-600 border-none text-white rounded-xl"
                      >
                        <Trash2 className="w-4 h-4" />
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        )}
      </div>
    </div>
  );
}