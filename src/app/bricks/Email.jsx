'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react';

const Email = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace with your EmailJS service ID, template ID, and public key
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('Email sent!', response.status, response.text);
          setIsSent(true);
          setFormData({ name: '', email: '', message: '' }); // Reset form
        },
        (error) => {
          console.error('Failed to send:', error);
          alert('Failed to send email. Please try again.');
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-800 to-[#121212] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-500 rounded-full mb-4 shadow-lg">
            <Mail className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-teal-400 mb-2">Email Me !!</h1>
          <p className="text-[#E0E0E0] text-sm">
            Send us a message and we&apos;ll get back to you
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#222222] rounded-xl p-6 shadow-2xl border border-stone-700">
          {/* Success Message */}
          {isSent && (
            <div className="mb-6 p-4 bg-teal-500/20 border border-teal-500/30 rounded-lg flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-teal-400" />
              <div>
                <p className="text-teal-400 font-medium text-sm">
                  Message sent successfully!
                </p>
                <p className="text-teal-300 text-xs">
                  We&apos;ll get back to you soon.
                </p>
              </div>
            </div>
          )}

          {/* Form */}
          <div className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-stone-800 border border-stone-600 rounded-lg text-[#E0E0E0] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-stone-800 border border-stone-600 rounded-lg text-[#E0E0E0] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  rows="4"
                  className="w-full pl-10 pr-4 py-3 bg-stone-800 border border-stone-600 rounded-lg text-[#E0E0E0] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSending}
              className="w-full bg-teal-500 hover:bg-teal-600 disabled:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all 
              duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg"
            >
              {isSending ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6"></div>
      </div>
    </div>
  );
};

export default Email;
