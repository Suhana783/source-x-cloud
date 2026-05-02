export default function IntroductionSection({ section }) {
  if (!section) return null;

  return (
    <section className="py-14">
      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-widest text-blue-600 mb-3">
          Introduction
        </p>

        <h2 className="text-3xl font-bold mb-5">
          {section.title}
        </h2>

        <p className="text-gray-700 leading-8 text-lg mb-8">
          {section.content}
        </p>

        {/* Work Image below content */}
        {section.workImage?.url && (
          <div className="mt-6">
            <img
              src={section.workImage.url}
              alt={section.workImage.alt || section.title}
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}