import Button from "../ui/Button";

import * as configs from "../../config";
import { FaEnvelope, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Ads = () => {
  return (
    <>
      <div className=" h-96 mt-11 bg-[url(https://i.pinimg.com/736x/36/3a/05/363a05ba5c7700b20b29898fd7c5a0f1.jpg)] bg-center bg-no-repeat bg-cover bg-origin-content">
        <div className="flex flex-col justify-center items-center p-6 pt-24">
          <h1 className="text-3xl font-extrabold pb-2">
            Want any help for Customization Games
          </h1>
          <p className="text-xl">
            Feel free to send us mssage on our socials channel Whatsapp
          </p>
        </div>
        <div className="text-center flex items-center justify-center gap-4 mt-14">
          <a href={configs.WHATSAPP_URL}>
            <Button title="WhatsApp" icon={FaWhatsapp} />
          </a>
          <a href={configs.TELEGRAM_URL}>
            <Button title="Telegram" icon={FaTelegram} />
          </a>
          <a href={configs.EMAIL_URL}>
            <Button title="Email" icon={FaEnvelope} />
          </a>
        </div>
        <br />
      </div>
    </>
  );
};

export default Ads;
