import { useEffect, useState } from "react";

export default function useDebounce(initializeValue = "", delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(initializeValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initializeValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [delay, initializeValue]);

  return debounceValue;
}
