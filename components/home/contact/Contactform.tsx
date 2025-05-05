import React from "react";

const Contactform = () => {
  return (
    <div className="bg-[#040c1c] rounded-lg p-4 sm:p-10">
      <h1 className="text-Bg text-2xl md:text-3xl lg:text-[2.5rem] font-semibold text-center mb-4">
        Let's work together
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        I am always open to discussing new projects, creative ideas, or
        opportunities to be part of your visions.
      </p>
      {/* Input Fields */}
      <form className="mt-8 block w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label htmlFor="firstName" className="sr-only">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First name"
            className="bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <label htmlFor="lastName" className="sr-only">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Last name"
            className="bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            className="bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <label htmlFor="contactNumber" className="sr-only">
            Contact Number
          </label>
          <input
            id="contactNumber"
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            className="bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="service" className="sr-only">
            Select an Option
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="w-full bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="frontend development">Frontend Development</option>
            <option value="backend development">Backend Development</option>
            <option value="fullstack development">Fullstack Development</option>
          </select>
        </div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={7}
          placeholder="Message"
          className="w-full bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
        ></textarea>
        <div className="mt-4">
          <button
            type="submit"
            className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fd7] transition-all duration-150 rounded-full"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contactform;
