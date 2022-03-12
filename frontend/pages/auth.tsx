import React from "react";
import type { NextPage } from "next";
import LoginBox from "components/modules/LoginPage/LoginBox";
import RegisterBox from "components/modules/LoginPage/RegisterBox";

const AuthPage: NextPage = () => {
  return (
    <div className="w-full min-h-screen bg-teal-800">
      <div className="flex md:flex-row flex-col min-h-screen justify-center md:justify-between md:items-center  space-y-4 md:space-y-0 md:space-x-8 px-8">
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
