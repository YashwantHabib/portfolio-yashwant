"use client";

import { motion, useAnimation } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { routes } from "@/app/lib/routes";

export default function SwipeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const controls = useAnimation();

  const index = routes.indexOf(pathname);

  const handleDragEnd = async (_: any, info: any) => {
    if (info.offset.x < -120 && index < routes.length - 1) {
      router.push(routes[index + 1]);
    } else if (info.offset.x > 120 && index > 0) {
      router.push(routes[index - 1]);
    }

    // 🔑 RESET POSITION — THIS IS THE FIX
    await controls.start({ x: 0 });
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.1}
      animate={controls}
      onDragEnd={handleDragEnd}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}
