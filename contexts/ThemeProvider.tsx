"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

// utilities
import { determineLightMode } from "@/utility/determinMode";

// types
type ThemeProviderPropType = {
  children: React.ReactNode;
};

type ThemeContextType = {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
};

// createContext
export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

// context provider
export function ThemeProvider({ children }: ThemeProviderPropType) {
  // states
  const [mode, setMode] = useState<string>("");

  // functionalities
  const handleThemeChange = () => {
    // window.matchMedia("(prefers-color-scheme: dark)").matches
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && !determineLightMode())
    ) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };

  // effects;
  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// useThemeProvider
export function useThemeProvider() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeProvider must be used inside the ThemeProvider");
  }
  return context;
}

// ThemeProvider: used for global layout changes such as dark Modern_Antiqua, etc.

// values: {
//   mode: string => used to defined the current system Layout,
//   setMode: SetStateAction<string> => used to reset the mode
// }
