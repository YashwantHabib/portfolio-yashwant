"use client";

import { motion, useAnimation } from "framer-motion";
import type { PanInfo } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { routes } from "@/app/lib/routes";

export default function SwipeWrapper({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const controls = useAnimation();

  const index = routes.indexOf(pathname);
  const isBlogSlug = pathname.startsWith("/Blog/");

  const hintShownRef = useRef(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (hintShownRef.current) return;

    const isTouchDevice =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    if (!isTouchDevice) return;

    hintShownRef.current = true;
    setShowToast(true);

    controls
      .start({
        x: [0, -8, 0],
        transition: { duration: 0.6, ease: "easeInOut" },
      })
      .then(() => {
        setShowToast(false);
      });
  }, [controls]);

  const handleDragEnd = async (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (isBlogSlug && info.offset.x > 120) {
      router.push("/Blog");
    } else if (
      info.offset.x < -120 &&
      index !== -1 &&
      index < routes.length - 1
    ) {
      router.push(routes[index + 1]);
    } else if (info.offset.x > 120 && index > 0) {
      router.push(routes[index - 1]);
    }

    controls.set({ x: 0 });
  };

  return (
    <>
      {/* Swipeable content */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        animate={controls}
        initial={false}
        onDragEnd={handleDragEnd}
        className="h-full"
      >
        {children}
      </motion.div>

      {/* Tiny swipe toast */}
      {showToast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 text-[11px] text-stone-400 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none">
          Swipe to switch tabs
        </div>
      )}
    </>
  );
}
