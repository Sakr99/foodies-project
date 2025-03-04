"use client";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import styleing from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styleing.header}>
        <Link className={styleing.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={styleing.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
