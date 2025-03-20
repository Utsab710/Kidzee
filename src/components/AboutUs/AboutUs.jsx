import React from "react";
import "./Blob.css"; // Import the CSS file
import ImageSlider from "./ImageSlider"; // Import the ImageSlider component

const AboutUs = () => {
  // Array of image sets that will be used in the slider
  const imageSlides = [
    {
      left: "https://t3.ftcdn.net/jpg/01/54/98/54/360_F_154985416_FVVEfSmYrrcqQ8KvAoZP2o30Ke7j24d7.jpg",
      middle:
        "https://t3.ftcdn.net/jpg/01/54/98/54/360_F_154985416_FVVEfSmYrrcqQ8KvAoZP2o30Ke7j24d7.jpg",
      right:
        "https://t3.ftcdn.net/jpg/01/54/98/54/360_F_154985416_FVVEfSmYrrcqQ8KvAoZP2o30Ke7j24d7.jpg",
    },
    {
      left: "https://img.freepik.com/free-vector/four-happy-kids-with-backpacks-jumping-smiling_9975-108473.jpg",
      middle:
        "https://img.freepik.com/free-vector/four-happy-kids-with-backpacks-jumping-smiling_9975-108473.jpg",
      right:
        "https://img.freepik.com/free-vector/four-happy-kids-with-backpacks-jumping-smiling_9975-108473.jpg",
    },
    {
      left: "https://media.istockphoto.com/id/1468140092/photo/happy-elementary-students-raising-their-hands-on-a-class-at-school.jpg?s=612x612&w=0&k=20&c=BrkqxwR_nW4WzbDCAmpQEyF-QYvML9EktH4hhCj-76U=",
      middle:
        "https://media.istockphoto.com/id/1468140092/photo/happy-elementary-students-raising-their-hands-on-a-class-at-school.jpg?s=612x612&w=0&k=20&c=BrkqxwR_nW4WzbDCAmpQEyF-QYvML9EktH4hhCj-76U=",
      right:
        "https://media.istockphoto.com/id/1468140092/photo/happy-elementary-students-raising-their-hands-on-a-class-at-school.jpg?s=612x612&w=0&k=20&c=BrkqxwR_nW4WzbDCAmpQEyF-QYvML9EktH4hhCj-76U=",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-indigo-50 to-white relative overflow-hidden py-16 md:py-24">
      {/* Background blob circles */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-red-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-28 w-72 h-72 bg-green-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

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
                Kidzee Boudha envision today's children as tomorrow's leadership
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

          {/* Image Slider replaces the static images */}
          <ImageSlider images={imageSlides} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
