"use client";

const LoadingSpinner = () => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100">

  

      <div className="relative">

        <span className="loading loading-spinner loading-lg text-primary w-16"></span>

      </div>

     

      <h2 className="mt-6 text-2xl font-bold text-primary">

        MediQueue

      </h2>

      <p className="text-base-content/60 mt-2">

        Loading, please wait...

      </p>

    </div>
  );
};

export default LoadingSpinner;