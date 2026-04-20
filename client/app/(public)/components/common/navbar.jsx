"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-50 border-b relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="bg-[#2d7fa3] text-white px-2 py-1 rounded-md text-sm font-bold">
            {"</>"}
          </div>
          <h1 className="text-xl font-semibold text-gray-800">
            SourceXCloud
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6 text-base font-medium text-gray-700">
          {["Home", "About", "Services", "Courses", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="px-3 py-1 rounded-md hover:bg-[#2d7fa3]/10 hover:text-[#2d7fa3] transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-gray-700 text-xl"
        >
          ☰
        </button>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        {/* MOBILE LINKS */}
        <div className="flex flex-col gap-4 px-6 text-base text-gray-700 font-medium">
          {["Home", "About", "Services", "Courses", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="px-3 py-2 rounded-md hover:bg-[#2d7fa3]/10 hover:text-[#2d7fa3] transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}