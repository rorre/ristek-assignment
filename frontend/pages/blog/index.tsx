import PreviewBox from "components/modules/BlogPage/PreviewBox";
import StateMessage from "components/modules/BlogPage/StateMessage";
import { axiosInstance } from "components/utils/axios";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { PostResponse } from "types/responses";

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
    <>
      <Head>
        <title>Blog | Ren</title>
      </Head>
      <div className="bg-gray-800 min-h-screen w-full py-8 flex flex-col">
        <div className="bg-teal-800 text-white mt-6 md:mt-8 flex-grow-0 flex-shrink">
          <div className="container px-8 sm:px-16 md:px-32 lg:px-64 py-4">
            <h1 className="text-3xl font-bold font-montserrat">Blog</h1>
            <span>Tech, music, osu!, or whatever that&apos;s on my mind.</span>
          </div>
        </div>

        <div className="container mx-auto px-8 sm:px-16 md:px-32 lg:px-64 flex-1 py-8">
          <StateMessage
            isLoading={isLoading}
            error={error}
            showEmpty={!isLoading && !error && posts.length == 0}
          />
          <div className="flex flex-col space-y-4">
            {posts.map((postData, i) => (
              <PreviewBox
                id={postData.id}
                title={postData.title}
                content={postData.content}
                created={postData.created}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
