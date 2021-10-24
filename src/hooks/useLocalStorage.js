// create a hook to use localStorage
import { useRef, useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  // get the initial value
  const initialValueRef = useRef(initialValue);
  // set the initial value
  initialValueRef.current = initialValue;

  // useState to get value
  const [value, setValue] = useState(() => {
    // get from localStorage
    const item = window.localStorage.getItem(key);
    // return the value or the initial value
    return item ? JSON.parse(item) : initialValueRef.current;
  });

  // useEffect to store value in localStorage
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
