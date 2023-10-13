"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import * as Icon from "react-feather";
import DatePicker from "react-datepicker";

const Layout = ({ children }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [startdate, setStartDate] = useState(new Date());
  const navHeight = {
    // height: "158px",
    position: "sticky",
  };
  const footHeight = {
    height: "417px",
  };
  const footItems = {
    height: "269px",
  };
  const avatar = {
    height: "50px",
    width: "50px",
  };
  const cardList = {
    borderRadius: "10px",
    height: "100px",
  };
  return (
    <>
      <nav style={navHeight} className="navbar d-flex justify-content-around">
        <div>
          <Link
            className="navbar-brand d-flex flex-row"
            href="/menu/landing-page"
          >
            <Image
              src="/blueplane.png"
              alt="Ankasa Logo"
              width={50}
              height={34}
              className="m-2"
            />
            <h2>Ankasa</h2>
          </Link>
        </div>
        <div className=" d-flex flex-row gap-5">
          <form className="d-flex align-items-center" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Where you want to go?"
            />
          </form>
          <ul className="nav nav-underline gap-5">
            <li className="nav-item d-flex align-items-center">
              <Dropdown
                className="nav-link"
                autoClose={false}
                show={isDropdownOpen}
                style={{ cursor: "pointer" }}
              >
                <Dropdown.Toggle
                  bsPrefix="p-0"
                  as={"Text"}
                  id="dropdown-basic"
                  onClick={() => setDropdownOpen(true)}
                >
                  Find Ticket
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ width: "300px" }} className="my-4 p-3">
                  <p>Hey,</p>
                  <p>Where you want to go?</p>
                  <Link
                    href={"/menu/profile/my-profile"}
                    className="text-decoration-none text-primary"
                  >
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <p className="m-0">Recently Searched</p>
                      <Icon.ChevronRight />
                    </div>
                  </Link>
                  <form>
                    <div
                      style={cardList}
                      className="my-2 p-2 shadow d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <p className="m-0">From</p>
                        <h5 className="m-0">Medan</h5>
                        <p className="m-0">Indonesia</p>
                      </div>
                      <div>
                        <Icon.Repeat />
                      </div>
                      <div className="text-end">
                        <p className="m-0">To</p>
                        <h5 className="m-0">Tokyo</h5>
                        <p className="m-0">Japan</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <input
                        type="radio"
                        className="btn-check"
                        name="options"
                        id="option1"
                        autoComplete="off"
                        checked
                      />
                      <label
                        className="btn d-flex align-items-center justify-content-between col-6"
                        htmlFor="option1"
                      >
                        <Icon.Send size={18} />
                        One way
                      </label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="options"
                        id="option2"
                        autoComplete="off"
                      />
                      <label
                        className="btn d-flex align-items-center justify-content-between col-6"
                        htmlFor="option2"
                      >
                        <Icon.RotateCw size={18} />
                        Round trip
                      </label>
                    </div>
                    <p>Departure</p>
                    <DatePicker
                      selected={startdate}
                      onChange={(date) => setStartDate(date)}
                    />
                    <Link href="/menu/find-ticket">
                      <button
                        className="btn btn-primary col-12 my-4"
                        type="submit"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Find Ticket
                      </button>
                    </Link>
                  </form>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/menu/profile/my-booking">
                My Booking
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-row align-items-center gap-5">
          {localStorage.getItem("token") === null ?(
            <Link href={"/auth/register"}>
              <button type="button" className="btn btn-primary">
                Sign Up
              </button>
            </Link>
          ): (
            <>
              <Icon.Mail />
              <Icon.Bell />
              <Link href="/menu/profile/my-profile">
                  <img style={avatar} className="rounded-circle" src="https://res.cloudinary.com/dafjb9vn7/image/upload/v1693639658/profile_cmqdrx.png" />
              </Link>
            </>
          )}
        </div>
      </nav>
      <div>{children}</div>
      <footer style={footHeight} className=" d-flex align-items-end">
        <div
          style={footItems}
          className="mb-5 container-fluid d-flex justify-content-evenly"
        >
          <div className=" d-flex flex-column justify-content-between">
            <div className="d-flex flex-column gap-4">
              <div className="d-flex">
                <Image
                  src="/blueplane.png"
                  alt="Ankasa Logo"
                  width={50}
                  height={34}
                  className="m-2"
                />
                <h2>Ankasa</h2>
              </div>
              <p>
                Find your Flight and explore the
                <br />
                world with us. We will take care of the rest
              </p>
            </div>
            <p>© Ankasa. All Rights Reserved.</p>
          </div>
          <div className="d-flex flex-column gap-2">
            <h5 className="mb-4">Features</h5>
            <h5>Find Ticket</h5>
            <h5>My Booking</h5>
            <h5>Chat</h5>
            <h5>Notification</h5>
          </div>
          <div className="d-flex flex-column gap-4">
            <h5>Download Ankasa app</h5>
            <Image
              src="/app-store.png"
              alt="App Store"
              width={200}
              height={60}
            />
            <Image
              src="/g-store.png"
              alt="Google Store"
              width={200}
              height={60}
            />
          </div>
          <div className="d-flex flex-column justify-content-between">
            <div className="d-flex flex-column gap-3">
              <h5>Follow Us</h5>
              <div className="d-flex gap-4">
                <Icon.Facebook />
                <Icon.Twitter />
                <Icon.Instagram />
                <Icon.Youtube />
              </div>
            </div>
            <p>
              <Icon.MapPin /> Jakarta, Indonesia
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
