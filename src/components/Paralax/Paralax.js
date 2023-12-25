import React, { useEffect, useRef } from 'react';

const Parallax = ({ children, speed }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (element) {
        const scrollPosition = window.scrollY;
        const transformValue = `translate3d(0, ${scrollPosition * speed}px, 0)`;
        element.style.transform = transformValue;
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, [speed]);

  return <div ref={ref}>{children}</div>;
};

export default Parallax;