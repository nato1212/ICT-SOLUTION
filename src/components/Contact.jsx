import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-6">
          Get in Touch
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-xl mx-auto">
          Let us know how we can help with your ICT needs. Our team will get
          back to you within 24 hours.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="bg-white p-8 rounded-xl shadow space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center bg-blue-50 p-8 rounded-xl shadow text-blue-900">
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
              className="rounded mt-6 border border-blue-300"
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
