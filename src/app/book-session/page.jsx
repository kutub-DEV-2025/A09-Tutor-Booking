"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  Clock3,
  MapPin,
  Phone,
  Search,
  Trash2,
  User,
} from "lucide-react";

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    
    const fakeBookings = [
      {
        id: 1,
        doctor: "Dr. Sarah Ahmed",
        specialization: "Cardiologist",
        hospital: "City Medical Center",
        date: "25 May 2026",
        time: "10:30 AM",
        status: "Confirmed",
        phone: "+880 1711-223344",
        image:
          "https://i.ibb.co/4pDNDk1/avatar.png",
      },
      {
        id: 2,
        doctor: "Dr. Tanvir Hasan",
        specialization: "Neurologist",
        hospital: "Green Hospital",
        date: "28 May 2026",
        time: "02:00 PM",
        status: "Pending",
        phone: "+880 1811-998877",
        image:
          "https://i.ibb.co/4pDNDk1/avatar.png",
      },
      {
        id: 3,
        doctor: "Dr. Nusrat Jahan",
        specialization: "Dermatologist",
        hospital: "Modern Care Clinic",
        date: "01 June 2026",
        time: "11:45 AM",
        status: "Completed",
        phone: "+880 1911-445566",
        image:
          "https://i.ibb.co/4pDNDk1/avatar.png",
      },
    ];

    setTimeout(() => {
      setBookings(fakeBookings);
      setLoading(false);
    }, 1000);
  }, []);

  const handleDelete = (id) => {
    const remaining = bookings.filter((booking) => booking.id !== id);
    setBookings(remaining);
  };

  const filteredBookings = bookings.filter((booking) =>
    booking.doctor.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
   
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">
              My Bookings
            </h1>

            <p className="text-slate-500 mt-3 text-lg">
              Manage all your appointments in one place.
            </p>
          </div>

       
          <div className="relative w-full lg:w-[350px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />

            <input
              type="text"
              placeholder="Search doctor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input input-bordered w-full pl-12 rounded-2xl h-14 bg-white shadow-sm"
            />
          </div>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-slate-500 font-medium">Total Bookings</h2>
            <p className="text-4xl font-bold text-slate-800 mt-3">
              {bookings.length}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-slate-500 font-medium">Confirmed</h2>
            <p className="text-4xl font-bold text-green-600 mt-3">
              {
                bookings.filter((booking) => booking.status === "Confirmed")
                  .length
              }
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-slate-500 font-medium">Pending</h2>
            <p className="text-4xl font-bold text-orange-500 mt-3">
              {
                bookings.filter((booking) => booking.status === "Pending")
                  .length
              }
            </p>
          </div>
        </div>

     
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {filteredBookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-7">
               
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <img
                      src={booking.image}
                      alt="doctor"
                      className="w-20 h-20 rounded-2xl object-cover border"
                    />

                    <div>
                      <h2 className="text-2xl font-bold text-slate-800">
                        {booking.doctor}
                      </h2>

                      <p className="text-primary font-medium mt-1">
                        {booking.specialization}
                      </p>
                    </div>
                  </div>

                  <div>
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold
                        ${
                          booking.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : booking.status === "Pending"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-blue-100 text-blue-700"
                        }
                      `}
                    >
                      {booking.status}
                    </span>
                  </div>
                </div>

              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                  <div className="flex items-center gap-3 bg-slate-50 rounded-2xl p-4">
                    <Calendar className="text-primary w-5 h-5" />

                    <div>
                      <p className="text-sm text-slate-500">Appointment Date</p>
                      <h3 className="font-semibold text-slate-700">
                        {booking.date}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-slate-50 rounded-2xl p-4">
                    <Clock3 className="text-primary w-5 h-5" />

                    <div>
                      <p className="text-sm text-slate-500">Appointment Time</p>
                      <h3 className="font-semibold text-slate-700">
                        {booking.time}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-slate-50 rounded-2xl p-4">
                    <MapPin className="text-primary w-5 h-5" />

                    <div>
                      <p className="text-sm text-slate-500">Hospital</p>
                      <h3 className="font-semibold text-slate-700">
                        {booking.hospital}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-slate-50 rounded-2xl p-4">
                    <Phone className="text-primary w-5 h-5" />

                    <div>
                      <p className="text-sm text-slate-500">Contact</p>
                      <h3 className="font-semibold text-slate-700">
                        {booking.phone}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button className="btn flex-1 rounded-2xl bg-primary border-none hover:bg-primary text-white h-12">
                    <User className="w-5 h-5" />
                    View Profile
                  </button>

                  <button
                    onClick={() => handleDelete(booking.id)}
                    className="btn flex-1 rounded-2xl bg-red-500 border-none hover:bg-red-600 text-white h-12"
                  >
                    <Trash2 className="w-5 h-5" />
                    Cancel Booking
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBookings.length === 0 && (
          <div className="bg-white rounded-3xl p-16 text-center shadow-sm border border-slate-100 mt-10">
            <h2 className="text-3xl font-bold text-slate-700">
              No Booking Found
            </h2>

            <p className="text-slate-500 mt-3">
              Try searching with another doctor name.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
