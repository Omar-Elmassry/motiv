import { useEffect, useRef, useState } from "react";

const useScrollPercentage = (percentage: number) => {
  // const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(false);

  // const renderCount = useRef(0);
  // renderCount.current += 1;
  // console.log("🚀 ~ useScrollPosition3.ts ~ renderCount", renderCount.current);

  useEffect(() => {
    const updatePosition = () => {
      const calcPercentage = (window.scrollY / window.innerHeight) * 100;
      // setScrollPosition(window.pageYOffset);
      setScrollPercentage(calcPercentage > percentage);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [percentage]);

  return { scrollPercentage };
};

export default useScrollPercentage;
