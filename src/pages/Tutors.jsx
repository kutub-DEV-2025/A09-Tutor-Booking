'use client';

import { useEffect } from 'react';

import TutorCard from '../components/TutorCard';
import SectionTitle from '../components/SectionTitle';

const Tutors = () => {

  useEffect(() => {
    document.title = 'Tutors | MediQueue';
  }, []);

  const tutors = [
    {
      _id: 1,
      tutorName: 'John Doe',
      subject: 'Mathematics',
      hourlyFee: 20,
      tutorImage: 'https://i.ibb.co/fdz7K9R/tutor1.jpg'
    },

    {
      _id: 2,
      tutorName: 'Sarah Johnson',
      subject: 'Physics',
      hourlyFee: 25,
      tutorImage: 'https://i.ibb.co/F5CYqQq/tutor2.jpg'
    },

    {
      _id: 3,
      tutorName: 'Michael Smith',
      subject: 'Chemistry',
      hourlyFee: 18,
      tutorImage: 'https://i.ibb.co/7QxZK8p/tutor3.jpg'
    }
  ];

  return (

    <div className="max-w-7xl mx-auto px-4 py-20">

      <SectionTitle
        title="All Tutors"
        subtitle="Browse all available tutors"
      />

   
      <div className="flex flex-col md:flex-row gap-4 mb-10">

        <input
          type="text"
          placeholder="Search tutor by name"
          className="input input-bordered w-full"
        />

        <input
          type="date"
          className="input input-bordered"
        />

        <input
          type="date"
          className="input input-bordered"
        />

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {
          tutors.map((tutor) => (

            <TutorCard
              key={tutor._id}
              tutor={tutor}
            />

          ))
        }

      </div>

    </div>
  );
};

export default Tutors;