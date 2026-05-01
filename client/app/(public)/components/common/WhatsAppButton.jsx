"use client";

export default function WhatsAppButton() {
  const phoneNumber = "91XXXXXXXXX"; // replace
  const message = "Hi, I want to know more about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 whatsapp-pulse"
    >
      <div className="w-14 h-14 flex items-center justify-center bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:scale-110 transition duration-300">
        
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white"
        >
          <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.886.754 5.705 2.188 8.196L0 32l7.65-2.164A15.96 15.96 0 0016 32c8.836 0 16-7.164 16-16.396S24.836.396 16 .396zm0 29.214a13.12 13.12 0 01-6.7-1.842l-.48-.286-4.54 1.284 1.212-4.42-.312-.456a13.12 13.12 0 01-2.01-7.094c0-7.24 5.89-13.13 13.13-13.13s13.13 5.89 13.13 13.13-5.89 13.13-13.13 13.13zm7.41-9.75c-.404-.202-2.39-1.18-2.76-1.314-.37-.134-.64-.202-.91.202-.27.404-1.046 1.314-1.282 1.584-.236.27-.472.304-.876.102-.404-.202-1.706-.63-3.25-2.01-1.2-1.07-2.01-2.39-2.244-2.794-.236-.404-.026-.622.176-.824.182-.18.404-.472.606-.708.202-.236.27-.404.404-.674.134-.27.068-.506-.034-.708-.102-.202-.91-2.188-1.246-2.996-.33-.792-.666-.684-.91-.696-.236-.01-.506-.012-.776-.012-.27 0-.708.102-1.08.506-.37.404-1.414 1.382-1.414 3.366s1.45 3.902 1.65 4.172c.202.27 2.852 4.354 6.912 6.104.966.416 1.72.664 2.306.85.968.308 1.85.264 2.546.16.776-.116 2.39-.976 2.73-1.918.338-.942.338-1.75.236-1.918-.102-.168-.37-.27-.776-.472z" />
        </svg>

      </div>
    </a>
  );
}