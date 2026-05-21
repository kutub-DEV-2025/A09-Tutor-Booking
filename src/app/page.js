import Banner from "../components/Banner";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-base-100">

      
      <Banner />

     
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Welcome to <span className="text-primary">MediQueue</span>
        </h1>

        <p className="mt-6 text-lg text-base-content/70 max-w-2xl mx-auto">
          A smart tutor booking platform where students connect with expert teachers,
          book sessions instantly, and learn with flexibility.
        </p>

        <div className="mt-10">
          <Link
            href="/tutors"
            className="btn btn-primary btn-lg rounded-full px-10 shadow-lg"
          >
            Explore Tutors
          </Link>
        </div>
      </section>

 
      <section className="bg-gradient-to-b from-base-200 to-base-100 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Why Students Love MediQueue
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Expert Tutors",
                desc: "Verified teachers across multiple subjects.",
              },
              {
                title: "Instant Booking",
                desc: "Book sessions in seconds without hassle.",
              },
              {
                title: "Flexible Learning",
                desc: "Online & offline classes anytime you want.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 rounded-2xl"
              >
                <div className="card-body text-center">
                  <h3 className="text-xl font-bold text-primary">
                    {f.title}
                  </h3>
                  <p className="text-base-content/70 mt-2">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

     
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="p-10 rounded-2xl bg-base-200 shadow">
            <h2 className="text-5xl font-bold text-primary">500+</h2>
            <p className="mt-2 text-base-content/60">Active Tutors</p>
          </div>

          <div className="p-10 rounded-2xl bg-base-200 shadow">
            <h2 className="text-5xl font-bold text-secondary">5K+</h2>
            <p className="mt-2 text-base-content/60">Students Joined</p>
          </div>

          <div className="p-10 rounded-2xl bg-base-200 shadow">
            <h2 className="text-5xl font-bold text-accent">98%</h2>
            <p className="mt-2 text-base-content/60">Success Rate</p>
          </div>

        </div>
      </section>

     
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Start Learning Today
        </h2>

        <p className="mt-4 text-white/80">
          Join MediQueue and learn smarter with expert tutors.
        </p>

        <div className="mt-8">
          <Link
            href="/register"
            className="btn btn-white text-primary rounded-full px-10"
          >
            Get Started
          </Link>
        </div>
      </section>

    </div>
  );
}