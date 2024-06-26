import { GREENAPPLE, GREENPLAYSTORE } from "../utils";
import PhoneImage from "../../../public/assets/Phone.png";
import Image from "next/image";

export const Mobile = () => {
  return (
    <div className="relative">
    <div className="h-[491px] w-full bg-[#1C4670] mt-[44px] text-white flex items-center ">
      <div className="pl-[72px] w-5/12">
        <div className="font-extrabold text-[32px]">
          Manage Your Services by your Mobile Phone
        </div>
        <div className="mt-6">
          Download our app to manage and track your services. Our app enables
          you to stay in touch with our experts and aids you in tracking your
          progress.{" "}
        </div>
        <div className=" mt-[52px]">
          <div>Get the App</div>
          <div className="flex gap-x-4 mt-3">
            <div className="flex bg-white h-[58px]  text-black px-[18px] items-center gap-x-2 py-8 rounded" style={{border: "1px solid #A5C937"}}>
              <div className="">{GREENAPPLE}</div>
              <div>
                <div>Get it on</div>
                <div>App Store</div>
              </div>
            </div>
            <div className="flex bg-white h-[58px]  text-black px-[18px] items-center gap-x-2 py-8 rounded" style={{border: "1px solid #A5C937"}}>
              <div className="">{GREENPLAYSTORE}</div>
              <div>
                <div>Get it on</div>
                <div>Play Store</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-1 ">
        <Image src={PhoneImage} alt="" className="absolute top-10 z-10"></Image>
        <Image src={PhoneImage} alt="" className="absolute -right-20 -top-32 z-10"></Image>
      </div>
    </div>
    <div className="absolute z-20 bg-[white] w-full">
      <div className="flex flex-col items-center mb-20">
        <div className="text-[#EB8D15] mt-10">WHY REGISTER KARO</div>
        <div className="font-bold text-4xl mt-2">
          Some Numbers are important
        </div>
      </div>
      <div className="flex justify-around mb-20 text-center">
        <div>
          <div className="gradient-text font-black text-4xl">1M</div>
          <div className="text-xl font-bold">CUSTOMERS</div>
        </div>
        <div>
          <div className="gradient-text font-black text-4xl">12</div>
          <div className="text-xl font-bold">YEARS OF EXCELLENCE</div>
        </div>
        <div>
          <div className="gradient-text font-black text-4xl">41</div>
          <div className="text-xl font-bold">R&D ENGINEERS</div>
        </div>
        <div>
          <div className="gradient-text font-black text-4xl">78</div>
          <div className="text-xl font-bold">COUNTRIES</div>
        </div>
        <div>
          <div className="gradient-text font-black text-4xl">3287</div>
          <div className="text-xl font-bold">PARTNERS</div>
        </div>
        <div>
          <div className="gradient-text font-black text-4xl">41</div>
          <div className="text-xl font-bold">AWARDS RECEIVED</div>
        </div>
      </div>
    </div>
    </div>
  );
};
