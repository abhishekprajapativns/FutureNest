// The three steps shown in the green section
const steps = [
  {
    number: 1,
    title: "Choose your stage",
    text: "Tell us if you are after 10th, 12th or graduation.",
  },
  {
    number: 2,
    title: "Take a short test",
    text: "Answer simple questions about your interests.",
  },
  {
    number: 3,
    title: "Get your careers",
    text: "See careers, eligibility and exams that fit you.",
  },
];

function Steps() {
  return (
    <section className="bg-teal-700 py-14">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <h2 className="font-heading text-center text-3xl font-bold text-white md:text-4xl">
          Your career guidance in 3 simple steps
        </h2>

        {/* One white card for each step */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="rounded-2xl bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 font-bold text-teal-800">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;
