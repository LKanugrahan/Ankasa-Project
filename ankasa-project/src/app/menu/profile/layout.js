"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import * as Icon from "react-feather";

const Profile = ({ children }) => {
  let name
  useEffect(() => {
    name = localStorage.getItem('name')
  }, [])
  const bg = {
    backgroundColor: "rgba(245, 246, 250, 1)",
  };
  const avatar = {
    height: "137px",
    width: "137px",
  };
  const profileDashboard = {
    width: "24%",
    height: "100%",
    borderRadius: "10px",
  };
  const cardWidth = {
    width: "100%",
  };

  const cardList = {
    borderRadius: "10px",
    height: "68px",
  };
  return (
    <div style={bg} className=" d-flex flex-row">
      <div
        style={profileDashboard}
        className="container-fluid m-5 p-4 bg-white d-flex flex-column align-items-center"
      >
        <img
          style={avatar}
          className="rounded-circle"
          src="https://res.cloudinary.com/dafjb9vn7/image/upload/v1693639658/profile_cmqdrx.png"
        />
        <button type="button" className="btn btn-outline-primary m-3">
          Select Photo
        </button>
        <h4>{name}</h4>
        <p>
          <Icon.MapPin color="blue" /> Medan, Indonesia
        </p>
        <div style={cardWidth}>
          <div className="d-flex flex-row justify-content-between">
            <p className="m-0">Card</p>
            <p className="m-0">+ Add</p>
          </div>
          <div
            style={cardList}
            className="my-2 px-4 bg-primary d-flex flex-column justify-content-center"
          >
            <div>4441 1235 5512 5551</div>
            <div className="d-flex flex-row justify-content-between">
              <p className="m-0">X Card</p>
              <p className="m-0">$ 1,440.2</p>
            </div>
          </div>
          <div className="d-flex flex-column gap-4">
            <Link
              href={"/menu/profile/my-profile"}
              className="text-decoration-none text-dark"
            >
              <div className="d-flex flex-row align-items-center justify-content-between">
                <div className="d-flex">
                  <Icon.User fill="black" color="black" className="mx-3" />
                  <p className="m-0">Profile</p>
                </div>
                <Icon.ChevronRight />
              </div>
            </Link>
            <Link href={"#"} className="text-decoration-none text-dark">
              <div className="d-flex flex-row align-items-center justify-content-between">
                <div className="d-flex">
                  <Icon.Star color="black" className="mx-3" />
                  <p className="m-0">My Reviews</p>
                </div>
                <Icon.ChevronRight />
              </div>
            </Link>
            <Link href={"#"} className="text-decoration-none text-dark">
              <div className="d-flex flex-row align-items-center justify-content-between">
                <div className="d-flex">
                  <Icon.Settings color="black" className="mx-3" />
                  <p className="m-0">Settings</p>
                </div>
                <Icon.ChevronRight />
              </div>
            </Link>
            <Link
              onClick={() => localStorage.clear()}
              href={"/menu/landing-page"}
              className="text-decoration-none text-danger"
            >
              <div className="d-flex flex-row align-items-center justify-content-between">
                <div className="d-flex">
                  <Icon.LogOut color="red" className="mx-3" />
                  <p className="m-0">Logout</p>
                </div>
                <Icon.ChevronRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Profile;
