import Markdown from "markdown-to-jsx";
import React from "react";
import styles from "./Post.module.css";

const TableWrapper: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  >
> = ({ children, ...props }) => (
  <div className="overflow-x-auto">
    <table {...props}>{children}</table>
  </div>
);

const mdOverrides = {
  table: {
    component: TableWrapper,
  },
};

interface PostProps {
  content: string;
}

const Post: React.FC<PostProps> = ({ content }) => {
  return (
    <div className="break-words">
      <Markdown
        className={styles.postContent}
        options={{
          overrides: mdOverrides,
        }}
      >
        {content}
      </Markdown>
    </div>
  );
};

export default Post;
