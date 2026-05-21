'use client';

import { useEffect } from 'react';

export default function MyTutorsPage() {
  useEffect(() => {
    document.title = 'My Tutors | MediQueue';
  }, []);

  const tutors = [
    {
      id: 1,
      name: 'John Doe',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      subject: 'Mathematics',
      fee: 20,
      slots: 10,
      mode: 'Online',
    },
    {
      id: 2,
      name: 'Sarah Khan',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      subject: 'Physics',
      fee: 25,
      slots: 8,
      mode: 'Offline',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">

     
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-primary">
          My Tutors
        </h1>
        <p className="mt-3 text-base-content/60">
          Manage all tutors you have added to the platform.
        </p>
      </div>

      
      {tutors.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-400">
            No Tutors Added Yet
          </h2>
        </div>
      ) : (
        <div className="overflow-x-auto bg-base-100 shadow-xl rounded-2xl">

          <table className="table w-full">

           
            <thead className="bg-base-200">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Subject</th>
                <th>Fee</th>
                <th>Slots</th>
                <th>Mode</th>
                <th>Actions</th>
              </tr>
            </thead>

            
            <tbody>
              {tutors.map((tutor, index) => (
                <tr key={tutor.id} className="hover">

                  <td>{index + 1}</td>

               
                  <td>
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img
                          src={tutor.image}
                          alt={tutor.name}
                        />
                      </div>
                    </div>
                  </td>

                  <td className="font-semibold">
                    {tutor.name}
                  </td>

                  <td>{tutor.subject}</td>

                  <td className="font-medium">
                    ${tutor.fee}
                  </td>

                  <td>{tutor.slots}</td>

                  <td>
                    <span className="badge badge-primary">
                      {tutor.mode}
                    </span>
                  </td>

                
                  <td className="space-x-2">
                    <button className="btn btn-sm btn-primary">
                      Update
                    </button>
                    <button className="btn btn-sm btn-error">
                      Delete
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