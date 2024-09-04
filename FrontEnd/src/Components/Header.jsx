import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleLogin,
  loginUser,
  logoutUser,
  toggleSignup,
} from "@/store/slices";
import { CgProfile } from "react-icons/cg";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Login from "@/Components/login";
import Signup from "@/Components/signup";
import Image from "next/image";
import ProfileDropDown from "./ProfileDropDown";
import Link from "next/link";

//

// export default Header;
function Header() {
  const router = useRouter();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const showSignup = useSelector((state) => state.modalVisibility.signup);
  const showLogin = useSelector((state) => state.modalVisibility.login);
  const userData = useSelector((state) => state.auth.userData);
  const [isShowMenu, setIsShowMenu] = useState(false);

  // useEffect(() => {
  //   console.log(userData)
  // alert(isLoggedIn);
  // }, [isShowMenu]);

  const goToProfilePage = (path) => {
    router.push(path); // Replace '/profile' with the actual route to the profile page
  };

  return (
    <>
      {/* show login signup pages */}
      {showLogin === true && (
        <div className="flex justify-center items-center w-full fixed z-30 transition-all duration-1000 bg-black bg-opacity-50 h-screen">
          <Login />
        </div>
      )}
      {showSignup === true && (
        <div className="flex justify-center items-center w-full fixed z-30 transition-all duration-1000 bg-black bg-opacity-50 h-screen">
          <Signup />
        </div>
      )}
      <header className="flex items-center justify-between h-auto px-4 md:px-6 bg-white shadow">
        <a className="flex items-center" onClick={() => router.push("/")}>
          <Image
            src="/TrippyWay.svg"
            alt="Logo"
            width={180}
            height={40}
            className="object-cover"
          />
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-md cursor-pointer">
          <a
            className="text-slate-700 hover:text-emerald-400 font-semibold"
            onClick={() => router.push("/")}
          >
            Home
          </a>
          <a
            className="text-slate-700 hover:text-emerald-400 font-semibold"
            onClick={() => router.push("/Holidays")}
          >
            Destinations
          </a>
          <a
            className="text-slate-700 hover:text-emerald-400 font-semibold "
            onClick={() => router.push("/blogs/0")}
          >
            Blogs
          </a>
          <a
            className="text-slate-700 hover:text-emerald-400 font-semibold"
            onClick={() => router.push("/offers")}
          >
            Offers
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="flex text-white items-center space-x-6">
              {/* profile dropdown  */}

              <ProfileDropDown show={isShowMenu} setShow={setIsShowMenu} />

              {/* Cart  */}
              <Link className="relative py-1 mb-4" href={"/Cart"}>
                <div className="t-0 absolute left-3 ">
                  {userData && userData.cart ? (
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                      {userData.cart.length}
                    </p>
                  ) : null}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="black"
                  className="file: mt-4 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </Link>
            </div>
          ) : (
            <>
              <button
                className="inline-flex items-center justify-center text-white whitespace-nowrap rounded-md bg-emerald-900 hover:bg-emerald-800 text-sm font-medium h-10 px-4 py-2 transition"
                onClick={() => dispatch(toggleSignup())}
              >
                Register
              </button>
              <button
                className="inline-flex items-center justify-center text-black whitespace-nowrap rounded-md bg-slate-100 text-sm font-medium h-10 px-4 py-2 transition"
                onClick={() => dispatch(toggleLogin())}
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </svg>
  );
};
