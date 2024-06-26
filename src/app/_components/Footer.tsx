import Image from "next/image";
export default function Footer() {
  return (
    <div className="bg-[#011B5B] text-white font-extralight">
      <div className=" flex justify-around pt-10">
        <div className="">
          <div className="w-[300px]">
            Design outstanding interfaces with advanced Figma features in a
            matter of minutes.
          </div>
          <div className="flex gap-5 mt-3">
            <Image
              src="/assets/facebook.png"
              height={24}
              width={24}
              alt=""
              className=""
            />
            <Image
              src="/assets/google.png"
              height={24}
              width={24}
              alt=""
              className=""
            />
            <Image
              src="/assets/apple.png"
              height={24}
              width={24}
              alt=""
              className=""
            />
            <Image
              src="/assets/instagram.png"
              height={24}
              width={24}
              alt=""
              className=""
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="text-[#FFA229] font-bold">START A BUSINESS</div>
          <div className="mt-2 leading-8">
            <div>Features</div>
            <div>Solutions</div>
            <div>Integrations</div>
            <div>Enterprise</div>
            <div>Solutions</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[#FFA229] font-bold">
            GOVERNMENT REGISTRATION
          </div>
          <div className="mt-2 leading-8">
            <div>Partners</div>
            <div>Community</div>
            <div>Developers</div>
            <div>App</div>
            <div>Blog</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[#FFA229] font-bold">COMPLIANCE & TAX</div>
          <div className="mt-2 leading-8">
            <div className="">Channels</div>
            <div>Scale</div>
            <div>Watch the Demo</div>
            <div>Our Competition</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[#FFA229] font-bold">BIS & CDSCO</div>
          <div className="mt-2 leading-8">
            <div>About Us</div>
            <div>News</div>
            <div>Leadership</div>
            <div>Media Kit</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-10">
        <div className="pb-10">© 2024 Registerkaro. All Rights Reserved.</div>
      </div>
    </div>
  );
}
