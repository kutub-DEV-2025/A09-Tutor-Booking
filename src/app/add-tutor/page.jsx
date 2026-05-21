'use client';

import { useEffect, useState } from 'react';

export default function AddTutorPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'Add Tutor | MediQueue';
  }, []);

  const handleAddTutor = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const tutorData = {
      tutorName: form.tutorName.value,
      tutorImage: form.tutorImage.value,
      subject: form.subject.value,
      availableDays: form.availableDays.value,
      availableTime: form.availableTime.value,
      hourlyFee: parseInt(form.hourlyFee.value),
      totalSlot: parseInt(form.totalSlot.value),
      sessionDate: form.sessionDate.value,
      institution: form.institution.value,
      experience: form.experience.value,
      location: form.location.value,
      teachingMode: form.teachingMode.value,
      createdAt: new Date(),
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tutors`,
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(tutorData),
        }
      );

      const data = await res.json();

      if (data.insertedId) {
        alert('Tutor Added Successfully');
        form.reset();
      }
    } catch (error) {
      console.error(error);
      alert('Failed To Add Tutor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="card bg-base-100 shadow-xl p-8">
        <h2 className="text-4xl font-bold text-center mb-10">
          Add Tutor
        </h2>

        <form
          onSubmit={handleAddTutor}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input name="tutorName" placeholder="Tutor Name" className="input input-bordered w-full" required />
          <input name="tutorImage" placeholder="Photo URL" className="input input-bordered w-full" required />

          <select name="subject" className="select select-bordered w-full" required>
            <option value="">Select Subject</option>
            <option>Mathematics</option>
            <option>Physics</option>
            <option>English</option>
            <option>Chemistry</option>
          </select>

          <input name="availableDays" placeholder="Available Days" className="input input-bordered w-full" required />
          <input name="availableTime" placeholder="Available Time" className="input input-bordered w-full" required />

          <input type="number" name="hourlyFee" placeholder="Hourly Fee" className="input input-bordered w-full" required />
          <input type="number" name="totalSlot" placeholder="Total Slot" className="input input-bordered w-full" required />

          <input type="date" name="sessionDate" className="input input-bordered w-full" required />

          <input name="institution" placeholder="Institution" className="input input-bordered w-full" required />
          <input name="experience" placeholder="Experience" className="input input-bordered w-full" required />
          <input name="location" placeholder="Location" className="input input-bordered w-full" required />

          <select name="teachingMode" className="select select-bordered w-full" required>
            <option value="">Teaching Mode</option>
            <option>Online</option>
            <option>Offline</option>
            <option>Both</option>
          </select>

          <button
            disabled={loading}
            className="btn btn-primary md:col-span-2"
          >
            {loading ? 'Adding Tutor...' : 'Add Tutor'}
          </button>
        </form>
      </div>
    </div>
  );
}