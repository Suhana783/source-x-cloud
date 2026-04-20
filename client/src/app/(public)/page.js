export default function HomePage () {

  return (
    <main>
    <HeroSection />

  </main>
);
}

function HeroSection () {

  return (

    <section className="min-h-screen flex items-center justify-between px-16 bg-linear-to-r from-teal-900 to-blue-900 text-white">
      {/* {LEFT CONTENT} */}

      <div className="max-w-xl space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          Build Your Future with <span className="text-teal-400">Technology</span>
        </h1>

       <p className="text-gray-500 text-lg">
         Learn, Build, and Scale with SourceXCloud - a unified platform...
       </p>

      <div className="mt-6 flex gap-4">
        <button className="bg-teal-400 px-6 py-2 rounded">
          Explore Courses
        </button>

        <button className="border border-gray-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-500 transition">
         Get IT Services
        </button>

      </div>
      </div>

      <div className="w-420px h-280px bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
      
      <div className="mb-4">
        <p className="text-sm text-gray-300">
          AWS Cloud Practitioner
        </p>

        <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
         <div className="w-[65%] h-full bg-teal-400 rounded-full"></div>

        </div>
      </div>
      
      </div>

    </section>
  )
}