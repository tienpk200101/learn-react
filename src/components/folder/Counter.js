import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const [info, setInfo] = useState({
    firstName: "tien",
    lastName: "phung",
  });

  useEffect(() => {
    console.log(info);
  }, [info.firstName]);

  return (
    <div className="p-5 flex gap-x-4 items-center">
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) => {
          setInfo({ ...info, firstName: e.target.value });
        }}
      />
      <span className="text-2xl font-bold">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="inline-block p-3 bg-green-400 text-white"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
