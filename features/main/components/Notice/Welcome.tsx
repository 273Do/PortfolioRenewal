import React from "react";
import ReactMarkdown from "react-markdown";

const Welcome = ({
  notice_description,
}: {
  notice_description: string | null;
}) => {
  return (
    <>
      {notice_description ? (
        <div className="md p-4">
          <ReactMarkdown>{notice_description}</ReactMarkdown>
        </div>
      ) : (
        <div className="text-5xl font-medium sm:text-7xl">
          <p>Welcome</p>
          <p>to</p>
          <p>273*</p>
          <p>Portfolio</p>
        </div>
      )}
    </>
  );
};

export default Welcome;
