import { useEffect } from "react";
import { useRef } from "react";

function Input() {
  const divRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className="input-div" ref={divRef}>
      <input ref={inputRef} type="text" className="p-5 focus:border-blue-500"/>
    </div>
  );
}

export default Input;
