import { useEffect, useRef, useState } from "react";

const FOLLOWERS = [
  { size: 116, delay: 0.18, color: "hsl(var(--primary))", rotation: 10, radius: "26%", opacity: 0.9 },
  { size: 80, delay: 0.12, color: "hsl(var(--secondary))", rotation: -8, radius: "30%", opacity: 0.82 },
  { size: 34, delay: 0.08, color: "hsl(var(--muted))", rotation: 12, radius: "999px", opacity: 0.74 },
];

const HOLD_TO_DRAW_MS = 2000;
const TOUCH_CANCEL_THRESHOLD = 14;

const isInteractiveElement = (target: Element | null) =>
  Boolean(
    target?.closest(
      'a, button, input, textarea, select, summary, label, [role="button"], [data-cursor="interactive"]'
    )
  );

const isTrailDisabledElement = (target: Element | null) =>
  Boolean(
    target?.closest(
      "nav, a, button, input, textarea, select, iframe, [role='button'], [data-cursor='interactive'], [data-cursor-trail='off']",
    ),
  );

const lockPageScroll = (locked: boolean) => {
  document.documentElement.classList.toggle("site-scroll-locked", locked);
  document.body.classList.toggle("site-scroll-locked", locked);
};

const CursorFollowers = () => {
  const holdTimerRef = useRef<number | null>(null);
  const isPointerActiveRef = useRef(false);
  const isTouchTrailActiveRef = useRef(false);
  const pointerRef = useRef({ x: 0, y: 0 });
  const touchStartRef = useRef({ x: 0, y: 0 });
  const followersRef = useRef(FOLLOWERS.map(() => ({ x: 0, y: 0 })));
  const [desktopEnabled, setDesktopEnabled] = useState(false);
  const [touchEnabled, setTouchEnabled] = useState(false);
  const [isPointerActive, setIsPointerActive] = useState(false);
  const [isOverInteractive, setIsOverInteractive] = useState(false);
  const [isTrailHidden, setIsTrailHidden] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [followers, setFollowers] = useState(
    FOLLOWERS.map(() => ({ x: 0, y: 0 }))
  );

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    const syncPointerMode = () => {
      const motionAllowed = !reducedMotion.matches;
      setDesktopEnabled(motionAllowed && finePointer.matches && !coarsePointer.matches);
      setTouchEnabled(motionAllowed && coarsePointer.matches);
    };

    syncPointerMode();
    reducedMotion.addEventListener("change", syncPointerMode);
    finePointer.addEventListener("change", syncPointerMode);
    coarsePointer.addEventListener("change", syncPointerMode);

    return () => {
      reducedMotion.removeEventListener("change", syncPointerMode);
      finePointer.removeEventListener("change", syncPointerMode);
      coarsePointer.removeEventListener("change", syncPointerMode);
    };
  }, []);

  useEffect(() => {
    if (!desktopEnabled && !touchEnabled) {
      return;
    }

    pointerRef.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    followersRef.current = FOLLOWERS.map(() => ({ ...pointerRef.current }));
    setFollowers(followersRef.current.map((item) => ({ ...item })));

    let animationFrame = 0;

    const animate = () => {
      followersRef.current.forEach((item, index) => {
        const target = index === 0 ? pointerRef.current : followersRef.current[index - 1];
        item.x += (target.x - item.x) * FOLLOWERS[index].delay;
        item.y += (target.y - item.y) * FOLLOWERS[index].delay;
      });

      setFollowers(followersRef.current.map((item) => ({ ...item })));
      animationFrame = window.requestAnimationFrame(animate);
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [desktopEnabled, touchEnabled]);

  useEffect(() => {
    if (!desktopEnabled) {
      return;
    }

    const updateTargetState = (target: Element | null) => {
      setIsOverInteractive(isInteractiveElement(target));
      setIsTrailHidden(isTrailDisabledElement(target));
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
      updateTargetState(event.target instanceof Element ? event.target : null);

      if (!isPointerActiveRef.current) {
        followersRef.current.forEach((item) => {
          item.x = pointerRef.current.x;
          item.y = pointerRef.current.y;
        });
        setFollowers(followersRef.current.map((item) => ({ ...item })));
        isPointerActiveRef.current = true;
        setIsPointerActive(true);
      }
    };

    const handlePointerLeave = () => {
      isPointerActiveRef.current = false;
      setIsPointerActive(false);
      setIsOverInteractive(false);
      setIsTrailHidden(false);
      setIsPressed(false);
    };

    const handlePointerDown = () => {
      setIsPressed(true);
    };

    const handlePointerUp = () => {
      setIsPressed(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [desktopEnabled]);

  useEffect(() => {
    if (!touchEnabled) {
      return;
    }

    const clearHoldTimer = () => {
      if (holdTimerRef.current !== null) {
        window.clearTimeout(holdTimerRef.current);
        holdTimerRef.current = null;
      }
    };

    const resetTouchTrail = () => {
      clearHoldTimer();
      lockPageScroll(false);
      isTouchTrailActiveRef.current = false;
      isPointerActiveRef.current = false;
      setIsPointerActive(false);
      setIsOverInteractive(false);
      setIsTrailHidden(false);
      setIsPressed(false);
    };

    const syncTouchTargetState = (clientX: number, clientY: number) => {
      const element = document.elementFromPoint(clientX, clientY);
      setIsOverInteractive(isInteractiveElement(element));
      setIsTrailHidden(isTrailDisabledElement(element));
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        clearHoldTimer();
        return;
      }

      const touch = event.touches[0];
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
      pointerRef.current = { x: touch.clientX, y: touch.clientY };
      syncTouchTargetState(touch.clientX, touch.clientY);

      clearHoldTimer();
      holdTimerRef.current = window.setTimeout(() => {
        isTouchTrailActiveRef.current = true;
        isPointerActiveRef.current = true;
        followersRef.current.forEach((item) => {
          item.x = touch.clientX;
          item.y = touch.clientY;
        });
        setFollowers(followersRef.current.map((item) => ({ ...item })));
        setIsPointerActive(true);
        lockPageScroll(true);
      }, HOLD_TO_DRAW_MS);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        resetTouchTrail();
        return;
      }

      const touch = event.touches[0];

      if (!isTouchTrailActiveRef.current) {
        const movedX = Math.abs(touch.clientX - touchStartRef.current.x);
        const movedY = Math.abs(touch.clientY - touchStartRef.current.y);

        if (movedX > TOUCH_CANCEL_THRESHOLD || movedY > TOUCH_CANCEL_THRESHOLD) {
          clearHoldTimer();
        }

        return;
      }

      event.preventDefault();
      pointerRef.current = { x: touch.clientX, y: touch.clientY };
      syncTouchTargetState(touch.clientX, touch.clientY);
    };

    const handleTouchEnd = () => {
      resetTouchTrail();
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
      resetTouchTrail();
    };
  }, [touchEnabled]);

  if (!desktopEnabled && !touchEnabled) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[120]">
      {FOLLOWERS.map((follower, index) => (
        <div
          key={follower.size}
          className="absolute transition-[opacity,width,height,filter] duration-300 ease-out"
          style={{
            width: `${follower.size * (isOverInteractive && index === 0 ? 1.3 : isPressed ? 0.84 : 1)}px`,
            height: `${follower.size * (isOverInteractive && index === 0 ? 1.3 : isPressed ? 0.84 : 1)}px`,
            left: followers[index].x,
            top: followers[index].y,
            transform: `translate(-50%, -50%) rotate(${follower.rotation + (isOverInteractive ? index * 6 : 0)}deg)`,
            opacity: isPointerActive && !isTrailHidden ? follower.opacity : 0,
            borderRadius: follower.radius,
            backgroundColor: follower.color,
            border: "4px solid hsl(var(--foreground))",
            boxShadow: isOverInteractive
              ? "14px 14px 0 0 rgba(0, 0, 0, 0.95)"
              : "10px 10px 0 0 rgba(0, 0, 0, 0.95)",
            mixBlendMode: "difference",
            filter: isOverInteractive
              ? "saturate(1.35) contrast(1.18) brightness(1.06)"
              : "saturate(1.18) contrast(1.08) brightness(1.03)",
          }}
        />
      ))}
    </div>
  );
};

export default CursorFollowers;
