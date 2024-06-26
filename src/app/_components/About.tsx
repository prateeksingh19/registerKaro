import AboutImage from "../../../public/assets/about.png";
import Image from "next/image";
import { ARROW } from "../utils";
import { SHIELD,SMILE,TICK,CS } from "../utils";

const ABC = (
  <svg
    width="52"
    height="531"
    viewBox="0 0 52 531"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.4328 350.766C-51.8067 170.886 49.7945 41.972 111 0L89.068 750C89.068 750 41.1284 706.029 31.4328 643.571C21.7372 581.113 114.672 530.646 31.4328 350.766Z"
      fill="#FFA229"
    />
  </svg>
);

export const About = () => {
  return (
    <div className=" ">
      <div className="flex mt-10 ml-[74px] justify-between">
        <div className="">
          <p className="text-[#EB8D15] mt-5 font-normal text-[14px]">
            WELCOME TO REGISTERKARO.IN
          </p>
          <div className="flex mt-3 text-[32px] font-bold">
            <p className="">About </p>
            <p className="text-[#EB8D15] pl-1">Register Karo</p>
          </div>
          <div className="">
            <p className="w-[644px] mt-5">
              We have been using Intelegencia as our DevOps vendor for our field
              service applications over the last couple of years and I’m
              extremely pleased with their performance, ability to execute, and
              willingness to adapt in our ever changing environment. Perry is an
              outstanding leader who is fanatical about customer satisfaction.
              He has built a solid team which has consistently delivered on
              projects thereby exceeding everyone’s expectations.
            </p>
            <p className="mt-2 w-[644px]">
              I would strongly recommend their services to any organization that
              is looking for solid, reliable, and predictable outcomes.
            </p>
          </div>
          <div className="flex justify-between mt-10 w-32 text-sm cursor-pointer text-white bg-[#1C4670] items-center p-2 rounded shadow-custom">
            Learn More
            {ARROW}
          </div>
        </div>
        <div className="flex relative">
          <Image
            src={AboutImage}
            height={418}
            width={579}
            alt=""
            className="pr-5 z-10 h-[418px] w-[579px]"
          />
          {ABC}
          {/* <img
              src={}
              alt=""
              className="absolute w-[130px] h-[123.11px] bottom-10 right-0 z-0"
            /> */}
        </div>
      </div>
      <div className="ml-[74px] flex flex-col gap-y-10 ">
        <div className="flex  justify-between pr-16">
          <div className="w-[644px] ">
            <div className="text-[#EB8D15] font-normal text-[14px]">
              WHY REGISTERKARO.IN
            </div>
            <div className="font-bold text-[32px] mt-4">
              Why Choose Register Karo
            </div>
            <div className="mt-8">
              It is with consistent services and results that build trust with
              the people and that in turn help us to serve the business better.
            </div>
          </div>
          <div className="self-end flex gap-x-10">
            <div className="w-[288px] h-[215px] bg-[#FEF3EF] rounded-xl flex flex-col items-center justify-center gap-y-2">
                <div>{SHIELD}</div>
                <div className="font-medium text-[20px]">Confidential & Safe</div>
                <div className="text-center">All your private information is safe
                with us</div>
            </div>
            <div className="w-[288px] h-[215px] bg-[#F1FBF3] rounded-xl flex flex-col items-center justify-center gap-y-2">
            <div>{TICK}</div>
                <div className="font-medium text-[20px]">No Hidden Fee</div>
                <div className="text-center">Everything is put before you with
                no hidden charges or conditions</div>
            </div>
          </div>
        </div>
        <div className="flex self-end gap-x-10 pr-16">
          <div className="w-[288px] h-[215px] bg-[#EDF3FF] rounded-xl flex flex-col items-center justify-center gap-y-2">
          <div>{SMILE}</div>
                <div className="font-medium text-[20px]">No Hidden Fee</div>
                <div className="text-center">Everything is put before you with
                no hidden charges or conditions</div>
          </div>
          <div className="w-[288px] h-[215px] bg-[#FBF1FB] rounded-xl flex flex-col items-center justify-center gap-y-2">
          <div>{CS}</div>
                <div className="font-medium text-[20px]">No Hidden Fee</div>
                <div className="text-center">Everything is put before you with
                no hidden charges or conditions</div>
          </div>
          <div className="w-[288px] h-[215px] bg-[#27AE600A] rounded-xl flex flex-col items-center justify-center gap-y-2">
          <div>{SHIELD}</div>
                <div className="font-medium text-[20px]">No Hidden Fee</div>
                <div className="text-center">Everything is put before you with
                no hidden charges or conditions</div>
          </div>
        </div>
      </div>
    </div>
  );
};
