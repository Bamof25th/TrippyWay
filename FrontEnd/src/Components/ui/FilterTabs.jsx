import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsFilterSquare } from "react-icons/bs";

export const FilterTabs = ({ data }) => {
  const tabsRef = useRef([]);
  const [activeTabIndex, setActiveTabIndex] = useState(null);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  return (
    <div className="flew-row  relative mx-auto flex h-12  text-black px-2 backdrop-blur-sm">
      {data.map((data, index) => {
        const isActive = activeTabIndex === index;

        return (
          <button
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`${
              isActive ? `` : `hover:text-emerald-500 hover:`
            } my-auto cursor-pointer flex  flex-col justify-center items-center select-none rounded-full px-5 text-center font-light `}
            onClick={() => {
              setActiveTabIndex(index);
            }}
          >
            <Image src={data.path} width={52} height={300} className="" />
            <span className="border-black hover:border-b-2">{data.title}</span>
          </button>
        );
      })}
      <span
        className="absolute  -bottom-9 -top-3 -z-10 flex overflow-hidden transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full border-b-2 border-black" />
      </span>
    </div>
  );
};
