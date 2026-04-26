import Navbar from "./(public)/components/common/navbar";
import Footer from "./(public)/components/common/footer";
import Hero from "./(public)/components/home/hero";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* HEADER */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="grow">
        <Hero />
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}