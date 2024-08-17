import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
  return (
    <>
      <div className="mb-4">
        <Link href="/">
          <Image width={50} height={50} src="/media/logo.svg" alt="ZUAI-Logo" />
        </Link>
      </div>

      <div className="flex gap-4 flex-col">
        <Link
          href=""
          className="w-10 h-10 rounded-full flex justify-center items-center"
          style={{ backgroundColor: "#6947BF" }}
        >
          <Image
            width={25}
            height={25}
            src="/media/dashboard.svg"
            alt="dashboard-icon"
          />
        </Link>
        <Link
          href=""
          className="w-10 h-10 rounded-full flex justify-center items-center"
        >
          <Image
            width={25}
            height={25}
            src="/media/book_4.svg"
            alt="book-icon"
          />
        </Link>
        <Link
          href=""
          className="w-10 h-10 rounded-full flex justify-center items-center"
        >
          <Image
            width={25}
            height={25}
            src="/media/file_copy.svg"
            alt="fileCopy-icon"
          />
        </Link>
        <Link
          href=""
          className="w-10 h-10 rounded-full flex justify-center items-center"
        >
          <Image width={25} height={25} src="/media/quiz.svg" alt="quiz-icon" />
        </Link>
      </div>
    </>
  );
}
