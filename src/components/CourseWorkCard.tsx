import React from "react";
import Image from "next/image";

interface CourseWorkCardProps {
  title?: string;
  content?: string;
  image?: string;
  lang?: string;
  timeToRead?: number;
  noOfWords?: number;
  filterType?: string;
  subject?: string;
  rating?: number;
}

const CourseWorkCard: React.FC<CourseWorkCardProps> = ({
  title,
  content,
  image,
  lang,
  timeToRead,
  noOfWords,
  filterType,
  subject,
  rating,
}) => {
  const color: Array<string> = [
    "#E9D8F4",
    "#F4EAD8",
    "#D8E3F4",
    "#F4EAD8",
    "#D8E3F4",
    "#FCE4EC",
    "#E3F2FD",
    "#E8F5E9",
    "#F3E5F5",
    "#FFEBEE",
    "#E1F5FE",
  ];

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * color.length);
    return color[randomIndex];
  }

  const secondaryColor = getRandomColor();

  return (
    <div
      className="rounded-lg shadow-lg p-2 flex items-center"
      style={{
        background: `linear-gradient(to right, #FFFFFF, ${secondaryColor})`,
      }}
    >
      <div className="w-1/4 rounded-lg p-2 flex items-center justify-center border border-[#EAF0F2]">
        <Image
          width={130}
          height={150}
          src="/media/template.png"
          alt="template"
        />
      </div>
      <div className="w-3/4 px-4 ">
        <h3 className="text-xl font-semibold text-gray-800 truncate ">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mt-1 truncate">{content}</p>
        <div className="grid grid-cols-4 mt-4 text-sm text-gray-600 gap-2">
          <div className="flex gap-2 py-1 bg-white items-center justify-center rounded-full whitespace-nowrap">
            <span>
              <Image
                width={15}
                height={15}
                src="/media/CardProfileIcon.svg"
                alt="template"
              />
            </span>
            <span className="truncate">{subject} HL</span>
          </div>
          <div className="flex gap-2 py-1 bg-white items-center justify-center rounded-full whitespace-nowrap">
            <span>
              <Image
                width={15}
                height={15}
                src="/media/CardClockIcon.svg"
                alt="template"
              />
            </span>
            <span>{timeToRead} min read</span>
          </div>
          <div className="flex gap-2 py-1 bg-white items-center justify-center rounded-full whitespace-nowrap">
            <span>
              <Image
                width={15}
                height={15}
                src="/media/CardPaperIcon.svg"
                alt="template"
              />
            </span>
            <span>{noOfWords} words</span>
          </div>
          <div className="flex gap-2 py-1 bg-white items-center justify-center rounded-full whitespace-nowrap">
            <span>
              <Image
                width={15}
                height={15}
                src="/media/CardRatingIcon.svg"
                alt="template"
              />
            </span>
            <span>{rating}/7</span>
          </div>
          <div className="flex gap-2 py-1 bg-white items-center justify-center rounded-full whitespace-nowrap">
            <span>
              <Image
                width={15}
                height={15}
                src="/media/CardLangIcon.svg"
                alt="template"
              />
            </span>
            <span>{lang}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseWorkCard;
