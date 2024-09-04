import Link from "next/link";
import React, { useState } from "react";

const BlogCard = ({ post }) => {
  const [postHovered, setPostHovered] = useState(false);
  return (
    <>
      <Link href={`/post/${post.slug}`}>
        <div
          className="relative isolate  w-full border h-[350px] overflow-hidden rounded-lg  hover:scale-95 transition-all duration-700 ease-in-out "
          onMouseEnter={() => setPostHovered(true)}
          onMouseLeave={() => setPostHovered(false)}
        >
          <img
            src={post.cover_image}
            alt={post.credit}
            className="absolute inset-0 h-full w-full object-cover  "
          />
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
          <div class="absolute inset-0 bg-gradient-to-t top-0 from-gray-900 via-gray-900/40"></div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
