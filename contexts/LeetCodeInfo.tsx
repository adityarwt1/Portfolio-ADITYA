"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ContextApiProps {
  children: React.ReactNode;
}

interface Leetcode {
  easy: number;
  medium: number;
  hard: number;
  rank: number;
}

// ⭐ Default value so context never becomes undefined
const defaultValue: Leetcode = {
  easy: 0,
  medium: 0,
  hard: 0,
  rank: 0,
};

// ⭐ Export context
export const LeetcodeContextApi = createContext<Leetcode>(defaultValue);

// ⭐ Provider Component
export const LeetCodeInfo: React.FC<ContextApiProps> = ({ children }) => {
  const [problems, setProblems] = useState<Leetcode>(defaultValue);

  useEffect(() => {
    const fetchLeetcodeInfo = async () => {
      try {
        const res = await fetch("/api/v1/leetCode");
        const data = await res.json();

        setProblems({
          easy: data.leetcode.easy,
          medium: data.leetcode.medium,
          hard: data.leetcode.hard,
          rank: data.leetcode.rank,
        });
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };

    fetchLeetcodeInfo();
  }, []);

  return (
    <LeetcodeContextApi.Provider value={problems}>
      {children}
    </LeetcodeContextApi.Provider>
  );
};

export const useLeetCode = () => {
  return useContext(LeetcodeContextApi);
};
