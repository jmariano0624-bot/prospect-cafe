"use client";

import { stagger, useAnimate, useReducedMotion } from "motion/react";
import { useEffect, type ReactNode } from "react";

export function HeroEntrance({
  children,
  className = "",
  sequence = false,
}: {
  children: ReactNode;
  className?: string;
  sequence?: boolean;
}) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !scope.current) return;

    // Keep server-rendered content visible, then enhance it after hydration.
    const entrance = animate(
      sequence ? Array.from(scope.current.children) : scope.current,
      { opacity: [0.65, 1], y: [12, 0] },
      {
        duration: 0.45,
        delay: sequence ? stagger(0.06) : 0.12,
        ease: [0.22, 1, 0.36, 1],
      },
    );

    return () => entrance.complete();
  }, [animate, reducedMotion, scope, sequence]);

  return (
    <div
      ref={scope}
      className={`hero-entrance ${className}`}
      data-entrance-sequence={sequence || undefined}
    >
      {children}
    </div>
  );
}
