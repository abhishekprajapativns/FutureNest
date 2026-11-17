// The career fields shown as cards
const fields = [
  "Engineering",
  "Medical",
  "Commerce",
  "Arts & Humanities",
  "Law",
  "Design",
  "Defence",
  "Government Jobs",
  "Computer & IT",
  "And Many More",
];

function Fields() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-12">
      <h2 className="font-heading text-center text-3xl font-bold text-slate-900 md:text-4xl">
        Discover your ideal career path
      </h2>
      <p className="mt-2 text-center text-gray-600">
        Explore a wide range of career options across every field.
      </p>

      {/* One card for each field */}
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {fields.map((field) => (
          <div
            key={field}
            className="rounded-xl border border-orange-100 bg-white px-4 py-5 text-center font-medium text-slate-800"
          >
            {field}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Fields;
