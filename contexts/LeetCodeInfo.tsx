"use client";

import { createContext, useContext, useEffect, useState } from "react";

// ---------------------------
// 1️⃣ Interfaces
// ---------------------------
interface ContextApiProps {
  children: React.ReactNode;
}

interface Leetcode {
  easy: number;
  medium: number;
  hard: number;
  rank: number;

  language1: string;
  count1: number;

  language2: string;
  count2: number;

  language3: string;
  count3: number;
}

// ---------------------------
// 2️⃣ Default Values
// ---------------------------
const defaultValue: Leetcode = {
  easy: 0,
  medium: 0,
  hard: 0,
  rank: 0,

  language1: "JavaScript",
  count1: 104,

  language2: "C++",
  count2: 41,

  language3: "TypeScript",
  count3: 11,
};

// ---------------------------
// 3️⃣ Create Context
// ---------------------------
export const LeetcodeContext = createContext<Leetcode>(defaultValue);

// ---------------------------
// 4️⃣ Provider Component
// ---------------------------
export const LeetCodeInfo: React.FC<ContextApiProps> = ({ children }) => {
  const [problems, setProblems] = useState<Leetcode>(defaultValue);

  useEffect(() => {
    const fetchLeetcodeInfo = async () => {
      try {
        const res = await fetch("/api/v1/leetCode");
        const data = await res.json();
        // Update only the fetched fields
        setProblems((prev) => ({
          ...prev,
          easy: data.leetcode.easy,
          medium: data.leetcode.medium,
          hard: data.leetcode.hard,
          rank: data.leetcode.rank,
        }));
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };

    fetchLeetcodeInfo();
  }, []);

  return (
    <LeetcodeContext.Provider value={problems}>
      {children}
    </LeetcodeContext.Provider>
  );
};

// ---------------------------
// 5️⃣ Custom Hook
// ---------------------------
export const useLeetCode = () => useContext(LeetcodeContext);
