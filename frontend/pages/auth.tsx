import React from "react";
import type { NextPage } from "next";
import LoginBox from "components/modules/LoginPage/LoginBox";
import RegisterBox from "components/modules/LoginPage/RegisterBox";
import { useUser } from "components/context/UserContext";
import { useRouter } from "next/router";

const AuthPage: NextPage = () => {
  const router = useRouter();
  const { user } = useUser();

  if (user) {
    router.push("/");
  }

  return (
    <div className="w-full min-h-screen bg-teal-800">
      <div className="flex md:flex-row flex-col min-h-screen md:justify-between md:items-center  space-y-4 md:space-y-0 md:space-x-8 px-8">
        <div className="md:basis-1/2">
          <LoginBox />
        </div>

        <div className="md:basis-1/2">
          <RegisterBox />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
