import { ICON1 } from "@/app/utils";

export const Services = () => {
  return (
    <div className="h-screen flex justify-center  px-[70px]">
      <div className="flex flex-col items-center mt-10">
        <div className="text-[#EB8D15] font-normal">
          Welcome to REGISTERKARO.IN
        </div>
        <div className="text-[32px] font-bold mt-3">Explore our Services</div>
        <div className="grid grid-cols-3 mt-10 gap-x-32 gap-y-4 px-10 ">
          <div className="flex flex-col items-center text-center gap-y-4 w-[300px] relative ">
            <div>{ICON1}</div>
            <div className="text-[20px] font-extrabold ">Company Formation</div>
            <div className="w-[263px] font-light ">
              Build web-based solutions that enhance customer experience.
            </div>
            <div className="font-semibold absolute right-50 bottom-0">Learn More</div>
          </div>
          <div className="flex flex-col items-center text-center gap-y-4 w-[300px] h-[230px] relative ">
            <div>{ICON1}</div>
            <div className="text-[20px] font-extrabold ">
              {" "}
              Company Secretarial Services
            </div>
            <div className="w-[263px] font-light">
              Make data-driven decisions and utilize technology to reach
              business goals.
            </div>
            <div className="font-semibold absolute right-50 bottom-0">Learn More</div>
          </div>
          <div className="flex flex-col items-center text-center gap-y-4 w-[300px] relative ">
            <div>{ICON1}</div>
            <div className="text-[20px] font-extrabold ">
              Virtual Office Address
            </div>
            <div className="w-[263px] font-light">
              Foster customer relationships by effectively serving your market.
            </div>
            <div className="font-semibold absolute right-50 bottom-0">Learn More</div>
          </div>
          <div className="flex flex-col items-center text-center gap-y-4 w-[300px] relative ">
            <div>{ICON1}</div>
            <div className="text-[20px] font-extrabold">
              Annual Compliance Services
            </div>
            <div className="w-[263px] font-light">
              Turn your ideas into modern products with our design experts.
            </div>
            <div className="font-semibold absolute right-50 bottom-0">Learn More</div>
          </div>
          <div className="flex flex-col items-center text-center gap-y-4 w-[300px]  relative">
            <div>{ICON1}</div>
            <div className="text-[20px] font-extrabold">Payroll Services</div>
            <div className="w-[263px] font-light">
              Expand your business across the globe with minimal effort.
            </div>
            <div className="font-semibold absolute right-50 bottom-0">Learn More</div>
          </div>
          <div className="flex flex-col items-center text-center gap-y-4 w-[300px]  h-[230px] relative">
            <div>{ICON1}</div>
            <div className="text-[20px] font-extrabold">
              Bookkeeping Services
            </div>
            <div className="w-[263px] font-light">
              Steering user behaviours with creative design, data insights &
              technology.
            </div>
            <div className="font-semibold absolute right-50 bottom-0">Learn More</div>
          </div>
        </div>
        <div className="mt-10 bg-[#1C4670] font-medium text-[16px] rounded px-4 text-white py-4" >See All Services</div>
      </div>
    </div>
  );
};
