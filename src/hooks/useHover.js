import React, { useEffect, useRef, useState } from 'react';

const useHover = () => {
    const [hovered, setHovered] = useState(false);
    const nodeRef = useRef(null);

    useEffect(() => {
        function handleMouseOver() {
            setHovered(true);
        }
        function handleMouseOut() {
            setHovered(false);
        }

        const dom = nodeRef.current;
        console.log(dom);
        if(dom) {
            dom.addEventListener('mouseover', handleMouseOver);
            dom.addEventListener('mouseout', handleMouseOut);
        }

        return () => {
            dom.removeEventListener('mouseover', handleMouseOver);
            dom.removeEventListener('mouseout', handleMouseOut);
        }
    }, [])

    return {
        hovered,
        nodeRef
    };
};

export default useHover;