import React from "react";
import "./Blob.css"; // Import the CSS file

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-white relative overflow-hidden py-16 md:py-24">
      {/* Background blob circles */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-28 w-72 h-72 bg-pink-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-700 mb-4">
              About Us
            </h2>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              A New Learning Way For <br />
              your child
            </h3>

            <div className="space-y-6 text-gray-500">
              <p>
                Kidzee Boudha envision today’s children as tomorrow’s leadership
                icons. Our learning environment enables each child to realize
                their unique learning style, while our MI-aided methodology
                helps them discover their own creative and aesthetic potential.
              </p>

              <p>
                We are committed to impacting a synergy of skills, knowledge,
                and values in our children to lend them their inner voice for
                the 21st century.
              </p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="w-full lg:w-1/2 relative h-96 md:h-[550px]">
            <div className="relative h-full flex items-center justify-center gap-4">
              {/* Left Image */}
              <div className="h-4/5 w-1/3 rounded-2xl overflow-hidden shadow-xl flex justify-end">
                <img
                  src="https://t3.ftcdn.net/jpg/01/54/98/54/360_F_154985416_FVVEfSmYrrcqQ8KvAoZP2o30Ke7j24d7.jpg"
                  alt="Children playing with blocks"
                  className="w-full h-full object-cover object-left-top"
                />
              </div>

              {/* Middle Image - Taller */}
              <div className="h-full w-1/3 rounded-2xl overflow-hidden shadow-xl mt-12">
                <img
                  src="https://t3.ftcdn.net/jpg/01/54/98/54/360_F_154985416_FVVEfSmYrrcqQ8KvAoZP2o30Ke7j24d7.jpg"
                  alt="Teacher with child"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Image */}
              <div className="h-4/5 w-1/3 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://t3.ftcdn.net/jpg/01/54/98/54/360_F_154985416_FVVEfSmYrrcqQ8KvAoZP2o30Ke7j24d7.jpg"
                  alt="Children at table with blocks"
                  className="w-full h-full object-cover object-right-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
