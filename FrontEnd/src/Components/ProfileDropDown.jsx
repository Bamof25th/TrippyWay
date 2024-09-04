import { useState } from "react";
import { BiFile, BiHeart,  BiLogOut, BiNotification } from "react-icons/bi";

const ProfileDropDown = ({show ,setShow}) => {

  return (
    <>
      <div className="hs-dropdown relative inline-flex">
        <button
          type="button"
          className="  ps-1 scale-95 hover:scale-100 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => setShow(!show)}
        >
          <img
            className="w-8 h-auto rounded-full"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Avatar"
          />
        </button>
        {show ? (
          <>
              <div
                className="rounded-xl shadow-lg bg-white absolute top-full w-44 mt-2 z-10 right-1"
              >
                <ul className="py-2">
                  <li>
                    <a
                      className="flex items-center gap-3 px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                    >
                      <BiFile />
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-3  px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                     
                    >
                      <BiNotification />
                      Notifications
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-3 px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                      href="javascript:;"
                    >
                      <BiHeart />
                      Likes
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-3 px-6 py-2 hover:bg-gray-100 text-red-500 font-medium"
                      href="javascript:;"
                    >
                     <BiLogOut/>
                      Log Out
                    </a>
                  </li>
                </ul>
              </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default ProfileDropDown;
