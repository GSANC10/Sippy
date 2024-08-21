"use client"
import React, { useState, useEffect } from 'react'
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button disabled>...</button>;
  }

  const dark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(dark ? "light" : "dark")}
      style={{ background: "transparent", border: "none", cursor: "pointer" }}
    >
      {dark ? (
        <Sun className="hover:cursor-pointer hover:text-primary" />
      ) : (
        <Moon className="hover:cursor-pointer hover:text-primary" />
      )}
    </button>
  );
};

export default ToggleMode;