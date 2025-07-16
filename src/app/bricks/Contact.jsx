'use client';
import React from 'react';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Image from 'next/image';

const ContactPage = () => {
  // Contact information
  const contactInfo = {
    email: 'musabbir666@gmail.com',
    linkedin: 'https://www.linkedin.com/in/muhammad-musabbir/',
    phone: '+8801918166104',
  };

  // Function to copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied: ${text}`);
    });
  };

  return (
    <div
      id="contact"
      className="bg-stone-800 min-h-screen flex items-center justify-center text-white p-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto flex flex-col items-center space-y-8"
      >
        {/* Animated Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <Image
            src="https://media.giphy.com/media/3o7TKU8RvQuomFfUUU/giphy.gif"
            alt="Animated Contact GIF"
            className="w-74 h-74 rounded-full object-cover"
            width={400}
            height={400}
          />
        </motion.div>

        {/* Heading with Teal Accent */}
        <h1 className="text-5xl font-extrabold mb-4 text-center">
          <span className="text-white">Contact</span>{' '}
          <span className="text-teal-400">Me</span>
        </h1>

        <p className="text-lg leading-relaxed text-center mb-6 text-gray-300 max-w-xl">
          Feel free to reach out. I&apos;m always excited to connect and discuss
          new opportunities.
        </p>

        {/* Contact Information Section */}
        <div className="flex flex-col space-y-6 w-full max-w-md">
          {/* Email */}
          <div className="flex items-center space-x-4 bg-stone-800 p-3 rounded-lg">
            <EmailIcon className="text-red-400 text-3xl" />
            <div className="flex-grow">
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-semibold">{contactInfo.email}</p>
            </div>
            <button
              onClick={() => copyToClipboard(contactInfo.email)}
              className="text-teal-400 hover:text-teal-300 transition-colors"
            >
              <ContentCopyIcon />
            </button>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4 bg-stone-800 p-3 rounded-lg">
            <PhoneIcon className="text-green-400 text-3xl" />
            <div className="flex-grow">
              <p className="text-sm text-gray-400">Phone</p>
              <p className="font-semibold">{contactInfo.phone}</p>
            </div>
            <button
              onClick={() => copyToClipboard(contactInfo.phone)}
              className="text-teal-400 hover:text-teal-300 transition-colors"
            >
              <ContentCopyIcon />
            </button>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-4 bg-stone-800 p-3 rounded-lg">
            <LinkedInIcon className="text-blue-400 text-3xl" />
            <div className="flex-grow">
              <p className="text-sm text-gray-400">LinkedIn</p>
              <p className="font-semibold text-white">Muhammad Musabbir</p>
            </div>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 transition-colors"
            >
              Connect
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
