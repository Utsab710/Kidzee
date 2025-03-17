import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto bg-transparent p-8 rounded-lg">
      <div className=" flex items-end  justify-center lg:justify-end relative">
        <img src="https://kidzeeboudha.com/assets/site/img/value/cloud-1.png" />
      </div>
      <div className="text-red-600 text-center font-bold text-2xl">
        QUICK CONTACT
      </div>

      <div className="font-bold text-center text-black text-2xl mb-6">
        Contact us for answers to all of your questions.
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <input
              id="name"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              id="email"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Your email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <input
              id="phone"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              placeholder="Your phone number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value:
                    /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                  message: "Invalid phone number format",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              id="subject"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Subjects"
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <textarea
            id="message"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            placeholder="Type your message here..."
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <p className="text-red-500 text-xs italic mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
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
