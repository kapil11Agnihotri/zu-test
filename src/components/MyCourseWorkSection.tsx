"use client"; 
import React, { useState } from "react";
import CourseWorkCard from "@/components/CourseWorkCard";

interface CourseWorkData {
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

function MyCourseWorkSection() {
  const courseWorkData: CourseWorkData[] = [
    {
      title: "Exploring Quantum Mechanics",
      content:
        "Quantum mechanics is a fundamental theory in physics that provides a description of the physical properties of nature at the scale of atoms and subatomic particles.",
      image: "/images/quantum_mechanics.jpg",
      lang: "English",
      timeToRead: 15,
      noOfWords: 1200,
      filterType: "all",
      subject: "Physics",
      rating: 6,
    },
    {
      title: "The Renaissance Art Movement",
      content:
        "The Renaissance was a fervent period of European cultural, artistic, political, and economic rebirth following the Middle Ages.",
      image: "/images/renaissance_art.jpg",
      lang: "Italian",
      timeToRead: 20,
      noOfWords: 1800,
      filterType: "ia",
      subject: "Art History",
      rating: 5,
    },
    {
      title: "Introduction to Python Programming",
      content:
        "Python is an interpreted, high-level and general-purpose programming language. Its design philosophy emphasizes code readability.",
      image: "/images/python_programming.jpg",
      lang: "Spanish",
      timeToRead: 10,
      noOfWords: 1500,
      filterType: "ia",
      subject: "Computer Science",
      rating: 7,
    },
  ];

  const [showAll, setShowAll] = useState<boolean>(false);

  const displayedItems = showAll ? courseWorkData : courseWorkData.slice(0, 2);

  return (
    <div>
      <h3 className="text-xl text-[#5B6170] font-semibold my-4">
        My coursework
      </h3>
      <div className="grid grid-cols-2 gap-5 ">
        {displayedItems.map((data, index) => (
          <CourseWorkCard key={index} {...data} />
        ))}
      </div>
      <div className="flex justify-center mt-5 mb-4">
        <button
          className="text-[#98A1BB] font-semibold"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show less" : "View all"}
        </button>
      </div>
    </div>
  );
}

export default MyCourseWorkSection;
