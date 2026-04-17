import { useEffect, useRef, useState } from "react";

const CURSOR_SIZE = 54;
const HOTSPOT_X = CURSOR_SIZE - 10;
const HOTSPOT_Y = 8;

const SiteCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pointerActiveRef = useRef(false);
  const [pointerEnabled, setPointerEnabled] = useState(false);
  const [isPointerActive, setIsPointerActive] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    const syncPointerMode = () => {
      setPointerEnabled(mediaQuery.matches && !coarsePointer.matches);
    };

    syncPointerMode();
    mediaQuery.addEventListener("change", syncPointerMode);
    coarsePointer.addEventListener("change", syncPointerMode);

    return () => {
      mediaQuery.removeEventListener("change", syncPointerMode);
      coarsePointer.removeEventListener("change", syncPointerMode);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("site-cursor-hidden", pointerEnabled);

    return () => {
      document.documentElement.classList.remove("site-cursor-hidden");
    };
  }, [pointerEnabled]);

  useEffect(() => {
    if (!pointerEnabled) {
      pointerActiveRef.current = false;
      setIsPointerActive(false);
      return;
    }

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${window.innerWidth / 2 - HOTSPOT_X}px, ${window.innerHeight / 2 - HOTSPOT_Y}px)`;
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${event.clientX - HOTSPOT_X}px, ${event.clientY - HOTSPOT_Y}px)`;
      }

      if (!pointerActiveRef.current) {
        pointerActiveRef.current = true;
        setIsPointerActive(true);
      }
    };

    const handlePointerLeave = () => {
      pointerActiveRef.current = false;
      setIsPointerActive(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [pointerEnabled]);

  if (!pointerEnabled) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[140] transition-opacity duration-150 ease-out"
      style={{
        width: `${CURSOR_SIZE}px`,
        height: `${CURSOR_SIZE}px`,
        opacity: isPointerActive ? 1 : 0,
        left: 0,
        top: 0,
        willChange: "transform",
      }}
      aria-hidden="true"
    >
      <img
        src="/Cursor.png"
        alt=""
        className="block h-full w-full select-none object-contain"
        draggable={false}
      />
    </div>
  );
};

export default SiteCursor;
