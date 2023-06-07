"use client";
import {
  AlignRight,
  LucideX,
  SearchIcon,
  ShoppingCartIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Menu from "../shared/Menu";
import { useState } from "react";
import Cart from "../shared/Cart";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav>
      {/* Large Srceen */}
      <div className="flex justify-between items-center w-full h-20 lg:px-20 px-5 max-w-[1240px] mx-auto">
        <div>
          <Link href={"/"}>
            <Image src="/Logo.webp" alt="" width={150} height={150} />
          </Link>
        </div>
        <div className="hidden lg:block">
          <Menu />
        </div>
        <div className="border border-gray-300 rounded-md px-2 bg-white hidden lg:flex items-center w-[30%]">
          <SearchIcon size={15} />
          <input
            type="text"
            placeholder="What you looking for"
            className="outline-none ml-1"
          />
        </div>
        <div className="hidden lg:block">
          {/* @ts-ignore */}
          <Cart />
        </div>

        <div className="flex justify-center items-center lg:hidden">
          <AlignRight onClick={handleNav} />
        </div>
      </div>
      {/* Mobile Srceen */}
      <div
        className={`${
          nav
            ? "flex lg:hidden flex-col w-full h-screen items-center fixed top-0 left-0 z-[100] bg-white px-5 "
            : "flex lg:hidden flex-col w-full h-screen items-center fixed top-[-100%] left-0 z-[100] bg-white px-5 "
        }`}
      >
        <div className="flex justify-between items-center w-full h-20">
          <div>
            <Link href={"/"}>
              <Image src="/Logo.webp" alt="" width={150} height={150} />
            </Link>
          </div>
          <div>
            <LucideX onClick={handleNav} />
          </div>
        </div>
        <div className="mt-52 flex flex-col items-center gap-5">
          <span onClick={handleNav}>
            {/* @ts-ignore */}
            <Cart />
          </span>

          <span onClick={handleNav}>
            <Menu />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
