"use client";

export default function ServiceFilters({ categories = [], active, setActive }) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {categories.map((cat) => {
        const isActive = active === cat;

        return (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200
              ${
                isActive
                  ? "bg-gradient-to-r from-[#1f5f7a] to-[#2d7fa3] text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100 hover:shadow-sm"
              }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}