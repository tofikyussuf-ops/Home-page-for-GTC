import { useEffect, useRef, useState } from "react";

export const ScrollReveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Triggers only when the visibility ratio hits or crosses 30%
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        /* 
          ─── THE EXACT 30% FIX ───
          0.3 means 30% of the component must be inside the viewport 
          for the entry animation to switch on.
        */
        threshold: 0.3,
        rootMargin: "0px", // Clear out pixel margins to let the percentage handle it perfectly
      },
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform will-change-[opacity,transform,filter] ${
        isVisible
          ? "opacity-100 filter blur-0 translate-y-0 scale-100"
          : "opacity-0 filter blur-[8px] translate-y-6 scale-[0.98]"
      }`}
    >
      {children}
    </div>
  );
};
