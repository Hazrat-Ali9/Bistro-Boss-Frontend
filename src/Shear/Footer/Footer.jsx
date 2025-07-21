import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Logo Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-yellow-500">BISTRO BOSS</h2>
          <p className="mt-2">RESTAURANT</p>
          <p className="mt-4 text-gray-400">
            Serving delicious food and memorable experiences since 2005.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="/menu" className="hover:text-yellow-500">
                Menu
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-500">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Bistro Boss Restaurant. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
