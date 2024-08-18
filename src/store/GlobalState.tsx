import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FormData {
  course: string;
  subject: string;
  essayTitle: string;
}

interface FileData {
  name: string;
  size: number;
  type: string;
  dataUrl: string;
}

interface FileStore {
  files: FileData[];
  formData: FormData;
  addFile: (file: FileData) => void;
  removeFile: (fileName: string) => void;
  updateFormData: (formData: Partial<FormData>) => void;
}

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

interface EvaluationStore {
  results: EvaluationResult[];
  addResult: (result: EvaluationResult) => void;
  clearResults: () => void;
}

export const useFileStore = create<FileStore>()(
    persist(
      (set) => ({
        files: [],
        formData: {
          course: "",
          subject: "",
          essayTitle: "",
        },
        addFile: (file) =>
          set((state) => ({
            files: [...state.files,file],
          })),
        removeFile: (fileName) =>
          set((state) => ({
            files: state.files.filter((file) => file.name !== fileName),
          })),
        updateFormData: (formData) =>
          set((state) => ({
            formData: { ...state.formData, ...formData },
          })),
      }),
      {
        name: "formData", // Name of the storage
      }
    )
  );

export const useEvaluationStore = create<EvaluationStore>()(
    persist(
      (set) => ({
        results: [],
        addResult: (result) =>
          set((state) => ({
            results: [...state.results, result],
          })),
        clearResults: () => set({ results: [] }),
      }),
      {
        name: "evaluation-storage", // Key in local storage
      }
    )
  );