import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useRouter } from "next/router";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import AddTraveller from "@/Components/AddTraveller";
import { useSelector, useDispatch } from "react-redux";
import { toggleLogin, loginUser, logoutUser } from "@/store/slices";
import { toast } from "react-toastify";
//import ReactConfetti from "react-confetti"
//import Confetti from "confetti";
const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userData = useSelector((state) => state.auth.userData);

  const [openAddTraveller, setOpenAddTraveller] = useState(false);
  const [noOfTravelller, setNoOfTraveller] = useState(1);
  const [travelller, settraveller] = useState(1);
  //const [promos, setPromos] = useState({});
  //const [showConfetti ,setShowConfetti]=useState([])
  // const [pkg, setPkg] = useState([])

  const toastOptions = {
    position: "top-right",
    autoClose: 1000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const promoCode = "XYZ123";

  // const pkg = [
  //   {
  //     id: "1",
  //     imageUrl: ["../../slide1.jpg", "../../slide2.jpg", "../../slide3.jpg"], // Replace with your image path
  //     title: "Soothing Kumarakom, Munnar, Alleppey Honeymoon Package",
  //     duration: "7 Days & 6 Nights",
  //     shortDescription:
  //       "Explore the serene beauty of Kumarakom with this honeymoon package. Includes stay, meals, and sightseeing.",
  //     //price: "₹22,900",
  //     originalPrice: "₹26,024",
  //     price: 26024,
  //     discount: 12, // in percentage
  //     cities: ["Kochi", "Munnar", "Thekkady", "Kumarakom", "Alleppey"],
  //     adult: 2,
  //     children: 0,
  //     type: "honeymoon",
  //   },
  //   {
  //     id: "2",
  //     imageUrl: ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg"], // Replace with your image path
  //     title: "Soothing Kumarakom, Munnar, Alleppey family Package",
  //     duration: "7 Days & 6 Nights",
  //     shortDescription:
  //       "Explore the serene beauty of Kumarakom with this  package. Includes stay, meals, and sightseeing.",
  //     //price: "₹22,900",
  //     originalPrice: "₹26,024",
  //     price: 26024,
  //     discount: 12, // in percentage
  //     hotelRatings: ["3 Star", "4 Star", "5 Star"],
  //     cities: ["Kochi", "Munnar", "Thekkady", "Kumarakom", "Alleppey"],
  //     type: "family",
  //     adult: 2,
  //     children: 1,
  //   },
  //   {
  //     id: "3",
  //     imageUrl: ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg"], // Replace with your image path
  //     title: "Soothing Kumarakom, Munnar, Alleppey family Package",
  //     duration: "7 Days & 6 Nights",
  //     shortDescription:
  //       "Explore the serene beauty of Kumarakom with this  package. Includes stay, meals, and sightseeing.",
  //     originalPrice: "₹26,024",
  //     price: 26024,
  //     discount: 12, // in percentage
  //     hotelRatings: ["3 Star", "4 Star", "5 Star"],
  //     cities: ["Kochi", "Munnar", "Thekkady", "Kumarakom", "Alleppey"],
  //     type: "group",
  //     adult: 2,
  //     children: 0,
  //   },
  // ];
  const [pack, setPackage] = useState([]);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [bill, setBill] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setShowError(false);
    }, 2000); // 10000 milliseconds = 10 seconds
  }, []);

  useEffect(()=> {
    if(isLoggedIn === false){
      router.push('/')
    }
  })

  //To maintain state of each package traveller
  // useEffect(() => {
  //   const initialNoOfTravellers = {};
  //   pack.forEach((pkg) => {
  //     initialNoOfTravellers[pkg.id] = pkg.minimumGroupSize;
  //   });
  //   settraveller(initialNoOfTravellers);
  //   console.log(travelller)
  // }, [pack]);


  const handleOpenModal = (count) => {
    setNoOfTraveller(count);
    setOpenAddTraveller(!openAddTraveller);
  };
  const fetchPackage = async (id) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/packages/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      // console.log(data.package)
      // setPack(data.package)
      // const price = data.package.price
      // const discount = data.package.discount
      // setTotalPrice(totalPrice+ (Math.floor(price - (price * (discount) / 100))))
      return data.package;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPackages = async () => {
    const packages = await Promise.all(
      userData.cart.map((pkgId) => {
        return fetchPackage(pkgId);
      })
    );
    setPackage(packages);
  };

  useEffect(() => {
    fetchPackages();
    // console.log(pkg)
  }, []);

  const handleIncrementTraveller = (id) => {
    // console.log(pack);

    pack.map((packageItem) => {
      console.log(packageItem);
      if (packageItem.id === id) {
        // Increment the adult property by 1 for the package with the matching id
        // return {
        //   ...packageItem,
        //   noOfTravelller: packageItem.noOfTravelller + 1,
        // };
        if (noOfTravelller >= packageItem.maximumGroupSize) {
          setShowError(true);
          setError("Traveller limit excceded !!");
        } else {
          setNoOfTraveller(noOfTravelller + 1);
        }
      }
    });
  };
  const handleDecrementTraveller = (id) => {
    pack.map((packageItem) => {
      if (packageItem.id === id) {
        if (noOfTravelller <= packageItem.minimumGroupSize) {
          setShowError(true);
          setError("The traveller cannot be less than minimum Group Size ");
        } else {
          setNoOfTraveller(noOfTravelller - 1);
        }
      }
    });
  };
  // const handleIncrementChildTraveller = (id) => {
  //   setPackage(
  //     pack.map((packageItem) => {
  //       if (packageItem.id === id) {
  //         return {
  //           ...packageItem,
  //           children: packageItem.children + 1,
  //         };
  //       }
  //       return packageItem;
  //     })
  //   );
  // };

  // const handleDecrementChildTraveller = (id) => {
  //   setPackage(
  //     pack.map((packageItem) => {
  //       if (packageItem.children == 0) {
  //         setShowError(true);
  //         setError("Value cannot be less than 0 ");
  //         return { ...packageItem };
  //       }
  //       if (packageItem.id === id) {
  //         // Increment the adult property by 1 for the package with the matching id
  //         return {
  //           ...packageItem,
  //           children: packageItem.children - 1,
  //         };
  //       }
  //       return packageItem;
  //     })
  //   );
  // };

  const updateUserProfile = async (pkgId) => {
    // setIsLoading(true)

    try {
      const url = new URL(
        `${process.env.NEXT_PUBLIC_HOST}/api/users/${userData.userId}`
      );
      const params = { fields: "cart" }; // Define fields you want to fetch
      url.search = new URLSearchParams(params).toString();

      await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        res = await res.json();

        const updatedCart = res.user.cart.filter((_id) => _id !== pkgId);
        // console.log(updatedCart);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/users/${userData.userId}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cart: updatedCart }),
          }
        );
        if (!response.ok) throw new Error("Failed to update profile");
        toast.success("Package removed from cart successfully", toastOptions);

        const updatedData = {
          userId: userData.userId,
          token: userData.token,
          cart: updatedCart,
          bookings: userData.bookings
        };
        dispatch(loginUser(updatedData));
      });
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to remove package in cart", toastOptions);
    }
  };

  const handleRemovePackage = (id) => {
    setPackage((prevPackages) =>
      prevPackages.filter((pack) => pack._id !== id)
    );
    updateUserProfile(id);
  };

  useEffect(() => {
    // Calculate the bill for each package
    const updatedBill = pack.map((packageItem) => {
      //const discountedPrice = (packageItem.price*0.5) - (packageItem.price*0.5 * packageItem.discount) / 100;

      const bill = packageItem.price ;
      // packageItem.price * 0.5 * packageItem.adult +
      // packageItem.price * 0.5 * 0.5 * packageItem.children;

      const discountedBill = Math.floor(
        bill - (bill * packageItem.discount) / 100
      );
      const taxedBill = discountedBill + (discountedBill * 18) / 100;
      return {
        title: packageItem.title,
        discount: packageItem.discount,
        id: packageItem._id,
        originalPrice: bill,
        discountedPrice: discountedBill,
        taxedPrice: taxedBill,
      };
    });
    const totalBillSum = updatedBill.reduce(
      (acc, curr) => acc + curr.taxedPrice,
      0
    );
    // Update the bill state
    setBill(updatedBill);
    setTotalPrice(totalBillSum.toFixed(2));
  }, [pack]);

  const handleCheckout = async (id) => {
    const packageDetails = await fetchPackage(id);
    console.log("Details", packageDetails);
    localStorage.setItem("currentBookingName", packageDetails.title);
    localStorage.setItem("noOfTraveller", noOfTravelller);
    localStorage.setItem("originalPrice",packageDetails.price)
    localStorage.setItem("discount",packageDetails.discount)

    console.log(localStorage.getItem("noOfTraveller"));
    router.push(`/checkout/${id}`);
  };

  // const handlePromo=(id)=>{
  //  // const packageId=id
  //    promos[id]==promoCode;
  //    setShowConfetti({...showConfetti,[id]:true})
  // }
  // console.log(promos)
  // console.log(showConfetti)
  return (
    <div className="p-4 md:px-40 sm:px-5">
      {/* Proceed to checkout section*/}
      <div className="flex flex-row justify-between h-20 bg-white border-2 rounded-xl shadow-md overflow-hidden">
        <div className="text-2xl m-3 p-2">Package Cart</div>
        {/* <button onClick={handleCheckout} className="bg-deep-purple hover:bg-opacity-75 transition-colors duration-300 h-10 m-3 text-white font-bold py-2 px-4 rounded-l">
          Proceed To Checkout
        </button> */}
      </div>
      <div className="flex md:flex-row sm:flex-col gap-1 justify-center ">
        {/* package add to cart */}
        <div className="w-4/6 m-2 p-1">
       {pack.length>0 && <>{pack.map((pkg, index) => (
            <div key={index} className="w-full flex md:flex-col sm:flex-col xs:flex-col lg:flex-row mx-auto bg-white border-2 rounded-xl shadow-md overflow-hidden my-4  md:p-4 gap-6">
              {/*<div className="flex md:flex-row  p-4 gap-6"> */}

              <div className="md:flex-shrink-0 w-80 h-60 overflow-hidden">
                <Swiper
                  modules={[Navigation]}
                  navigation={true}
                  slidesPerView={1}
                  loop={true}
                  className="h-60 relative" // Ensure the Swiper itself has a fixed height
                >
                  {pkg.images.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        {" "}
                        {/* Added bg-gray-200 as a placeholder background */}
                        <img
                          src={slide}
                          alt={`Slide ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="">
                <div className="uppercase tracking-wide text-lg text-dark-cyan font-semibold">
                  {pkg.title}
                </div>
                <p className="block mt-1 text-sm leading-tight font-medium text-black ">
                  {pkg.duration} days
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  {pkg.description.substring(0, 100)}...
                </p>
                <div className="flex mt-4 flex-col gap-1">
                  <div className="text-teal-600 text-sm">
                    {pkg.discount}% Off
                  </div>
                  <div className="items-center font-sans md:text-2xl font-bold">
                    <span>&#8377;</span>
                    {Math.floor(pkg.price - (pkg.price * pkg.discount) / 100)}
                    <sup className="text-red-600 text-bold">*</sup>
                    <div className="ml-4 relative inline-block">
                      <span className="relative z-10 text-deep-purple text-[18px]">
                        {pkg.price}
                      </span>
                      <div className="absolute w-full h-0.5 bg-deep-purple top-1/2 transform -translate-y-1/2"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-gray-700 font-semibold">Destinations:</h3>
                  <p className="text-gray-700">
                    {pkg.destinations.join(" ➜ ")}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex md:flex-row sm:flex-col mt-4">
                  <button
                    onClick={() => {
                      handleRemovePackage(pkg._id);
                    }}
                    title="Click to remove this package from cart"
                    className="bg-deep-purple hover:bg-opacity-75 transition-colors duration-300 text-white font-bold py-2 px-4 rounded-l"
                  >
                    REMOVE
                  </button>

                  {/* {pkg.type != "honeymoon" && ( */}
                  <>
                    <button
                      title="Click to customize the number of traveller"
                      className="bg-dark-cyan hover:bg-opacity-75 transition-colors duration-300 text-white font-bold py-2 px-4 "
                      onClick={() => {
                        handleOpenModal(pkg.minimumGroupSize);
                      }}
                    >
                      CUSTOMIZE
                    </button>
                    <button
                      onClick={() => handleCheckout(pkg._id)}
                      title="proceed to checkout"
                      className=" bg-deep-purple hover:bg-opacity-75 transition-colors duration-300 text-white font-bold py-2 px-4 rounded-r"
                    >
                      PROCEED TO CHECKOUT
                    </button>
                    {openAddTraveller && (
                      <div className="fixed inset-0 bg-black bg-opacity-5 flex justify-center items-center">
                        <AddTraveller
                          handleIncrementTraveller={handleIncrementTraveller}
                          handleDecrementTraveller={handleDecrementTraveller}
                          setShowError={setShowError}
                          setOpenAddTraveller={setOpenAddTraveller}
                          setNoOfTraveller={setNoOfTraveller}
                          noOfTravelller={noOfTravelller}
                          id={pkg.id}
                          error={error}
                          showError={showError}
                        />
                      </div>
                    )}
                  </>
                  {/* )} */}
                </div>
              </div>
              {/*</div>*/}
            </div>
          ))}</>
          
        }{pack.length===0 && <div><img src="../../emptycart.png" width={1000} height={1000}></img></div>} </div>
        
        {/*price details */}
        <div className="w-2/6 mt-5 mb-5 p-4  bg-white border-2 rounded-xl shadow-md overflow-hidden">
          {/* Total price */}
          <div className="flex flex-row m-2 gap-x-1 justify-center">
            <div className="text-3xl font-bold mb-4">Total Price</div>
            <div className="text-4xl font-bold text-dark-cyan mb-6">
              &#8377; {totalPrice}
            </div>
          </div>

          {/* Bill items */}
          <div className="grid grid-cols-1 gap-6 p-3">
            {bill.map((item) => (
              <div key={item.id} className="border-b-2 border-gray-200 pb-4">
                <div className="text-lg font-semibold mb-2">{item.title}</div>
                {/* Promo code section */}
                <div className="flex flex-row m-2 p-1">
                  <input
                    type="text"
                    id="promo"
                    name="promo"
                    placeholder="Promo code"
                    className="bg-gray-100 border-none p-2 rounded-l "
                  />
                  {/*  value={promos[item.id] || ''}
                onChange={(e) =>
                  setPromos({ ...promos, [item.id]: e.target.value })
                } */}
                  <button
                    title="Click to apply promo"
                    className=" bg-dark-cyan w-full hover:bg-opacity-75 transition-colors duration-300 text-white font-bold py-2 px-4 rounded-r"
                  >
                    Apply
                  </button>
                  {/* <input type="text" placeholder="Promo Code eg:ASDB34" value={0}> </input> */}
                </div>

                <div className="flex flex-row justify-between mb-2 mr-2">
                  <div className="text-sm">Original Price:</div>
                  <div className="text-sm">&#8377; {item.originalPrice}</div>
                </div>
                <div className="flex flex-row justify-between mb-2 mr-2">
                  <div className="text-sm">Discount:</div>
                  <div className="text-sm">{item.discount}%</div>
                </div>
                <div className="flex flex-row justify-between mb-2 mr-2">
                  <div className="text-sm">Discounted Price:</div>
                  <div className="text-sm">&#8377; {item.discountedPrice}</div>
                </div>
                <div className="flex flex-row justify-between mb-2 mr-2">
                  <div className="text-sm">Taxes & GST :</div>
                  <div className="text-sm">18%</div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="text-lg font-bold">Total Price:</div>
                  <div className="text-lg font-bold">
                    &#8377; {item.taxedPrice}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
