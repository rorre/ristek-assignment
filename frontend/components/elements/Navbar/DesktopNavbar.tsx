import React from "react";
import { Button } from "@elements";
import Link from "next/link";
import { useUser } from "components/context/UserContext";

const DesktopNavbar = () => {
  const { user, logout } = useUser();

  return (
    <div className="max-w-screen mx-auto px-4 lg:px-8 xl:px-16 py-4 flex flex-row items-center justify-between font-bold text-white bg-teal-800">
      <Link href="/">
        <a className="text-xl font-montserrat">Ren</a>
      </Link>

      <div className="flex flex-row space-x-4 justify-end items-center">
        <Link href="/">
          <a className=" hover:text-primer hover:cursor-pointer">Home</a>
        </Link>
        <Link href="/blog">
          <a className=" hover:text-primer hover:cursor-pointer">Blog</a>
        </Link>

        {user ? (
          <>
            <span>|</span>
            <span>Hello, {user.name.split(" ")[0]}</span>

            {user.is_admin && (
              <Link href="/blog/create">
                <a className=" hover:text-primer hover:cursor-pointer">
                  Create New Post
                </a>
              </Link>
            )}
            <Button onClick={logout} className="font-bold">
              Logout
            </Button>
          </>
        ) : (
          <Link passHref href="/auth">
            <Button className="font-bold">Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default DesktopNavbar;
