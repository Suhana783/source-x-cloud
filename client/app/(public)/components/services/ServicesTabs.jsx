"use client";

import Link from "next/link";
import { useState } from "react";

export default function ServicesTabs({ services }) {
  const [activeParent, setActiveParent] = useState(null);

  if (!services?.length) return null;

  const activeService = services.find(
    (s) => s.slug === activeParent
  );

  return (
    <div
      className="w-full border-b bg-white relative z-[99]"
      onMouseLeave={() => setActiveParent(null)}
    >
      {/* 🔹 Parent Tabs */}
      <div className="flex gap-10 px-10 py-4 overflow-x-auto">
        {services.map((parent) => (
          <button
            key={parent.slug}
            onMouseEnter={() => setActiveParent(parent.slug)}
            onClick={() =>
              setActiveParent(
                activeParent === parent.slug ? null : parent.slug
              )
            }
            className="font-semibold whitespace-nowrap hover:text-blue-600 transition"
          >
            {parent.title}
          </button>
        ))}

           {activeService?.children?.length > 0 && (
  <div className="absolute top-full left-0 mt-2 bg-white shadow-xl border rounded-lg p-4 z-[9999] w-max min-w-[220px]">

    {/* VERTICAL LIST */}
    <div className="flex flex-col gap-2">
      {activeService.children.map((child) => (
        <Link
          key={child.slug}
          href={`/services/${child.slug}`}
          className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition whitespace-nowrap"
        >
          {child.title}
        </Link>
      ))}
    </div>

  </div>
)}
      </div>

      {/* 🔹 FULL WIDTH DROPDOWN */}

    </div>
  );
}