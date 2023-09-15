import Link from "next/link";
import React from "react";
import * as Icon from "react-feather";

const Profile = ({ children }) => {
  const bg = {
    backgroundColor:'rgba(245, 246, 250, 1)'
  }
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
        <div style={avatar} className="rounded-circle bg-primary"></div>
        <button type="button" className="btn btn-outline-primary m-3">
          Select Photo
        </button>
        <h4>Mike Kowalski</h4>
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
            <Link href={"/menu/profile/my-profile"}>
              <div className="d-flex flex-row align-items-center justify-content-between">
                <div>
                  <Icon.User fill="black" color="black" className="mx-3" />
                  Profile
                </div>
                <Icon.ChevronRight />
              </div>
            </Link>

            <div className="d-flex flex-row align-items-center justify-content-between">
              <div>
                <Icon.Star fill="black" color="black" className="mx-3" /> My
                Reviews
              </div>
              <Icon.ChevronRight />
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between">
              <div>
                <Icon.Settings className="mx-3" /> Settings
              </div>
              <Icon.ChevronRight />
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between">
              <div>
                <Icon.LogOut className="mx-3" /> Logout
              </div>
              <Icon.ChevronRight />
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Profile;
