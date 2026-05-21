async function getTutors() {
  const res = await fetch("http://localhost:5000/tutors");

  return res.json();
}

export default async function Tutors() {
  const tutors = await getTutors();

  return (
    <div>
      {tutors.map((tutor) => (
        <h1 key={tutor._id}>
          {tutor.tutorName}
        </h1>
      ))}
    </div>
  );
}