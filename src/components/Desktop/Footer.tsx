import React from "react";
import * as configs from "../../config";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-amber-200 text-center h-auto w-full">
        <div className="py-16">
          <div>
            <h1 className="text-3xl font-bold">Game Code Hub</h1>
            <p className="text-md font-serif">Selling Projects From 2018</p>
          </div>
          <div className="mt-2">
            <p className="text-gray-500 text-xs ">
              &copy; {new Date().getFullYear()} Game Code Hub. All rights
              reserved.
            </p>
          </div>
          <div className="mt-8 flex justify-center items-center text-5xl gap-4">
            <a href={configs.WHATSAPP_URL}>
              <FaWhatsapp />
            </a>
            <a href={configs.TELEGRAM_URL}>
              <FaTelegram />
            </a>
            <a href={configs.INSTAGRAM_URL}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
