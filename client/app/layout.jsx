import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "../app/(public)/components/common/WhatsAppButton.jsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "SourceXCloud",
  description: "Learn • Build • Scale",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-screen font-sans">
        {children}
         {/* Floating WhatsApp */}
        <WhatsAppButton />
      </body>
    </html>
  );
}