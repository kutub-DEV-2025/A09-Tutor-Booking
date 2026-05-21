'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BookSessionPage() {
  const router = useRouter();

 
  const user = null; 

  useEffect(() => {
    document.title = "Book Session | MediQueue";

   
    if (!user) {
      router.push("/login"); }
  }, [user, router]);

  return (
    <div className="max-w-4xl mx-auto py-20 text-center">

      <h1 className="text-4xl font-bold text-primary">
        Book Session
      </h1>

      <p className="mt-4 text-base-content/60">
        Select a tutor and book your session easily.
      </p>


      <div className="mt-10">
        <button className="btn btn-primary">
          Book Now
        </button>
      </div>

    </div>
  );
}