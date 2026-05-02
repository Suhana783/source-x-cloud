export default function FeaturesSection({ section }) {
  if (!section) return null;

  return (
    <section className="py-5">
      {/* Show title only if it exists */}
      {section.title && (
        <h2 className="text-3xl font-bold mb-8">
          {section.title}
        </h2>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {section.items?.map((item, index) => (
          <div
            key={index}
            className="relative p-6 border rounded-2xl shadow-sm bg-white
                       transition-all duration-300
                       hover:-translate-y-2 hover:shadow-lg"
          >
            {/* Top Right Cut Circle */}
            <div
              className="absolute -top-4 -right-4 w-16 h-16
                         bg-teal-300 rounded-full"
            ></div>

            {/* Card Content */}
            <div className="relative z-10">
              {item.text && (
                <h3 className="text-lg font-semibold mb-3">
                  {item.text}
                </h3>
              )}

              {item.description && (
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}