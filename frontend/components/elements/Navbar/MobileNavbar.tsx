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
        <Link href="/">
          <a className="text-xl font-montserrat">Ren</a>
        </Link>

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
          <Link passHref href="/">
            <Disclosure.Button
              as={"a"}
              className=" hover:text-primer hover:cursor-pointer"
            >
              Home
            </Disclosure.Button>
          </Link>
          <Link passHref href="/blog">
            <Disclosure.Button
              as={"a"}
              className=" hover:text-primer hover:cursor-pointer"
            >
              Blog
            </Disclosure.Button>
          </Link>

          {user ? (
            <>
              <hr className="border border-gray-200" />
              <span>Hello, {user.name.split(" ")[0]}</span>
              {user.is_admin && (
                <Link passHref href="/blog/create">
                  <Disclosure.Button
                    as={"a"}
                    className=" hover:text-primer hover:cursor-pointer"
                  >
                    Create New Post
                  </Disclosure.Button>
                </Link>
              )}
              <Disclosure.Button
                as={Button}
                onClick={logout}
                className="font-bold"
              >
                Logout
              </Disclosure.Button>
            </>
          ) : (
            <Link passHref href="/auth">
              <Button className="font-bold">Login</Button>
            </Link>
          )}
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
};

export default MobileNavbar;
