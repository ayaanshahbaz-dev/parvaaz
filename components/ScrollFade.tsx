'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface ScrollFadeProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function ScrollFade({
  children,
  className = '',
  as: Component = 'div',
}: ScrollFadeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentEl = elementRef.current;
    if (!currentEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(currentEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Component
      ref={elementRef}
      className={`${className} ${
        isVisible ? 'scroll-fade-visible' : 'scroll-fade-init'
      }`}
    >
      {children}
    </Component>
  );
}
