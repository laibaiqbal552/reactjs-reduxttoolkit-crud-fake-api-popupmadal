import React from "react";
import { Oval } from "react-loader-spinner";
const Spinner = () => {
  return (
    <div className="bg-gray-900  ">
      <div className="mx-auto max-w-7xl min-h-screen h-full flex items-center justify-center">
        <Oval
          height={150}
          width={150}
          color="#6366F1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#A5B4FC"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    </div>
  );
};

export default Spinner;
