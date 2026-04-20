export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-50 px-6 py-16">
      <section className="w-full max-w-2xl rounded-3xl border border-neutral-200 bg-white p-10 shadow-sm">
        <h1 className="text-4xl font-bold text-center mt-10">Welcome to My App</h1>
        <p className="text-center mt-4 text-gray-600">
          This is a sample Next.js application with Tailwind CSS.
        </p>
        <div className="flex justify-center mt-6">
          <div className="flex h-48 w-48 items-center justify-center rounded-full bg-neutral-100 text-sm text-neutral-500">
            Next.js Logo Placeholder
          </div>
        </div>
      </section>
    </main>
  );
}
