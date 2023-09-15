"use client";
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const ProfileDetail = () => {
  const profile = {
    width: "64%",
    height: "100%",
    borderRadius: "10px",
  };

  const form = {
    width: "50%",
  };
  return (
    <div style={profile} className="container-fluid me-5 mt-5 p-4 bg-white">
      <h3>Profile</h3>
      <form className="d-flex gap-4">
        <div style={form}>
          <h5>Contact</h5>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control border-0 border-bottom shadow-none"
              id="email"
              placeholder="email@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control border-0 border-bottom shadow-none"
              id="phoneNumber"
              placeholder="+62XXXXXXXXXXX"
            />
          </div>
        </div>
        <div style={form}>
          <h5>Biodata</h5>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Fullname
            </label>
            <input
              type="text"
              className="form-control border-0 border-bottom shadow-none"
              id="name"
              placeholder="Fullname"
            />
          </div>
          <label htmlFor="dropdown-basic-button" className="form-label">
            City
          </label>
          <DropdownButton id="dropdown-basic-button" title="City">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control border-0 border-bottom shadow-none"
              id="address"
              placeholder="Address"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="zip" className="form-label">
              Post Code
            </label>
            <input
              type="text"
              className="form-control border-0 border-bottom shadow-none"
              id="zip"
              placeholder="Post Code"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileDetail;
