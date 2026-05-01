export default function BottomSection({ section }) {
  if (!section) return null;

  return (
    <section className="py-16 text-center bg-blue-600 text-white rounded-2xl">
      <p className="text-sm uppercase tracking-widest mb-3">
        Get Started
      </p>

      <h2 className="text-3xl md:text-4xl font-bold mb-5">
        {section.title}
      </h2>

      <p className="max-w-3xl mx-auto text-lg mb-8">
        {section.content}
      </p>

      <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition">
        Contact Us
      </button>
    </section>
  );
}