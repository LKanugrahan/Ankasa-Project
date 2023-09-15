import Image from "next/image";
import React from "react";
import * as Icon from "react-feather";

const ProfileDetail = () => {
  const profile = {
    borderRadius: "10px",
  };

  const booking = {
    width:'65%'
  }

  return (
    <div style={booking} className="container-fluid d-flex flex-column me-5">
      <div
        style={profile}
        className="mt-5 m-0 p-4 bg-white container-fluid d-flex flex-row align-items-center justify-content-between"
      >
        <h3>Booking</h3>
        <p className="m-0">Order History</p>
      </div>
      <div style={profile} className="container-fluid my-3 m-0 p-4 bg-white">
        <p>Monday, 20 July 2023 - 12:33</p>
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
        <p>Garuda Indonesia, AB-221</p>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center gap-5">
            <h5 className="m-0">Status</h5>
            <button className="btn btn-success" type="button">
              Status
            </button>
          </div>
          <div className="d-flex align-items-center">
            <h5 className="m-0">View Detail</h5>
            <Icon.ChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
