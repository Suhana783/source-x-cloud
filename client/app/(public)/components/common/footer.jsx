import Link from "next/link";
import { FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#174a5c] text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-2 items-start">

        {/* LEFT SECTION */}
        <div className="flex flex-col gap-5">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="bg-[#2d7fa3] px-2 py-1 rounded-md text-sm font-bold">
              {"</>"}
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold">
              SourceXCloud
            </h1>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm md:text-base text-white/80 max-w-md">
            Empowering careers and businesses with world-class cloud education 
            and engineering services.
          </p>

          {/* CONTACT */}
          <div className="text-sm md:text-base text-white/80 flex flex-col gap-1">
            <p>📍 Bengaluru, India</p>
            <p>📧 hello@sourcexcloud.com</p>
            <p>📞 +91 80000 00000</p>
          </div>

          {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-2">

                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 
                    hover:bg-[#2d7fa3] transition duration-300"
                >
                    <FaTwitter className="text-lg" />
                </a>

                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 
                    hover:bg-[#2d7fa3] transition duration-300"
                >
                    <FaLinkedin className="text-lg" />
                </a>

                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 
                    hover:bg-[#2d7fa3] transition duration-300"
                >
                    <FaInstagram className="text-lg" />
                </a>

                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 
                    hover:bg-[#2d7fa3] transition duration-300"
                >
                    <FaWhatsapp className="text-lg" />
                </a>

              </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col items-center md:items-start gap-3">

          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Quick Links
          </h2>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm md:text-base font-medium">
            {["Home", "About", "Services", "Courses", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-[#2d7fa3] transition"
              >
                {item}
              </Link>
            ))}
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/20 text-center text-sm md:text-base text-white/70 py-4">
        © {new Date().getFullYear()} SourceXCloud. All rights reserved.
      </div>
    </footer>
  );
}