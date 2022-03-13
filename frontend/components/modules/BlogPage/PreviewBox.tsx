import Link from "next/link";
import React from "react";
import { PostDetail } from "./interface";

const PreviewBox: React.FC<PostDetail> = ({ id, title, content }) => {
  return (
    <div className="bg-gray-200 rounded flex flex-col space-y-4 p-4">
      <Link href={"/blog/" + id}>
        <a>
          <h2 className="font-sans text-xl font-bold hover:cursor-pointer hover:underline hover:text-blue-800">
            {title}
          </h2>
        </a>
      </Link>
      <hr className="border border-gray-500 w-full" />

      <p className="font-assistant break-words">{content.split("\n")[0]}</p>
    </div>
  );
};

export default PreviewBox;
