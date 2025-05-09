import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/myzwpkro", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-100 dark:bg-gray-800 py-20 px-6 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 text-center w-full">
            Get in Touch
          </h2>
        </div>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-xl mx-auto">
          Let us know how we can help with your ICT needs. Our team will get
          back to you within 24 hours.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>

            {status === "SUCCESS" && (
              <p className="text-green-600 dark:text-green-400 font-medium mt-4">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "ERROR" && (
              <p className="text-red-600 dark:text-red-400 font-medium mt-4">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center bg-blue-50 dark:bg-gray-700 p-8 rounded-xl shadow text-blue-900 dark:text-blue-200">
            <p className="mb-4">
              📍 <strong>Address:</strong> Goro, Addis Ababa, Ethiopia
            </p>
            <p className="mb-4">
              📞 <strong>Phone:</strong> +251935065468
            </p>
            <p className="mb-4">
              ✉️ <strong>Email:</strong> natananmelese75@gmail.com
            </p>
            <iframe
              className="rounded mt-6 border border-blue-300 dark:border-gray-600"
              src="https://www.google.com/maps/embed?pb=9jgL7eNuNTfbe1aM7"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
