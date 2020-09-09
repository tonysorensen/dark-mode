import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";
//Call useLocalStorage and pass in the key you want to use to store to indicate whether or not dark mode is enabled. Remember, this hook returns an array with a value and a setter in an array, exactly like the state hook, so make sure to capture those values in a const - const [someValue, setSomeValue] = useLocalStorage('your key here')
// Finally, we need to return something out of useDarkMode, so we can use this in our app. What do you think we'll need? We'll need to know if dark mode is enabled, right? And we'll need a setter function to toggle dark mode. Let's just forward the value and the setter that were returned out of the useLocalStorage call. Return those two values in an array as well.
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
