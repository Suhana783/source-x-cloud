export default function WhySection({ section }) {
  if (!section) return null;

  return (
    <section className="py-14 bg-gray-50 rounded-xl px-8">
      <p className="text-sm uppercase tracking-widest text-blue-600 mb-3">
        Why Choose Us
      </p>

      <h2 className="text-3xl font-bold mb-5">
        {section.title}
      </h2>

      <p className="text-gray-700 leading-8 text-lg max-w-4xl">
        {section.content}
      </p>
    </section>
  );
}