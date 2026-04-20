import Navbar from "./(public)/components/common/navbar";
import Footer from "./(public)/components/common/footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HEADER */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="grow">
        {/* Your content here */}
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}