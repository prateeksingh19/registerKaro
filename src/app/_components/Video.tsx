import { BULB, STOCKS } from "../utils";

export const Video = () => {
  return (
    <div className=" ">
      <div className="w-full mt-20 h-[531px] bg-[#1C4670] px-[70px] justify-between flex items-center">
        <div className="w-1/2 flex flex-col gap-y-4 text-white">
          <div className="text-[34px] font-bold ">Our Video Introduction</div>
          <div className="text-[#AAB5CD]">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </div>
          <div className="flex gap-x-4">
            <div className=" flex items-center justify-center bg-[#FFA229] rounded-full  h-12 w-12">
              {BULB}
            </div>
            <div>
              <div className="font-bold text-[22px]">
                Explore Ideas Together
              </div>
              <div className="font-normal text-[#AAB5CD]">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </div>
            </div>
          </div>
          <div className="flex gap-x-4">
            <div className=" flex items-center justify-center bg-[#FFA229] rounded-full  h-12 w-12">
              {BULB}
            </div>
            <div>
              <div className="font-bold text-[22px]">
                Explore Ideas Together
              </div>
              <div className="font-normal text-[#AAB5CD]">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
