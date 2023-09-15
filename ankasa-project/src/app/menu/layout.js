import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Icon from "react-feather";

const layout = ({ children }) => {
  const navHeight = {
    // height: "158px",
    position: 'sticky'
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
  return (
    <>
      <nav style={navHeight} className="navbar d-flex justify-content-around">
        <div>
          <Link className="navbar-brand d-flex flex-row" href="#">
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
            <li className="nav-item">
              <a className="nav-link" href="/menu/find-ticket">
                Find Ticket
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/menu/profile/my-booking">
                My Booking
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-row align-items-center gap-5">
          <Icon.Mail />
          <Icon.Bell />
          <div style={avatar} className="rounded-circle bg-primary"></div>
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
              <Icon.MapPin/> Jakarta, Indonesia
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default layout;
