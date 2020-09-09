import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);
  useEffect(() => {
    if (value === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [value]);
  return [value, setValue];
};

export default useDarkMode;
