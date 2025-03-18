import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function TopBar() {
  return (
    <div className="bg-purple-700 w-full text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-6 ml-25">
          <div className="flex items-center cursor-pointer">
            <MdOutlineEmail className="mr-2" size={20} />
            <p>899 Tusal Marg, Boudha 06, Kathmandu</p>
          </div>
          <div className="flex items-center cursor-pointer">
            <MdOutlineLocalPhone className="mr-2" size={20} />
            <p>+977 9801313366</p>
          </div>
          <div className="flex items-center cursor-pointer">
            <IoLocationOutline className="mr-2" size={20} />
            <p>899 Tusal Marg, Boudha 06, Kathmandu</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 ">
          <a
            href="https://www.facebook.com/Kidzeeboudha"
            target="_blank"
            className="hover:animate-bounce"
          >
            <FaFacebook size={24} className="cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/kidzee_boudha/"
            target="_blank"
            className="hover:animate-bounce"
          >
            <FaInstagram size={24} className="cursor-pointer" />
          </a>
          <a className="hover:animate-bounce">
            <FaXTwitter size={24} className="cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
