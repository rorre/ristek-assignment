import axios from "axios";
import { CommentSection } from "components/modules/BlogPage/Comments";
import Post from "components/modules/BlogPage/Post";
import StateMessage from "components/modules/BlogPage/StateMessage";
import { axiosInstance } from "components/utils/axios";
import { DateTime } from "luxon";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ErrorResponse, PostResponse } from "types/responses";

const PostPage: NextPage = () => {
  const router = useRouter();
  const { postId } = router.query;

  const [postData, setPostData] = useState<PostResponse>({} as PostResponse);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function f() {
      try {
        let response = await axiosInstance.get<PostResponse>("/blog/" + postId);
        setPostData(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          const response: ErrorResponse = err.response?.data;
          if (typeof response.detail === "string") {
            setError(response.detail);
          } else {
            setError("Invalid request.");
          }
        } else {
          setError("An error has occured.");
        }
      } finally {
        setLoading(false);
      }
    }

    if (postId) f();
  }, [postId]);

  return (
    <>
      <Head>
        <title>
          {isLoading ? "Loading..." : postData ? postData.title : error} | Ren
        </title>
      </Head>
      <div className="bg-gray-800 min-h-screen w-full py-8 flex flex-col">
        <div className="bg-teal-800 text-white mt-6 md:mt-8 flex-grow-0 flex-shrink">
          <div className="container px-8 sm:px-16 md:px-32 lg:px-64 py-4">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold font-montserrat">
                {isLoading ? "Loading..." : postData ? postData.title : error}
              </h1>
              {!isLoading && postData ? (
                <span>
                  Posted on {DateTime.fromISO(postData.created).toISODate()}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-8 sm:px-16 md:px-32 lg:px-64 flex-1 py-8 text-white">
          <StateMessage isLoading={isLoading} error={error} showEmpty={false} />
          {postData && (
            <>
              {postData.content && <Post content={postData.content} />}
              <hr className="border border-gray-500 w-full my-4" />
              <h3 className="font-sans font-bold text-lg">Comments</h3>
              {postData.id && <CommentSection postId={postData.id} />}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PostPage;
