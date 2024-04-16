import React, { useState ,useEffect} from "react";
import DetailsForm from "./DetailsForm";
import Alert from "../Alert";

const TravellerForm = ({
  packageid,
  packagename,
  handleTravellerDetails,
  travellerDetails,
  adult,
  children,
}) => {

  const [detailsPerPackage, setDetailsPerPackage] = useState(travellerDetails);
  const [showError ,setShowError]=useState(false)
  const [showSuccess ,setShowSuccess]=useState(false)
  const [errorMessage ,setErrorMessage]=useState("")
  const [successMessage ,setSuccessMessage]=useState("")
  const handleAddDetailsPerPackage = (singleFormDetails) => {
    setDetailsPerPackage(prevDetailsPerPackage => {
        // Check if the object with the same index already exists
        const existingIndex = prevDetailsPerPackage.findIndex(detail => detail.index === singleFormDetails.index);
        
        if (existingIndex !== -1) {
            // If exists, update the object
            return prevDetailsPerPackage.map((detail, index) => {
                if (index === existingIndex) {
                    return { ...detail, ...singleFormDetails };  // Merging the old details with new
                }
                return detail;
            });
        } else {
            // If not exists, add the new object to the array
            return [...prevDetailsPerPackage, singleFormDetails];
        }
    });
};

  const handleSubmitPerPackage=()=>{
    if(detailsPerPackage.length === adult+children){
        handleTravellerDetails(detailsPerPackage, packageid);
        setShowSuccess(true);
        setSuccessMessage("All Traveller details of this Package are Added !!!")
    }
    else{
        setShowError(true);
        setErrorMessage("Please fill the details of all the traveller !")
    }
    
  }
  useEffect(() => {
    setTimeout(() => {
        setShowError(false);
        setShowSuccess(false)
    }, 5000); // 10000 milliseconds = 10 seconds
  }, [showError,showSuccess]);
 // console.log(detailsPerPackage)
  return (
    <section className=" flex justify-center items-center">
      {/* Adult details*/}
      <div className="">
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
          {[...Array(adult+children)].map((_, index) => (
            <DetailsForm
              handleAddDetailsPerPackage={handleAddDetailsPerPackage}
              index={index}
              detailsPerPackage={detailsPerPackage}
            />
          ))}
        </div>

        {/* <div className="grid md:grid-cols-2 sm:grid-cols-1">
          {[...Array(children)].map((_, index) => (
            <DetailsForm
              handleAddDetailsPerPackage={handleAddDetailsPerPackage}
              index={index}
              detailsPerPackage={detailsPerPackage}
            />
          ))}
        </div> */}
        <button  className="bg-deep-purple w-60 hover:bg-opacity-75 transition-colors duration-300 h-10 m-3 text-white font-bold py-2 px-4 rounded-l"onClick={handleSubmitPerPackage}>Submit</button>
        {showSuccess && (<Alert message={successMessage} type="success"/>)}
        {showError && (<Alert message={errorMessage} type="error"/>)}
      </div>
    </section>
  );
};

export default TravellerForm;
