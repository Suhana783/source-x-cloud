export default function IndustriesSection({ section }) {
  if (!section) return null;

  return (
    <section className="py-14">
      <p className="text-sm uppercase tracking-widest text-blue-600 mb-3">
        Industries We Serve
      </p>

      <h2 className="text-3xl font-bold mb-8">
        {section.title}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {section.items?.map((item, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">
              {item.text}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}