import Image from "next/image";

export default function Works() {
  return (
    <div className="flex items-center justify-center pt-10 pb-10">
      <div>
        <Image
          src="/assets/Logos.png"
          alt="Logo"
          width={1184}
          height={100}
        ></Image>
      </div>
    </div>
  );
}
