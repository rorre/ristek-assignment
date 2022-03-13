import { useUser } from "components/context/UserContext";
import SubmissionForm from "components/modules/BlogPage/SubmissionForm";
import { axiosInstance, submitHandler } from "components/utils/axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CreatePage: NextPage = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    if (!user) {
      toast.error("Please log in first.");
      router.replace("/auth");
    } else {
      if (!user.is_admin) {
        toast.error("You are not an admin!");
        router.replace("/");
      }
    }
  }, [user, isLoading, router]);

  return (
    <>
      <Head>
        <title>New Post | Ren</title>
      </Head>
      <div className="bg-gray-800 min-h-screen w-full py-8 flex flex-col">
        <div className="bg-teal-800 text-white mt-6 md:mt-8 flex-grow-0 flex-shrink">
          <div className="container px-8 sm:px-16 md:px-32 lg:px-64 py-4">
            <h1 className="text-3xl font-bold font-montserrat">Create</h1>
          </div>
        </div>

        <div className="container mx-auto px-8 sm:px-16 md:px-32 lg:px-64 flex-1 py-8 text-white">
          <SubmissionForm />
        </div>
      </div>
    </>
  );
};

export default CreatePage;
