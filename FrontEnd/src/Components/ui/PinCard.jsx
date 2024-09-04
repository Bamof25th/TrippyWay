import React, { useState } from "react";

import Link from "next/link";

const Pin = ({ post }) => {
  const [postHovered, setPostHovered] = useState(false);

  const image =
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80";
  return (
    <div className="m-2  hover:scale-95 transition-all duration-700 ease-in-out">
      <div
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        className=" relative cursor-pointer w-auto rounded-lg overflow-hidden "
      >
        <img className="rounded-lg w-full " src={post.cover_image} alt="user-post" />
        {postHovered && (
          <div
            className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50"
            style={{ height: "100%" }}
          >
            <div className=" flex p-3 flex-col gap-2 ">
              <p className="text-xl font-semibold text-white line-clamp-2">
                {post.title}
              </p>
            </div>
            <div className=" flex justify-between items-center gap-2 w-full">
              {post.description ? (
                <>
                  <div className=" flex p-3 flex-col gap-2 ">
                    <span className="italic text-sm font-medium text-white">
                      {post.description.slice(0, 100) + "..."}
                    </span>
                  </div>
                </>
              ) : undefined}
            </div>
          </div>
        )}
      </div>
      <Link href={`/`} className="flex gap-2 mt-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <img
            className="w-8 h-8 rounded-full object-cover"
            src={image}
            alt="user-profile"
          />
          <span className="font-extralight text-md ">{post.credit}</span>
        </div>
        <div className="flex gap-3">
          <span className="font-extralight text-md text-red-500">#tags</span>
        </div>
        <span className="font-extralight text-md">{"24 Jan 2024"}</span>
      </Link>
    </div>
  );
};

export default Pin;
