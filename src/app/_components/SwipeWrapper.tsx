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

  const isBlogSlug = pathname.startsWith("/Blog/");

  const handleDragEnd = async (_: any, info: any) => {
    // 👈 Swipe right on blog slug → back to blog list
    if (isBlogSlug && info.offset.x > 120) {
      router.push("/Blog");
    }

    // Normal tab navigation
    else if (
      info.offset.x < -120 &&
      index !== -1 &&
      index < routes.length - 1
    ) {
      router.push(routes[index + 1]);
    } else if (info.offset.x > 120 && index > 0) {
      router.push(routes[index - 1]);
    }

    // Reset drag position
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
