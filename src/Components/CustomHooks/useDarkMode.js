import { useEffect } from "react";
import { useLocalStorageState } from "./useLocalStorageState";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorageState(false, "mode");

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return [darkMode, toggleDarkMode];
}
