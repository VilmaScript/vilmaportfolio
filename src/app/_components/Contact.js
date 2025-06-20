"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Button from "./Button";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_rag8ufs',
      'template_hrpuvx9',
      form.current,
      'j3ObUzmGFc7bcFrqD'
    )
      .then((result) => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.");
        console.error("Email send error:", error.text);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div id="contact" className="py-12 px-8 md:px-28 bg-primary text-white">
      <ToastContainer
        toastClassName={() =>
          "bg-secondary text-white px-4 py-3 rounded shadow-lg font-medium"
        }

      />
      <h2 className="text-xl sm:text-3xl font-bold text-center text-transparent py-2 bg-clip-text bg-[linear-gradient(to_right,#6f15e6,#FFFFFF,#A259FF)] tracking-wider">
        Let&apos;s Work Together 🤝
      </h2>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-5 sm:mb-10 text-sm sm:text-base">
        I&apos;m open to new opportunities and would love to be part of a creative team.
        If you have something in mind or just want to connect, feel free to reach out!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 bg-secondary text-white rounded-md outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-secondary text-white rounded-md"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-200">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Write your message..."
              className="w-full px-4 py-3 bg-secondary text-white rounded-md"
            />
          </div>

          {/* Custom Button with Spinner */}
          <Button> 
           {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>

        {/* Side Cards */}
        <div className="flex flex-col gap-8">
          <div className="bg-secondary rounded-lg p-6 shadow-lg text-sm sm:text-base">
            <h3 className="text-md sm:text-xl font-semibold mb-2 text-white">Connect with me:</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                <FaEnvelope className="text-white" /> abaravivian20@email.com
              </li>
              <li className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                <FaLinkedin className="text-white" /> linkedin.com/in/abara-vivian
              </li>
              <li className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                <FaGithub className="text-white" /> github.com/vilmascript
              </li>
              <li className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                <RiTwitterXFill className="text-white" /> twitter.com/atta_gurl_
              </li>
            </ul>
          </div>

          <div className="bg-secondary rounded-lg p-6 shadow-lg flex flex-col justify-center text-gray-300">
            <h3 className="text-md sm:text-xl font-semibold mb-2 text-white">Looking for Opportunities</h3>
            <p className="text-sm sm:text-base">
              I&apos;m currently exploring new frontend roles where I can contribute to meaningful projects,
              grow as a developer, and work with passionate teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
