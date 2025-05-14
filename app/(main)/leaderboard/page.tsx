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

      {/* Animated Icons */}
      <div className="flex justify-center mt-12 animate__animated animate__bounceIn animate__delay-4s">
        <div className="flex space-x-12">
          {/* Icons in a horizontal row */}
          <div className="flex flex-col items-center animate__animated animate__fadeIn animate__delay-5s">
            <PiStudent className="text-blue-600 text-4xl" />
            <p className="mt-2 text-lg text-gray-700">Student</p>
          </div>
          <div className="flex flex-col items-center animate__animated animate__fadeIn animate__delay-6s">
            <MdOutlineLeaderboard className="text-green-600 text-4xl" />
            <p className="mt-2 text-lg text-gray-700">Leaderboard</p>
          </div>
          <div className="flex flex-col items-center animate__animated animate__fadeIn animate__delay-7s">
            <BiShoppingBag className="text-yellow-600 text-4xl" />
            <p className="mt-2 text-lg text-gray-700">Shop</p>
          </div>
        </div>
      </div>

      {/* Team Member Section */}
      <div className="bg-gray-100 p-6 rounded-lg mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
        <div className="flex justify-center gap-12">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center animate__animated animate__fadeIn animate__delay-8s">
            <p className="text-lg text-gray-700">Harsh</p>
            <p className="text-sm text-gray-500">ID-1094</p>
          </div>
          {/* Team Member 2 */}
          <div className="flex flex-col items-center animate__animated animate__fadeIn animate__delay-9s">
            <p className="text-lg text-gray-700">Ranit</p>
            <p className="text-sm text-gray-500">ID-1112</p>
          </div>
          {/* Team Member 3 */}
          <div className="flex flex-col items-center animate__animated animate__fadeIn animate__delay-10s">
            <p className="text-lg text-gray-700">Khyruddin</p>
            <p className="text-sm text-gray-500">ID-1090</p>
          </div>
          {/* Team Member 4 */}
          <div className="flex flex-col items-center animate__animated animate__fadeIn animate__delay-11s">
            <p className="text-lg text-gray-700">Amish</p>
            <p className="text-sm text-gray-500">ID-1095</p>
          </div>
          {/* Team Member 5 */}
          <div className="flex flex-col items-center animate__animated animate__fadeIn animate__delay-12s">
            <p className="text-lg text-gray-700">Prasenjit</p>
            <p className="text-sm text-gray-500">ID-1136</p>
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
