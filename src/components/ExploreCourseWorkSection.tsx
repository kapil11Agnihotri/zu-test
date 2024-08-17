"use client";

import React, { useState } from "react";
import CourseWorkCard from "@/components/CourseWorkCard.tsx";

function ExploreCourseWorkSection() {
  interface CourseWorkData {
    title?: string;
    content?: string;
    image?: string;
    lang?: string;
    timeToRead?: number;
    noOfWords?: number;
    filterType?: string; // all, IA, EE, IO, Tok
    subject?: string;
    rating?: number; // rating out of 7
  }

  let color: Array<string> = [
    "#E9D8F4",
    "#F4EAD8",
    "#D8E3F4",
    "#F4EAD8",
    "#D8E3F4",
  ];

  const courseWorkData: CourseWorkData[] = [
    {
      title: "Exploring Quantum Mechanics",
      content:
        "Quantum mechanics is a fundamental theory in physics that provides a description of the physical properties of nature at the scale of atoms and subatomic particles. It is the foundation of all quantum physics, including quantum chemistry, quantum field theory, quantum technology, and quantum information science.",
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
        "The Renaissance was a fervent period of European cultural, artistic, political, and economic “rebirth” following the Middle Ages. Generally described as taking place from the 14th century to the 17th century, the Renaissance promoted the rediscovery of classical philosophy, literature, and art.",
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
        "Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",
      image: "/images/python_programming.jpg",
      lang: "Spanish",
      timeToRead: 10,
      noOfWords: 1500,
      filterType: "ia",
      subject: "Computer Science",
      rating: 7,
    },
    {
      title: "Theories of Evolution",
      content:
        "The theory of evolution by natural selection, first formulated in Darwin's book 'On the Origin of Species' in 1859, is the process by which organisms change over time as a result of changes in heritable physical or behavioral traits. These changes allow an organism to better adapt to its environment and will help it survive and have more offspring.",
      image: "/images/evolution_theories.jpg",
      lang: "French",
      timeToRead: 18,
      noOfWords: 1900,
      filterType: "ee",
      subject: "Biology",
      rating: 4,
    },
    {
      title: "The Architecture of Ancient Rome",
      content:
        "Roman architecture is renowned for its ability to create awe-inspiring spaces and structures, many of which have stood the test of time. From the Colosseum to the Pantheon, Roman engineering and architectural prowess continue to influence modern design and construction.",
      image: "/images/ancient_rome_architecture.jpg",
      lang: "German",
      timeToRead: 22,
      noOfWords: 2100,
      filterType: "io",
      subject: "Architecture",
      rating: 6,
    },
    {
      title: "Basics of Organic Chemistry",
      content:
        "Organic chemistry is the study of the structure, properties, composition, reactions, and preparation of carbon-containing compounds. This branch of chemistry is fundamental to understanding the chemical processes that sustain life and the development of new materials and medicines.",
      image: "/images/organic_chemistry.jpg",
      lang: "Chinese",
      timeToRead: 12,
      noOfWords: 1300,
      filterType: "tok",
      subject: "Chemistry",
      rating: 5,
    },
    {
      title: "Understanding the Human Brain",
      content:
        "The human brain is the central organ of the human nervous system, and with the spinal cord makes up the central nervous system. The brain consists of the cerebrum, the brainstem, and the cerebellum. It controls most of the activities of the body, processing, integrating, and coordinating the information it receives from the sense organs.",
      image: "/images/human_brain.jpg",
      lang: "Japanese",
      timeToRead: 25,
      noOfWords: 2200,
      filterType: "io",
      subject: "Neuroscience",
      rating: 4,
    },
    {
      title: "Artificial Intelligence in the Modern World",
      content:
        "Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.",
      image: "/images/artificial_intelligence.jpg",
      lang: "Russian",
      timeToRead: 17,
      noOfWords: 1750,
      filterType: "ee",
      subject: "Artificial Intelligence",
      rating: 6,
    },
    {
      title: "The Cultural Impact of Globalization",
      content:
        "Globalization is a complex and multifaceted phenomenon that has significantly impacted cultures around the world. It has led to the exchange of ideas, values, and cultural expressions, as well as economic and social transformations. While some view globalization as a force for good, promoting unity and understanding, others see it as a threat to local cultures and identities.",
      image: "/images/globalization.jpg",
      lang: "Korean",
      timeToRead: 19,
      noOfWords: 2000,
      filterType: "tok",
      subject: "Cultural Studies",
      rating: 5,
    },
    {
      title: "Climate Change and Its Effects",
      content:
        "Climate change refers to long-term changes in the average weather patterns that have come to define Earth's local, regional, and global climates. These changes have a broad range of observed effects that are synonymous with the term. This includes warming temperatures, changes in precipitation, and more frequent extreme weather events.",
      image: "/images/climate_change.jpg",
      lang: "Portuguese",
      timeToRead: 16,
      noOfWords: 1700,
      filterType: "ee",
      subject: "Environmental Science",
      rating: 6,
    },
  ];

  const [selectedButton, setSelectedButton] = useState<string>("all");

  const buttonClasses = (button: string) =>
    selectedButton === button
      ? "p-2 bg-white rounded-lg text-[#6947BF] font-bold"
      : "p-2 font-bold text-[#98A1BB]";

  return (
    <div>
      <h3 className="text-xl text-[#5B6170] font-semibold mt-4">
        Explore coursework
      </h3>
      <div className="py-3 flex gap-4">
        <button
          className={buttonClasses("all")}
          onClick={() => setSelectedButton("all")}
        >
          All
        </button>
        <button
          className={buttonClasses("ia")}
          onClick={() => setSelectedButton("ia")}
        >
          IA Example
        </button>
        <button
          className={buttonClasses("ee")}
          onClick={() => setSelectedButton("ee")}
        >
          EE Example
        </button>
        <button
          className={buttonClasses("io")}
          onClick={() => setSelectedButton("io")}
        >
          IO Example
        </button>
        <button
          className={buttonClasses("tok")}
          onClick={() => setSelectedButton("tok")}
        >
          Tok Example
        </button>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {courseWorkData
          .filter(
            (item) =>
              selectedButton === "all" || item.filterType === selectedButton
          )
          .map((data, index) => (
            <CourseWorkCard key={index} {...data} />
          ))}
      </div>
    </div>
  );
}

export default ExploreCourseWorkSection;
