import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Icon from "react-feather";

const page = () => {
  const staticHeight = { height: "650px" };
  const container = { height: "550px", width: "800px" };
  const ticket = { height: "350px", width: "650px" };
  return (
    <div
      style={staticHeight}
      className="bg-primary d-flex justify-content-center align-items-center"
    >
      <div
        style={container}
        className="bg-white d-flex flex-column justify-content-center align-items-center gap-3 rounded"
      >
        <div>
          <h1>Booking Pass</h1>
          <div style={ticket} className="border col-11 rounded d-flex">
            <div className="col-8 d-flex flex-column gap-4 p-5">
              <div className="d-flex justify-content-between align-items-center">
                <Image
                  src="/garudaIndonesia.png"
                  alt="Garuda Indonesia"
                  width={100}
                  height={57}
                />
                <div className="d-flex gap-4">
                  <h5>IDN</h5>
                  <Image
                    src="/littleplane.png"
                    alt="Little Logo"
                    width={18}
                    height={18}
                  />
                  <h5>JPN</h5>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <div className="d-flex flex-column gap-2">
                    <p className="m-0">Code</p> <b>AB-221</b>
                    <p className="m-0">Terminal</p> <b>A</b>
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <p className="m-0">Class</p> <b>Economy</b>
                    <p className="m-0">Gate</p> <b>221</b>
                  </div>
                </div>
                <div className="d-flex flex-column gap-2">
                  <p className="m-0">Departure</p>{" "}
                  <b>Monday, 20 July ‘20 - 12:33</b>
                </div>
              </div>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
              {" "}
              <Image
                src="/barcode.png"
                alt="Bar Code"
                width={102}
                height={265}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
