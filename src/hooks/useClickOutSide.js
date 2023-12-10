import { useEffect, useRef, useState } from "react";

export default function useClickOutSide(dom = "button") {
  const nodeRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleDropdownClickOut(e) {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        // console.log("Click outside dropdown");
        setShow(false);
      }
      //  else {
      //   console.log("Click inside dropdown");
      // }
    }

    document.addEventListener("click", handleDropdownClickOut);

    return () => {
      document.removeEventListener("click", handleDropdownClickOut);
    };
  }, []);

  return { show, nodeRef, setShow };
}
