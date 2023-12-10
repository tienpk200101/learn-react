import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function StopWatch() {
  const countRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleStart = () => {
    if (countRef.current) return;

    countRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(countRef.current);
    countRef.current = null;
  }

  useEffect(() => {
    return clearInterval(countRef.current);
  }, [])

  return (
    <div>
      <h2>Timer: {count}s</h2>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
}

export default StopWatch;