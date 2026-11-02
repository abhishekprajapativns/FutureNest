function Home() {
  return (
    <main className="max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mt-10 mb-3">What's next for you?</h1>
      <p className="text-gray-600 mb-10">
        From confused to confident. Choose your class and find the right path.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <button className="border border-gray-300 rounded-xl p-6 font-medium hover:border-blue-600 hover:text-blue-600">
          After 10th
        </button>

        <button className="border border-gray-300 rounded-xl p-6 font-medium hover:border-blue-600 hover:text-blue-600">
          After 10+2
        </button>

        <button className="border border-gray-300 rounded-xl p-6 font-medium hover:border-blue-600 hover:text-blue-600">
          After Graduation
        </button>
      </div>
    </main>
  );
}

export default Home;
