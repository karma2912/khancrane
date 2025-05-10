import React from "react";

const Call = () => {
  const phoneNumbers = ["9821661352", "9967519974", "8369594756"];

  return (
    <div className="fixed bottom-5 right-5 flex flex-col space-y-2 z-50">
      {phoneNumbers.map((number, index) => (
        <a
          key={index}
          href={`tel:${number}`}
          className="bg-yellow-500 p-3 z-50 rounded-full shadow-lg text-white font-bold"
        >
          Call {number}
        </a>
      ))}
    </div>
  );
};

export default Call;