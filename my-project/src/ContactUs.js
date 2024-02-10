// ContactUs.js

import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (e) => {
    const label = e.target.parentNode.querySelector('label');
    label.classList.add('hidden');
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      const label = e.target.parentNode.querySelector('label');
      label.classList.remove('hidden');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-dark text-white ">
      <div className="w-full max-w-md p-4 bg-content-bg rounded-xl">
        <h2 className="text-4xl font-semibold mb-4 text-center">Get In Touch With Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative ">
            <label
              htmlFor="fullName"
              className={`absolute m-3 text-sm font-medium ${
                formData.fullName ? 'hidden' : ''
              } transition-opacity opacity-50`}
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="mt-1 p-2 bg-content-bg border-2 w-full rounded-md border-header-green text-white font-bold"
              required
            />
          </div>
          <div className="mb-5 relative">
            <label
              htmlFor="email"
              className={`absolute m-3 text-sm font-medium ${
                formData.email ? 'hidden' : ''
              } transition-opacity opacity-50`}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="mt-1 p-2 bg-content-bg border-2 w-full rounded-md border-header-green text-white font-bold"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="message"
              className={`absolute m-3 text-sm font-medium ${
                formData.message ? 'hidden' : ''
              } transition-opacity opacity-50`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              rows="4"
              className="mt-1 p-2 bg-content-bg border-2 w-full rounded-md border-header-green text-white font-bold"
              required
            ></textarea>
          </div>
          <div className="mb-4 text-right">
            <button
              type="submit"
              className="bg-content-bg border-2 border-header-green text-header-green p-2 rounded-md hover:bg-content-bg w-1/4 "
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
