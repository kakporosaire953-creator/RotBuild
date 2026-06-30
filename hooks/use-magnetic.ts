"use client";

import { useCallback, useRef } from "react";

/** Makes an element follow the cursor slightly when hovered, snapping back on leave. */
export function useMagnetic(strength = 0.3) {
  const ref = useRef<HTMLElement | null>(null);

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * (strength + 0.1)}px)`;
    },
    [strength]
  );

  const onLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  }, []);

  return { ref, onMove, onLeave };
}
