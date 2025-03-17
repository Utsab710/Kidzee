import React from "react";

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-md mx-auto bg-transparent p-4 rounded-lg p-15">
      <div className="text-red-600 text-center font-bold text-xl">
        QUICK CONTACT
      </div>

      <div className="font-bold text-center text-black text-2xl mb-6">
        Contact us for answers to all of your questions.
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Increased gap-4 to gap-6, mb-4 to mb-6 */}
          <div>
            <input
              id="name"
              className="bg-white border border-gray-200 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <input
              id="email"
              className="bg-white border border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Your email address"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {" "}
          {/* Increased gap-4 to gap-6, mb-4 to mb-6 */}
          <div>
            <input
              id="phone"
              className="bg-white border border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              placeholder="Your phone number"
              required
            />
          </div>
          <div>
            <input
              id="subject"
              className="bg-white border border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Subjects"
              required
            />
          </div>
        </div>

        <div className="mb-8">
          {" "}
          {/* Increased mb-6 to mb-8 */}
          <textarea
            id="message"
            className="bg-white border border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            placeholder="Type your message here..."
            required
          ></textarea>
        </div>

        <div className="flex items-start justify-center">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
