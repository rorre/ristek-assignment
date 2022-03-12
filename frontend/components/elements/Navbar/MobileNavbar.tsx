import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import { Button } from "@elements";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import { useUser } from "components/context/UserContext";

const MobileNavbar = () => {
  const { user, logout } = useUser();

  return (
    <Disclosure as="nav" className="bg-teal-800 text-white p-4 font-bold">
      <div className="flex flex-row justify-between">
        <div className="text-xl font-montserrat">Ren</div>
        <Disclosure.Button className="h-6">
          <IoMenu />
        </Disclosure.Button>
      </div>

      <Transition
        enter="transition-all duration-100 ease-out"
        enterFrom="opacity-0 -translate-y-16"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all duration-75 ease-out"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-16"
      >
        <Disclosure.Panel className="flex flex-col space-y-4 mt-4">
          <Link href="/">
            <a className=" hover:text-primer hover:cursor-pointer">Home</a>
          </Link>
          <Link href="/blog">
            <a className=" hover:text-primer hover:cursor-pointer">Blog</a>
          </Link>

          {user ? (
            <Button onClick={logout}>Logout</Button>
          ) : (
            <Link passHref href="/auth">
              <Button>Login</Button>
            </Link>
          )}
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
};

export default MobileNavbar;
