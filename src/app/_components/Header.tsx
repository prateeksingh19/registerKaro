import React from "react";
import { INSTA, FB, TWITTER, PINTEREST, SEARCH } from "../utils";
import Logo from "../../../public/assets/logo_.png";

import Image from "next/image";
const messageIcon = (
  <svg
    width="15"
    height="12"
    viewBox="0 0 15 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.707 3.80078C14.8242 3.71289 15 3.80078 15 3.94727V9.92383C15 10.7148 14.3555 11.3301 13.5938 11.3301H1.40625C0.615234 11.3301 0 10.7148 0 9.92383V3.94727C0 3.80078 0.146484 3.71289 0.263672 3.80078C0.9375 4.32812 1.78711 4.97266 4.77539 7.14062C5.39062 7.58008 6.44531 8.54688 7.5 8.54688C8.52539 8.54688 9.60938 7.58008 10.1953 7.14062C13.1836 4.97266 14.0332 4.32812 14.707 3.80078ZM7.5 7.58008C6.79688 7.60938 5.83008 6.73047 5.33203 6.37891C1.43555 3.56641 1.14258 3.30273 0.263672 2.59961C0.0878906 2.48242 0 2.27734 0 2.04297V1.48633C0 0.724609 0.615234 0.0800781 1.40625 0.0800781H13.5938C14.3555 0.0800781 15 0.724609 15 1.48633V2.04297C15 2.27734 14.8828 2.48242 14.707 2.59961C13.8281 3.30273 13.5352 3.56641 9.63867 6.37891C9.14062 6.73047 8.17383 7.60938 7.5 7.58008Z"
      fill="#E6ECFD"
    />
  </svg>
);

const phoneIcon = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.4803 0.763672C14.7811 0.845703 14.9999 1.0918 14.9999 1.39258C14.9999 8.41992 9.31238 14.0801 2.31238 14.0801C1.98425 14.0801 1.73816 13.8887 1.65613 13.5879L0.999878 10.7441C0.94519 10.4434 1.08191 10.1152 1.38269 9.97852L4.44519 8.66602C4.71863 8.55664 5.01941 8.63867 5.21082 8.85742L6.578 10.5254C8.71082 9.51367 10.4335 7.76367 11.4178 5.68555L9.74988 4.31836C9.53113 4.12695 9.4491 3.82617 9.55847 3.55273L10.871 0.490234C11.0077 0.189453 11.3358 0.0253906 11.6366 0.107422L14.4803 0.763672Z"
      fill="#E6ECFD"
    />
  </svg>
);

export const Header = () => {
  return (
    <>
      <div className="w-full h-[44px] bg-[#1C4670] flex items-center justify-end gap-x-10 px-[70px] text-white text-[14px] font-normal">
        {" "}
        <div className="flex items-center gap-x-2">
          <div>{messageIcon}</div>
          <div>www.registerkaro.in</div>
        </div>
        <div className="flex items-center gap-x-2">
          {" "}
          <div>{phoneIcon}</div> <div>+918447746183</div>{" "}
        </div>
        <div className="flex gap-x-4">
          <div>{INSTA}</div>
          <div>{FB}</div>
          <div>{TWITTER}</div>
          <div>{PINTEREST}</div>
        </div>
      </div>
      <div className="w-full py-5 px-20 flex justify-between">
        <div>
          <Image src={Logo} alt="" height={37} width={200}></Image>
        </div>
        <div className="flex w-1/2 items-center justify-between text-[16px] font-semibold">
          <div>Home</div>
          <div>Our Services</div>
          <div>Blog</div>
          <div>Contact Us</div>
          <div>About us</div>
          <div>{SEARCH}</div>
          <div className="w-[156px] h-[46px] bg-[#FFA229] text-center text-white p-3 rounded">
            {" "}
            Talk an Expert
          </div>
        </div>
      </div>
    </>
  );
};
