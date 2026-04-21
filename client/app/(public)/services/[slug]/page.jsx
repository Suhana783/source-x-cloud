import { notFound } from "next/navigation";
import Navbar from "../../components/common/navbar";
import Footer from "../../components/common/footer";

async function getService(slug) {
  try {
    const res = await fetch(
      `http://localhost:5000/api/public/services/${slug}`,
      {
        next: { revalidate: 60 }, // better than no-store
      }
    );

    if (!res.ok) return null;

    const data = await res.json();
    return data.data;
  } catch (err) {
    return null;
  }
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) return notFound();

  return (
    <div className="bg-white text-gray-900">
      <Navbar />


      {/* ---------------- HERO ---------------- */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div>
          <p className="text-sm uppercase tracking-widest text-purple-600 mb-4">
            {service.category || "Service"}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {service.title}
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        {service.image && (
          <img
            src={service.image}
            alt={service.title}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        )}
      </section>

      {/* ---------------- STATS / TAG ---------------- */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          
          <div>
            <p className="text-3xl font-bold text-purple-600">100%</p>
            <p className="text-gray-600 mt-2">Custom Solutions</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-purple-600">24/7</p>
            <p className="text-gray-600 mt-2">Support Availability</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-purple-600">
              {service.tag || "Premium"}
            </p>
            <p className="text-gray-600 mt-2">Service Quality</p>
          </div>

        </div>
      </section>

      {/* ---------------- FEATURES ---------------- */}
      {service.features?.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-20">
          
          <h2 className="text-3xl font-bold mb-12">
            What you get
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="p-6 border rounded-2xl hover:shadow-lg transition"
              >
                <div className="w-10 h-1 bg-purple-600 mb-4"></div>

                <p className="text-gray-700 leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ---------------- CTA ---------------- */}
      <section className="bg-purple-600 text-white py-20 text-center ">
        <h2 className="text-3xl font-bold mb-4">
          Ready to get started?
        </h2>

        <p className="mb-6 text-lg opacity-90">
          Let's build something amazing together.
        </p>

        <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
          Contact Us
        </button>
      </section>

      <Footer />
    </div>
  );
}