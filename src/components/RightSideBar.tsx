import Image from "next/image";
import Link from "next/link";

export default function RightSideBar() {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white flex justify-center items-center gap-1 w-[80px] h-[40px] rounded-[25px]">
        <Link href="" className="flex justify-center items-center">
          <Image
            width={35}
            height={35}
            src="/media/zuCoin.svg"
            alt="zucoin-icon"
          />
        </Link>
        <strong className="text-[#5B6170]">120</strong>
      </div>
      <div className="bg-white flex justify-center items-center gap-1 w-[80px] h-[40px] rounded-[25px]">
        <Link href="" className="flex justify-center items-center">
          <Image
            width={35}
            height={35}
            src="/media/fire.svg"
            alt="fire-icon"
          />
        </Link>
        <strong className="text-[#5B6170]">24</strong>
      </div>
      <div className="flex justify-center items-center gap-1">
        <Link href="" className="flex justify-center items-center">
          <Image
            width={60}
            height={60}
            src="/media/calendar.svg"
            alt="calendar-icon"
          />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-1">
        <Link href="" className="flex justify-center items-center">
          <Image
            width={60}
            height={60}
            src="/media/files.svg"
            alt="file-icon"
          />
        </Link>
      </div>
    </div>
  );
}
