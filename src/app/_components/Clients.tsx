import { LOGO1,ARROW } from "../utils";
import ClientImage from "../../../public/assets/Clients.png";
import Image from "next/image";
export const Clients = () => {
  return (
    <div className="text-center mt-20 flex flex-col items-center">
      <div className="text-[32px] font-bold">Our Happy Clients</div>
      <div className="w-[800px] mt-6">
        Professionally cultivate one-to-one customer service with robust ideas.
        Dynamically innovate resource-leveling customer service for state of the
        art customer service.
      </div>
      <div className=" mt-[64px] w-full flex justify-center relative h-[353px]">
        <Image src={ClientImage} alt=""></Image>
      </div>
      <div className="flex">Show More {ARROW}</div>
    </div>
  );
};
