function CallToAction() {
  // Scroll back to the top of the page smoothly
  function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-12">
      <div className="rounded-3xl bg-orange-700 px-6 py-14 text-center text-white">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">
          Your future starts with one step
        </h2>
        <p className="mt-3 text-orange-50">
          Take the free career assessment and find careers that fit you.
        </p>

        <button
          onClick={goToTop}
          className="mt-6 rounded-xl bg-white px-7 py-3 font-bold text-orange-700"
        >
          Take the Free Assessment
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
