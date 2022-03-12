import React from "react";
import { Button } from "@elements";
import Link from "next/link";

const DesktopNavbar = () => {
  return (
    <div className="max-w-screen mx-auto px-4 lg:px-8 xl:px-16 py-4 flex flex-row items-center justify-between font-bold text-white bg-teal-800">
      <div className="text-xl font-montserrat">Ren</div>
      <div className="flex flex-row space-x-4 justify-end items-center">
        <Link href="/">
          <a className=" hover:text-primer hover:cursor-pointer">Home</a>
        </Link>
        <Link href="/blog">
          <a className=" hover:text-primer hover:cursor-pointer">Blog</a>
        </Link>
      </div>
    </div>
  );
};

export default DesktopNavbar;
