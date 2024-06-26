import { Yellowtail } from "next/font/google";
import BackGround from "../../../public/assets/background.png";
import HeroImage from "../../../public/assets/hero.png";
import Arrow from "../../../public/assets/Arrow.png";
import Image from "next/image";
import { YELLOW_STAR, GROUP_STARS, SQUARE, PEOPLE,HANDSHAKE } from "../utils";

export const Hero = () => {
  return (
    <div className={`h-screen  flex justify-center   max-w-[1440px]`}>
      <div className="mt-[52px] ml-[70px] mr-0 w-6/12 flex flex-col ">
        <div className="flex items-center gap-x-2 ">
          <div>{YELLOW_STAR}</div>
          <div className="font-semibold">Google Rating</div>
          <div className="flex">
            {GROUP_STARS} {GROUP_STARS} {GROUP_STARS} {GROUP_STARS}{" "}
            {GROUP_STARS}
          </div>
        </div>
        <div className="text-[47px] p-0 mt-[24px]">
          Your trusted Partner for compliance and business needs
        </div>
        <div className="text-[20px] font-normal mt-[24px]">
          An online business compliance platform that helps entrepreneurs and
          other individuals with various, registrations, tax filings, and other
          legal matters.
        </div>
        <div className="flex justify-between mt-8">
          <div className="flex justify-around gap-x-1">
            <div className="">
              <div className="flex">
                {SQUARE}
                {SQUARE}
              </div>
              <div className="flex">
                {SQUARE}
                {SQUARE}
              </div>
            </div>
            <div>
              <div className="gradient-text text-[22px] font-extrabold">
                4.5+
              </div>
              <div>Custome Rating</div>
            </div>
          </div>
          <div className="flex justify-around gap-x-1">
            <div className="">
              <div className="flex">{PEOPLE}</div>
            </div>
            <div>
              <div className="gradient-text text-[22px] font-extrabold">
                20000+
              </div>
              <div>Clients</div>
            </div>
          </div>

          <div className="flex justify-around gap-x-1">
            <div className="">
              <div className="flex">{HANDSHAKE}</div>
            </div>
            <div>
              <div className="gradient-text text-[22px] font-extrabold">
                99.8%
              </div>
              <div>Financial Stability</div>
            </div>
          </div>
        </div>
        <div className="mt-8">
            <div className="bg-[#1C4670] w-[204px] font-bold flex items-center justify-center py-4 text-white rounded">Talk An Expert</div>
        </div>
      </div>
      <div className="mt-[100px] relative w-5/12">
      <Image src={HeroImage} alt="" height={484} width={600} className="h-[484px] w-[600px] " ></Image>
      <Image src={Arrow} alt="" height={484} width={600} className="h-[171px] w-[229px] absolute right-24 bottom-48" ></Image>
      <div className="absolute right-0 top-6 flex flex-col justify-between gap-y-4 z-2">
        <div className="py-4 rounded">Annual Compliance</div>
        <div className="py-4 rounded">Payroll Services</div>
        <div className="py-4 rounded">Company Formation</div>
        <div className="py-4 rounded "> Annual Compliance</div>
      </div>
      </div>
    </div>
  );
};
