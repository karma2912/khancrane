import React from "react";

const WhatsApp = () => {
  const phoneNumber = "9821661352";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: "50px", height: "50px", cursor: "pointer" }}
      />
    </a>
  );
};

export default WhatsApp;