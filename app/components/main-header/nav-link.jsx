"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styleing from "./nav-link.module.css"
const NavLink = ({href,children}) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${styleing.link} ${styleing.active}`
          : styleing.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
