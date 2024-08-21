import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { toggleLogin, loginUser, logoutUser } from "@/store/slices";
import { CgProfile } from "react-icons/cg";
import { BsCart } from "react-icons/bs";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Login from "@/Components/login";
import Signup from "@/Components/signup";
import Image from "next/image";

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
      <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-white shadow">
        <a className="flex items-center" onClick={() => router.push("/")}>
          <Image
            src="/logo4.png"
            alt="Logo"
            width={180}
            height={40}
            className="object-cover"
          />
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-md cursor-pointer">
          <a
            className="text-slate-700 hover:underline"
            onClick={() => router.push("/")}
          >
            Home
          </a>
          <a
            className="text-slate-700 hover:underline"
            onClick={() => router.push("/Holidays")}
          >
            Destinations
          </a>
          <a
            className="text-slate-700 hover:underline "
            onClick={() => router.push("/blogs/0")}
          >
            Blogs
          </a>
          <a
            className="text-slate-700 hover:underline"
            onClick={() => router.push("/offers")}
          >
            Offers
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:flex">
            <SearchIcon />
            <input
              className="flex h-10 w-full bg-background px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  pl-8 pr-4 py-2 rounded-md border border-muted focus:ring-1 "
              placeholder="Search destinations"
              type="search"
            />
          </div>
          {isLoggedIn ? (
            <div className="flex text-white items-center space-x-6">
              {/* <a href="#" className="flex items-center justify-center space-x-2 bg-dark-cyan hover:bg-button-color-hover bg-gradient-to-bl from-dark-cyan to-deep-purple  text-white transition-colors py-2 px-4 rounded-full">TourAI</a> */}
              <div className="relative z-1">
                <button
                  onClick={() => setIsShowMenu(!isShowMenu)}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-bl from-deep-purple to-dark-cyan text-white bg-dark-cyan hover:bg-button-color-hover transition-colors py-2 px-4 rounded-full"
                >
                  <CgProfile size={24} />
                  <span>Profile</span>
                </button>
                <ul
                  className={`absolute bg-button-color flex flex-col gap-2 top-12 right-0 rounded-md transition-all duration-600 overflow-hidden ${
                    isShowMenu === true ? "w-36 p-6 h-36" : "w-0 p-0 h-0"
                  }`}
                >
                  <li
                    onClick={() =>
                      goToProfilePage(`/profile/${userData.userId}`)
                    }
                    className="text-sm w-full cursor-pointer text-white hover:text-opacity-75 transition-all duration-600"
                  >
                    View Profile
                  </li>
                  <li className="text-sm w-full cursor-pointer text-white hover:text-opacity-75 transition-all duration-600">
                    E-wallet
                  </li>
                  <li
                    className="text-sm e-full cursor-pointer text-white hover:text-opacity-75 transition-all duration-600"
                    onClick={() => {
                      dispatch(logoutUser());
                      // window.location.reload()
                    }}
                  >
                    Logout
                  </li>
                </ul>
              </div>
              {/* <BsCart size={30} className='text-deep-purple'/> */}

              <div
                onClick={() => router.push("/Cart")}
                className="relative cursor-pointer"
              >
                <PiShoppingCartSimpleFill size={40} color={"black"} />
                <span className="absolute top-2.5 text-deep-purple text-white right-3.5 text-sm">
                  {userData && userData.cart ? userData.cart.length : 0}
                  {/*userData.cart.length*/}
                </span>
              </div>
            </div>
          ) : (
            <>
              <button
                className="inline-flex items-center justify-center text-white whitespace-nowrap rounded-md bg-emerald-900 hover:bg-emerald-800 text-sm font-medium h-10 px-4 py-2 transition"
                onClick={() => dispatch(toggleLogin())}
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
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </svg>
  );
};
