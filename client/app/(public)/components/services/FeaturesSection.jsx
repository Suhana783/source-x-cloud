export default function FeaturesSection({ section }) {
  if (!section) return null;

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">
        {section.title}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {section.items?.map((item, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold mb-2">
              {item.text}
            </h3>

            <p className="text-gray-600 text-sm">
              Professional enterprise-grade service solution.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}