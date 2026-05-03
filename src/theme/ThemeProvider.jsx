import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { getThemeTokens } from "./theme";

/**
 * ThemeContext
 */
const ThemeContext = createContext(null);

/**
 * Get system theme safely
 */
const getSystemTheme = () => {
  if (typeof window === "undefined") return "dark";

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

/**
 * ThemeProvider
 */
export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    if (typeof window === "undefined") return "dark";

    const stored = localStorage.getItem("theme-mode");
    if (stored === "dark" || stored === "light") return stored;

    return getSystemTheme();
  });

  /**
   * Theme tokens (FLATTENED)
   */
  const tokens = getThemeTokens(mode);

  const isDark = mode === "dark";
  const isLight = mode === "light";

  /**
   * Toggle theme
   */
  const toggleTheme = useCallback(() => {
    setMode((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme-mode", next);
      return next;
    });
  }, []);

  /**
   * Set theme manually
   */
  const setThemeMode = useCallback((newMode) => {
    if (newMode === "dark" || newMode === "light") {
      localStorage.setItem("theme-mode", newMode);
      setMode(newMode);
    }
  }, []);

  /**
   * Apply theme to DOM
   */
  useEffect(() => {
    if (typeof document === "undefined") return;

    document.documentElement.setAttribute("data-theme", mode);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(mode);
  }, [mode]);

  /**
   * SYSTEM THEME AUTO-SYNC
   */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      const stored = localStorage.getItem("theme-mode");

      // Only auto-update if user hasn't manually chosen
      if (!stored) {
        setMode(e.matches ? "dark" : "light");
      }
    };

    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  /**
   * CONTEXT VALUE (FLAT STRUCTURE)
   */
  const value = {
    mode,
    isDark,
    isLight,
    toggleTheme,
    setThemeMode,

    // 👇 IMPORTANT: flatten tokens here
    ...tokens,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * useTheme Hook
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    console.warn(
      "useTheme() called without ThemeProvider. Using fallback theme."
    );

    const fallback = getThemeTokens("dark");

    return {
      mode: "dark",
      isDark: true,
      isLight: false,
      toggleTheme: () => {},
      setThemeMode: () => {},
      ...fallback,
    };
  }

  return context;
};

export default ThemeProvider;