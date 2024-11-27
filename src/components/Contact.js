/**
 * Contact Component
 *
 * This component provides a contact form and a button to download my resume.
 *
 * Features:
 * - Input fields for name, email, and message.
 * - Button to submit the form.
 * - Downloadable resume link.
 *
 * Author: JaqiKal
 * Date: Nov 2024
 */

import React from "react";

const Contact = () => {
  return (
    // Contact section with form and resume download link
    <section id="contact" className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        {/* Section title */}
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        {/* Contact form */}
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-md"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

        {/* Resume download link */}
        <div className="text-center mt-8">
          <p className="mb-4 text-lg">
            Interested in knowing more about my professional background?
          </p>
          <a
            href="/Resume.pdf"
            download
            className="inline-block px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900"
          >
            Download My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
