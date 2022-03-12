import axios, { AxiosError } from "axios";
import { axiosInstance } from "components/utils/axios";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import {
  AiOutlineLoading3Quarters,
  AiOutlineQuestion,
  AiOutlineWarning,
} from "react-icons/ai";
import { ErrorResponse, PostResponse } from "types/responses";

const BlogPage: NextPage = () => {
  const [posts, setPosts] = useState<PostResponse[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function f() {
      try {
        let response = await axiosInstance.get<PostResponse[]>("/blog/list");
        if (response.status == 200) {
          setPosts(response.data);
        }
      } catch {
        setError("An error has occured.");
      } finally {
        setLoading(false);
      }
    }
    f();
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen w-full py-8">
      <div className="flex flex-col space-y-4 items-center justify-center min-h-screen">
        {isLoading && (
          <AiOutlineLoading3Quarters className="w-12 h-12 stroke-2 animate-spin text-white" />
        )}
        {error && (
          <>
            <AiOutlineWarning className="w-12 h-12 stroke-2 text-white" />
            <span className="text-white">{error}</span>
          </>
        )}
        {!isLoading && posts.length == 0 && (
          <>
            <AiOutlineQuestion className="w-12 h-12 stroke-2 text-white" />
            <span className="text-white">Belum ada post apa-apa di sini!</span>
          </>
        )}
      </div>
      <div className="container mx-auto px-8 sm:px-16 md:px-32 lg:px-64"></div>
    </div>
  );
};

export default BlogPage;
