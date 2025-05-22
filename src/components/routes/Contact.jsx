import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [isSent, setIsSent] = useState(false); 
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); 

    const formData = new FormData(event.target);
    formData.append("access_key", "70aef623-8b37-4dbf-8ccf-b508057e5c31");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setIsSent(true); 
        event.target.reset(); 
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <div>
      <Helmet>
        <title>Contact Khan Crane Service | Trusted Crane Experts</title>
        <meta
          name="description"
          content="Learn about Khan Crane Service – a leading crane rental company in Mumbai with over 11 years of experience and 1000+ successful projects."
        />
      </Helmet>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Google Map Location"
            scrolling="no"
            src="https://maps.google.com/maps?q=Room%20No%20Cen-288,%20Khan%20Galli,%20Charkop%20Kandivali%20West,%20Mumbai,%20Pin%20400067&hl=en&z=16&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Our team will contact you in under 24 Hours
            </p>
            <form onSubmit={onSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`text-white ${
                  isSubmitting || isSent
                    ? "bg-yellow-600 cursor-not-allowed"
                    : "bg-yellow-500 hover:bg-yellow-600"
                } border-0 py-2 px-6 focus:outline-none rounded text-lg transition-colors duration-200`}
                disabled={isSubmitting || isSent} 
              >
                {isSubmitting
                  ? "Sending..."
                  : isSent
                  ? "Message Sent!"
                  : "Send Message"}
              </button>
              {isSent && (
                <p className="text-xs text-green-500 mt-3">
                  Your message has been sent successfully!
                </p>
              )}
            </form>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
