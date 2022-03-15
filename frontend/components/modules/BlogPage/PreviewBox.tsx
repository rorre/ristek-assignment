import { DateTime } from "luxon";
import Link from "next/link";
import React from "react";
import { PostDetail } from "./interface";
import Post from "./Post";

const PreviewBox: React.FC<PostDetail> = ({ id, title, content, created }) => {
  return (
    <div className="bg-gray-200 rounded flex flex-col space-y-4 p-4">
      <div>
        <Link href={"/blog/" + id}>
          <a>
            <h2 className="font-sans text-xl font-bold hover:cursor-pointer hover:underline hover:text-blue-800">
              {title}
            </h2>
          </a>
        </Link>
        <span className="text-gray-500 italic">
          Posted on {DateTime.fromISO(created).toISODate()}
        </span>
      </div>

      <hr className="border border-gray-500 w-full" />

      <Post content={content.split("\n")[0]} />
    </div>
  );
};

export default PreviewBox;
