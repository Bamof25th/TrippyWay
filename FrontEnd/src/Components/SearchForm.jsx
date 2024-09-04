import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const SearchForm = () => {
  // const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [month, setMonth] = useState("");
  const [cities, setCities] = useState([]);

  const router = useRouter();
  // Simulated list of cities for the dropdown.
  // In a real application, you might fetch this from an API.
  const fetchAllDestinations = async () => {
    try {
      // const queryParams = new URLSearchParams(filter).toString();
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/packages/destinations`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  useEffect(() => {
    fetchAllDestinations();
  }, []);

  const handleDestinationChange = (event) => {
    const input = event.target.value;
    setDestination(input);

    if (input) {
      const matchedCities = cities.filter((city) =>
        city.toLowerCase().startsWith(input.toLowerCase())
      );
      setFilteredCities(matchedCities);
      setIsDropdownVisible(true);
    } else {
      setFilteredCities([]);
      setIsDropdownVisible(false);
    }
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleSearchPackage = () => {
    const stateData = {
      destination: destination,
      month: month,
      duration: duration,
    };
    const queryParams = new URLSearchParams(stateData).toString();
    router.push(`/holidays?${queryParams}`);
  };
  return (
    <div>
      <div className="absolute translate-y-9 bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl p-4 bg-white rounded-lg shadow-lg">
        <div className="grid  grid-cols-2 sm:grid-cols-5 gap-2 ">
          <div className="flex flex-col ">
            <label className="opacity-70 text-sm font-medium " for="landmark">
              Where
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm z-10 overflow-x-scroll no-scrollbar "
              placeholder="Where to?"
              value={destination}
              onChange={handleDestinationChange}
            />
            {isDropdownVisible && (
              <div className="absolute  left-28 -translate-x-1/2  top-full bg-white border border-t-0 rounded-b-md shadow-lg max-h-60 overflow-auto z-10 sc">
                {filteredCities.map((city) => (
                  <div
                    key={city}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setDestination(city);
                      setIsDropdownVisible(false);
                    }}
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label className="opacity-70 text-sm font-medium" for="checkin">
              Duration
            </label>
            <div className="relative max-w-sm">
              <select
                onChange={(e) => setDuration(e.target.value)}
                name="duration"
                id="duration"
                className="flex h-10 w-[100%] rounded-md border border-input"
                aria-placeholder=""
              >
                <option key="blankKey" hidden value>
                  Select duration
                </option>
                <option value="2-3">2 to 3 days</option>
                <option value="4-5">4 to 5 days</option>
                <option value="6-7">6 to 7 days</option>
                <option value="7+">7+ days</option>
                {/* <option value="ND">Not Decided</option> */}
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="opacity-70 text-sm font-medium " for="checkout">
              Select Month
            </label>
            <select
              value={month}
              onChange={handleMonthChange}
              className="flex h-10 w-[100%] rounded-md border border-input"
            >
              <option key="blankKey" hidden value>
                Select Month
              </option>
              {months.map((monthName) => (
                <option key={monthName} value={monthName}>
                  {monthName}
                </option>
              ))}
              {/* <option value="ND">Not Decided</option> */}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="opacity-70 text-sm font-medium " for="checkout">
              Who
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm "
              placeholder="Add guests"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <motion.button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium mt-5 h-10 px-6 py-2 text-white bg-gradient-to-r from-[#00A68B] to-[#00C389] "
              whileTap={{ scale: 0.9 }}
              onClick={handleSearchPackage}
            >
              Search
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
