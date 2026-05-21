'use client';

import { useEffect } from 'react';

export default function MyBookedSessionsPage() {
  useEffect(() => {
    document.title = 'My Booked Sessions | MediQueue';
  }, []);

  const sessions = [
    {
      id: 1,
      tutor: 'John Doe',
      student: 'Alex',
      email: 'alex@gmail.com',
      status: 'Booked',
    },
    {
      id: 2,
      tutor: 'Sarah Khan',
      student: 'Michael',
      email: 'michael@gmail.com',
      status: 'Pending',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">

      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-primary">
          My Booked Sessions
        </h2>

        <p className="mt-3 text-gray-500">
          Manage all your booked tutor sessions easily.
        </p>
      </div>

      {sessions.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold text-gray-400">
            No Booked Sessions Found
          </h2>
        </div>
      ) : (
        <div className="overflow-x-auto bg-base-100 shadow-xl rounded-2xl">

          <table className="table">

            <thead className="bg-base-200">
              <tr>
                <th>#</th>
                <th>Tutor Name</th>
                <th>Student Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {sessions.map((session, index) => (
                <tr key={session.id}>
                  <td>{index + 1}</td>

                  <td className="font-semibold">
                    {session.tutor}
                  </td>

                  <td>{session.student}</td>

                  <td>{session.email}</td>

                  <td>
                    <span className="badge badge-success">
                      {session.status}
                    </span>
                  </td>

                  <td>
                    <button className="btn btn-error btn-sm">
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
  );
}