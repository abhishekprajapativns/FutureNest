import { useParams } from "react-router-dom";

function Quiz() {
  // Get the class value from the link
  const { classId } = useParams();

  return (
    <main className="max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mt-10">Quiz Page</h1>
      <p className="text-gray-600 mt-3">You selected: {classId}</p>
    </main>
  );
}

export default Quiz;
