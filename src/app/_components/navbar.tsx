"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/Projects", label: "Projects" },
    { href: "/About", label: "About" },
    { href: "/Blog", label: "Blog" },
  ];

  return (
    <div className="space-x-2 text-sm ">
      {links.map(({ href, label }, index) => (
        <React.Fragment key={href}>
          <Link
            href={href}
            className={pathname === href ? "text-white" : "text-stone-500"}
          >
            {label}
          </Link>
          {index !== links.length - 1 && (
            <span className="text-stone-700">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Navbar;
