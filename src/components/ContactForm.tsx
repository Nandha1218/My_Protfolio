import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("https://formspree.io/f/xjkrndbj", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-8">
      <h3 className="text-xl font-bold mb-4 text-blue-600">Contact Me</h3>
      {submitted ? (
        <div className="text-green-600 font-semibold">Thank you! Your message has been sent.</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={4}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
