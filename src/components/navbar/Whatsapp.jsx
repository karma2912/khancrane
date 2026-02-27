import React from "react";

const WhatsApp = () => {
  const phoneNumber = "9967519974";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    // fixed bottom-24 puts it exactly above the bottom-5 Call button
    <div className="fixed bottom-24 right-5 z-50">
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block hover:scale-110 transition-transform duration-300 shadow-lg rounded-full bg-white"
        aria-label="Chat on WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-[56px] h-[56px]"
        />
      </a>
    </div>
  );
};

export default WhatsApp;