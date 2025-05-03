import React from "react";
import { PiStudent } from "react-icons/pi";
import { MdOutlineLeaderboard } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6 animate__animated animate__fadeIn animate__delay-1s">
        About Us
      </h1>
      <p className="text-lg text-gray-700 mb-4 animate__animated animate__fadeIn animate__delay-2s">
        Welcome to our Learning Management System! We are committed to providing
        a platform where you can access quality courses and enhance your skills.
      </p>
      <div className="bg-gray-100 p-6 rounded-lg mt-8 animate__animated animate__zoomIn animate__delay-3s">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our vision is to transform how people access and engage with
          educational content. We strive to create an environment that fosters
          learning, collaboration, and innovation.
        </p>
      </div>

      {/* Animated Icons Moving in a Circle */}
      <div className="flex justify-center mt-12 animate__animated animate__bounceIn animate__delay-4s">
        <div className="relative w-48 h-48">
          {/* Circular Movement Container */}
          <div className="absolute top-0 left-0 w-full h-full animate__animated animate__rotateIn animate__infinite animate__slow">
            {/* Icons orbiting around the circle */}
            <div className="absolute w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate__animated animate__pulse animate__delay-1s animate__infinite orbit-icon top-0 left-50%">
              <PiStudent className="text-white text-2xl" />
            </div>
            <div className="absolute w-12 h-12 bg-green-400 rounded-full flex items-center justify-center animate__animated animate__pulse animate__delay-2s animate__infinite orbit-icon top-50% left-100%">
              <MdOutlineLeaderboard className="text-white text-2xl" />
            </div>
            <div className="absolute w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center animate__animated animate__pulse animate__delay-3s animate__infinite orbit-icon top-100% left-50%">
              <BiShoppingBag className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Team Member Section with Floating Cards and Colorful Transitions */}
      <div className="bg-gray-100 p-6 rounded-lg mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
        <div className="flex justify-center gap-8">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center animate__animated animate__fadeIn animate__delay-5s animate__infinite animate__bounce">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">Harsh</span>
            </div>
            <p className="mt-2 text-lg text-gray-700">ID-1094</p>
          </div>
          {/* Team Member 2 */}
          <div className="flex flex-col items-center animate__animated animate__fadeIn animate__delay-6s animate__infinite animate__bounce">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">Rasnit</span>
            </div>
            <p className="mt-2 text-lg text-gray-700">ID-1112</p>
          </div>
          {/* Team Member 3 */}
          <div className="flex flex-col items-center animate__animated animate__fadeIn animate__delay-7s animate__infinite animate__bounce">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">Khyruddin</span>
            </div>
            <p className="mt-2 text-lg text-gray-700">ID-1090</p>
          </div>
          {/* Team Member 4 */}
          <div className="flex flex-col items-center animate__animated animate__fadeIn animate__delay-8s animate__infinite animate__bounce">
            <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">Amish</span>
            </div>
            <p className="mt-2 text-lg text-gray-700">ID-1095</p>
          </div>
          {/* Team Member 5 */}
          <div className="flex flex-col items-center animate__animated animate__fadeIn animate__delay-9s animate__infinite animate__bounce">
            <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">Prasenjit</span>
            </div>
            <p className="mt-2 text-lg text-gray-700">ID-1132</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 p-6 rounded-lg mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700">
          If you have any questions, feel free to reach out to us at{" "}
          <a href="mailto:contact@lms.com" className="text-blue-600">
           harshwantstobesde@gmail.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
