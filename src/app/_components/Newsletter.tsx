import { TICKICON } from "../utils";

export default function Newsletter() {
  return (
    <div className="bg-[#1C4670] text-white flex flex-col items-center pt-10">
      <div className="text-2xl font-medium mb-6">1% OF THE INDUSTRY</div>
      <div className="font-semibold text-4xl mb-10">
        Welcome to your new digital reality. Now.
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="rounded-md text-black py-1 pl-2 h-[40px] w-[600px]"
        ></input>
        <button className="bg-[#FFA229] h-[40px] w-[100px] py-1 pl-2 absolute right-0">
          Submit
        </button>
      </div>
      <div className="flex mt-10 pb-10">
        <div className="pl-2">{TICKICON}</div>
        <div className="pl-2">Instant Results</div>
        <div className="pl-5">{TICKICON}</div>
        <div className="pl-2">User-friendly interface</div>
        <div className="pl-5">{TICKICON}</div>
        <div className="pl-2">Personalized customization</div>
      </div>
    </div>
  );
}
