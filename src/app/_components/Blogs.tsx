import BlogsImage from "../../../public/assets/Blogs.png";
import { ARROW } from "../utils";
import Image from "next/image";

export const Blogs = ()=>{
    return (
        <div className="flex flex-col justify-center items-center  mt-9">
            <div className="font-normal text-[#EB8D15]">EXPLORE OUR BLOGS</div>
            <div className="font-bold text-[32px] text-[#3C2109] mt-3">Accelerate Digital Transformation</div>
            <div className="px-[112px] mt-[56px] grid grid-cols-3 gap-y-8 gap-x-8">
                <div className=""> 
                    <Image src={BlogsImage} alt="" width={384} height = {240} className=" w-[384px] h-[240px]" ></Image>
                    <div className="text-[#667085] mt-9 text-[14px]">Prabhash Mishra • 1 Jan 2023 • Today</div>
                    <div className="font-bold text-[22px]">Small business & Startup </div>
                    <div className="text-[15px] text-[#667085] font-normal mt-3">Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</div>
                    <div className="flex gap-x-4 text-[14px] mt-6">
                        <div className="bg-[#F9F5FF] text-[#6941C6]">
                            Tax & Audit
                        </div>
                        <div className="bg-[#F8F9FC] text-[#363F72]">
                            Managment
                        </div>
                    </div>
                </div>
                <div className=""> 
                    <Image src={BlogsImage} alt="" width={384} height = {240} className=" w-[384px] h-[240px]" ></Image>
                    <div className="text-[#667085] mt-9 text-[14px]">Prabhash Mishra • 1 Jan 2023 • Today</div>
                    <div className="font-bold text-[22px]">Small business & Startup </div>
                    <div className="text-[15px] text-[#667085] font-normal mt-3">Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</div>
                    <div className="flex gap-x-4 text-[14px] mt-6">
                        <div className="bg-[#F9F5FF] text-[#6941C6]">
                            Tax & Audit
                        </div>
                        <div className="bg-[#F8F9FC] text-[#363F72]">
                            Managment
                        </div>
                    </div>
                </div>
                <div className=""> 
                    <Image src={BlogsImage} alt="" width={384} height = {240} className=" w-[384px] h-[240px]" ></Image>
                    <div className="text-[#667085] mt-9 text-[14px]">Prabhash Mishra • 1 Jan 2023 • Today</div>
                    <div className="font-bold text-[22px]">Small business & Startup </div>
                    <div className="text-[15px] text-[#667085] font-normal mt-3">Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</div>
                    <div className="flex gap-x-4 text-[14px] mt-6">
                        <div className="bg-[#F9F5FF] text-[#6941C6]">
                            Tax & Audit
                        </div>
                        <div className="bg-[#F8F9FC] text-[#363F72]">
                            Managment
                        </div>
                    </div>
                </div>
                <div className=""> 
                    <Image src={BlogsImage} alt="" width={384} height = {240} className=" w-[384px] h-[240px]" ></Image>
                    <div className="text-[#667085] mt-9 text-[14px]">Prabhash Mishra • 1 Jan 2023 • Today</div>
                    <div className="font-bold text-[22px]">Small business & Startup </div>
                    <div className="text-[15px] text-[#667085] font-normal mt-3">Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</div>
                    <div className="flex gap-x-4 text-[14px] mt-6">
                        <div className="bg-[#F9F5FF] text-[#6941C6]">
                            Tax & Audit
                        </div>
                        <div className="bg-[#F8F9FC] text-[#363F72]">
                            Managment
                        </div>
                    </div>
                </div>
                <div className=""> 
                    <Image src={BlogsImage} alt="" width={384} height = {240} className=" w-[384px] h-[240px]" ></Image>
                    <div className="text-[#667085] mt-9 text-[14px]">Prabhash Mishra • 1 Jan 2023 • Today</div>
                    <div className="font-bold text-[22px]">Small business & Startup </div>
                    <div className="text-[15px] text-[#667085] font-normal mt-3">Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</div>
                    <div className="flex gap-x-4 text-[14px] mt-6">
                        <div className="bg-[#F9F5FF] text-[#6941C6]">
                            Tax & Audit
                        </div>
                        <div className="bg-[#F8F9FC] text-[#363F72]">
                            Managment
                        </div>
                    </div>
                </div>
                <div className=""> 
                    <Image src={BlogsImage} alt="" width={384} height = {240} className=" w-[384px] h-[240px]" ></Image>
                    <div className="text-[#667085] mt-9 text-[14px]">Prabhash Mishra • 1 Jan 2023 • Today</div>
                    <div className="font-bold text-[22px]">Small business & Startup </div>
                    <div className="text-[15px] text-[#667085] font-normal mt-3">Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</div>
                    <div className="flex gap-x-4 text-[14px] mt-6">
                        <div className="bg-[#F9F5FF] text-[#6941C6]">
                            Tax & Audit
                        </div>
                        <div className="bg-[#F8F9FC] text-[#363F72]">
                            Managment
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#1C4670] w-[192px] h-[46px] flex items-center justify-center text-white mt-[48px]">Show More Blogs {ARROW}</div>
        </div>
    )
}