"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle, FiX } from "react-icons/fi";
import { TfiGallery } from "react-icons/tfi";
import { useEvaluationStore, useFileStore } from "@/store/GlobalState";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

interface Criteria {
  A: number;
  B: number;
  C: number;
}

interface EvaluationResult {
  score: number;
  criteria: Criteria;
  date: string;
}

function HeroSection() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [evaluationResult, setEvaluationResult] =
    useState<EvaluationResult | null>(null);

  const { addResult } = useEvaluationStore();

  const { formData, addFile, removeFile, updateFormData } = useFileStore(
    (state) => ({
      formData: state.formData,
      addFile: state.addFile,
      removeFile: state.removeFile,
      updateFormData: state.updateFormData,
    })
  );

  const MAX_FILE_SIZE_MB = 25;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size / 1024 / 1024 > MAX_FILE_SIZE_MB) {
        alert(`File size exceeds ${MAX_FILE_SIZE_MB} MB`);
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const fileData = {
          name: selectedFile.name,
          size: selectedFile.size,
          type: selectedFile.type,
          dataUrl: reader.result as string,
        };
        addFile(fileData);
        setFile(selectedFile);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleRemoveFile = () => {
    if (file) {
      removeFile(file.name);
      setFile(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleEvaluate = async () => {
    if (!file) {
      alert("Please upload a file first.");
      return;
    }
    setLoading(true);

    // Mock API call
    const response = await fetch("/api/evaluate", {
      method: "POST",
      body: JSON.stringify({ file: file.name }), // Example of using file data
    });

    const result: EvaluationResult = await response.json();
    setEvaluationResult(result);
    addResult(result);
    setLoading(false);
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-3/4">
        <h1 className="text-3xl font-bold mb-4">
          Hey IB Folks! Unsure about the quality of your answers?
          <span className="text-purple-500"> We get you.</span>
        </h1>
        <div className="bg-[#f5f7f8] p-6 rounded-3xl shadow-lg">
          <div className="h-100 border-dashed border-2 border-[#6947BF] rounded-lg p-6 mb-6 flex items-center justify-center bg-white">
            <input
              type="file"
              id="fileUpload"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="fileUpload"
              className="flex items-center justify-center w-full cursor-pointer"
            >
              {!file ? (
                <div className="w-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-sm flex items-center justify-center">
                    <TfiGallery />
                  </div>
                  <p className="ml-4 text-gray-500">
                    Upload a file (Limit {MAX_FILE_SIZE_MB} MB per file)
                  </p>
                </div>
              ) : (
                <div className="w-full flex items-center bg-gray-50 rounded-md p-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-sm flex items-center justify-center">
                    <FiCheckCircle className="text-green-500 w-8 h-8" />
                  </div>
                  <p className="ml-4">
                    {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                  </p>
                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    className="ml-auto text-gray-400 hover:text-red-500"
                  >
                    <FiX />
                  </button>
                </div>
              )}
            </label>
          </div>
          <div className="flex flex-col">
            <label className="text-[#7A8196] pb-2">
              Select your course & subjects*
            </label>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <select
                name="course"
                id="course"
                className="form-select border border-gray-300 rounded-full p-3"
                value={formData.course}
                onChange={handleSelectChange}
              >
                <option value="" disabled>
                  Please Choose...
                </option>
                <option value="Course 1">Course 1</option>
                <option value="Course 2">Course 2</option>
              </select>

              <select
                name="subject"
                className="form-select border border-gray-300 rounded-full p-3"
                value={formData.subject}
                onChange={handleSelectChange}
              >
                <option value="" disabled>
                  Subject
                </option>
                <option value="Subject 1">Subject 1</option>
                <option value="Subject 2">Subject 2</option>
              </select>
            </div>
          </div>

          <div className="mb-6 flex flex-col">
            <label className="text-[#7A8196] pb-2">
              Enter your essay title*(Required)
            </label>

            <input
              type="text"
              name="essayTitle"
              className="border border-gray-300 rounded-full p-3"
              placeholder="Enter your essay title*(Required)"
              value={formData.essayTitle}
              onChange={handleInputChange}
            />
          </div>
          {evaluationResult ? (
            <div className="mt-6">
              <div className="w-1/2 mx-auto">
                <CircularProgressbar
                  value={evaluationResult.score}
                  text={`${evaluationResult.score}%`}
                  styles={buildStyles({
                    pathColor: "#6947BF",
                    textColor: "#6947BF",
                  })}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Score Breakdown</h3>
                <p>Criteria A: {evaluationResult.criteria.A}%</p>
                <p>Criteria B: {evaluationResult.criteria.B}%</p>
                <p>Criteria C: {evaluationResult.criteria.C}%</p>
                <p>
                  Date: {new Date(evaluationResult.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ) : (
            <button
              onClick={handleEvaluate}
              disabled={loading}
              className="bg-[#6947BF] text-white text-lg rounded-full p-2 pl-3 pr-6 hover:bg-purple-600 transition-colors flex gap-4 justify-end items-center"
            >
              <span>
                <Image
                  width={25}
                  height={25}
                  src="/media/button start logo.svg"
                  alt="book-icon"
                />
              </span>
              {loading ? "Evaluating..." : "Evaluate your Score"}
            </button>
          )}
        </div>
      </div>
      {/* section 2 */}
      <div className="w-1/3 h-full px-8 py-4 flex flex-col justify-center items-center">
        <Image
          width={250}
          height={250}
          src="/media/heroSectionRightBarImage.svg"
          alt="book-icon"
        />
        <div className="bg-white pt-6 px-6 rounded-3xl shadow-lg text-center">
          <h2 className="text-4xl text-left font-bold mb-4 text-[#6947BF]">
            Evaluate your x with a single click
          </h2>
          <div className="flex justify-center items-center mt-4 relative overflow-hidden">
            <Image
              width={100}
              height={100}
              src="/media/Grade Report stars.svg"
              alt="book-icon"
              className="absolute transform scale-x-[-1] left-0 top-0 z-10"
            />
            <div className="absolute z-0 w-[10rem] h-[10rem] rounded-full bg-[#F5EDE5] bg-opacity-75"></div>
            <div className="absolute z-0 w-[15rem] h-[15rem] rounded-full bg-[#F5EDE5] bg-opacity-50"></div>
            <Image
              width={250}
              height={250}
              src="/media/Grade Report 3D Icon 1.svg"
              alt="book-icon"
              className="z-20 pt-5"
            />
            <Image
              width={110}
              height={110}
              src="/media/Grade Report stars.svg"
              alt="book-icon"
              className="absolute top-[-40px] right-[2%] z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
