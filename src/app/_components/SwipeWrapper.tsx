"use client";

import { motion, useAnimation } from "framer-motion";
import type { PanInfo } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { routes } from "@/app/lib/routes";

export default function SwipeWrapper({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const controls = useAnimation();

  const index = routes.indexOf(pathname);
  const isBlogSlug = pathname.startsWith("/Blog/");

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

    await controls.set({ x: 0 });
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.1}
      initial={false}
      animate={controls}
      onDragEnd={handleDragEnd}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}
