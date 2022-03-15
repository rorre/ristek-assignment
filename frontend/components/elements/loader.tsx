import { useUser } from "components/context/UserContext";
import { useState, useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// This object exists just to aid react rendering stuff
const Loader: React.FC = ({ children }) => {
  const { isLoading } = useUser();
  const [isGone, setGone] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setGone(true), 1200);
    }
  }, [isLoading]);

  return (
    <>
      <div
        className={
          "w-screen h-screen bg-teal-800 z-50 fixed top-0 left-0  " +
          "flex flex-col items-center justify-center transition-opacity duration-300 " +
          (isLoading ? "opacity-100 " : "opacity-0 ") +
          (isGone && "hidden")
        }
      >
        <AiOutlineLoading3Quarters className="w-12 h-12 stroke-2 animate-spin text-white" />
      </div>
      <div
        className={"z-0 " + (isLoading && "w-screen h-screen overflow-hidden")}
      >
        {children}
      </div>
    </>
  );
};

export default Loader;
