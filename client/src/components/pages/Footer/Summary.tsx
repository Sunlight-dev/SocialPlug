import Image from "next/image";
export default function Summary() {
  return (
    <div className="flex flex-col gap-y-5 max-w-[280] pb-4 sm:pb-0">
      <div className="flex flex-col gap-y-4">
        <Image
          width={164}
          height={32}
          className="w-[123px] h-[24px] md:w-[164px] md:h-[32px]"
          alt=""
          src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338e69_footer-logo.svg"
        />
        <p className="opacity-50 ">
          Socialplug is the industry-leading media shop offering variety of
          services across social media platforms.
        </p>
      </div>

      <div
        className="flex p-2.5 items-center justify-start 
      rounded-[8] border-[1px] border-[#ffffff40] border-solid bg-[#ffffff1a] gap-x-2"
      >
        <span className="relative flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-light opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-green-light"></span>
        </span>
        <p>All services are online</p>
      </div>
      <div className="flex flex-col gap-y-4">
        <p className="font-clash leading-5 font-semibold text-[20px] md:text-[20px]">
          Company
        </p>
        <p className="opacity-50 text-[14px] md:text-[18px]">
          CB SOLUTIONS OÜ (16474680) Hobujaama 5, Talinn, Estonia, 10111
        </p>
        <p>Open 24/7 Mon - Sun</p>
      </div>
    </div>
  );
}
