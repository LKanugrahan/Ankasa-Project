import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }) => {
  const fixCanvas = {
    height: "1024px",
  };
  {
    return (
      <>
        <div style={fixCanvas} className="d-flex flex-row">
          <div className=" col-6 bg-primary d-flex justify-content-center align-items-center">
            <Image
              src="/plane.png"
              alt="Ankasa Logo"
              width={463}
              height={500}
              priority
            />
          </div>
          <div className="col-6 d-flex align-items-center flex-column">
            <div className="my-5 d-flex flex-row align-items-center">
              <Image
                src="/blueplane.png"
                alt="Ankasa Logo"
                width={50}
                height={34}
                className="m-2"
              />
              <h2>Ankasa</h2>
            </div>
            <div className="mt-5 pt-5 d-flex flex-column align-items-center">
              {children}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default AuthLayout;
