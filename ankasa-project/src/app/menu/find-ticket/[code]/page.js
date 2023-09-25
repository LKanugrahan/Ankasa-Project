"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";
import * as Icon from "react-feather";

const page = ({ params }) => {
  const [ticket, setTicket] = useState([]);

  const specificTicket = ticket?.find((item) => item.code === params.code);
  console.log(specificTicket);

  useEffect(() => {
    ticketData()
      .then((data) => {
        console.log("Data fetched:", data);
        setTicket(data.data);
        console.log(
          data.data.find((item) => {
            return item.code === params.code;
          })
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const ticketData = async () => {
    try {
      const response = await fetch(
        "https://easy-lime-seal-toga.cyclic.app/airlines/flight",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const plane = {
    height: "400px",
  };

  const search = {
    height: "176px",
    borderRadius: "0px 0px 20px 20px",
    color: "white",
    backgroundImage: 'url("/bigplane.png")',
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={{ backgroundColor: "rgba(245, 246, 250, 1)" }}>
      <div
        className="p-0 align-items-center d-flex bg-primary"
        style={search}
      ></div>
      <div className="container-fluid p-0 d-flex justify-content-evenly">
        <div className="col-7">
          <form>
            <h3>Contact Person Details</h3>
            <div className="bg-white">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control border-0 border-bottom shadow-none"
                  id="floatingFullName"
                  placeholder="Full Name"
                />
                <label for="floatingFullName">Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control border-0 border-bottom shadow-none"
                  id="floatingFull"
                  placeholder="Full Name"
                />
                <label for="floatingFull">Full Name</label>
              </div>
              <InputGroup className="mb-3">
                <DropdownButton
                  variant="outline-secondary"
                  title="Phone Number"
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <Form.Control
                  aria-label="Text input with dropdown button"
                  className="border-0 border-bottom shadow-none"
                />
              </InputGroup>
            </div>
            <h3>Passenger Details</h3>
            <div className="bg-white">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control border-0 border-bottom shadow-none"
                  id="floatingFullName"
                  placeholder="Full Name"
                />
                <label for="floatingFullName">Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control border-0 border-bottom shadow-none"
                  id="floatingFull"
                  placeholder="Full Name"
                />
                <label for="floatingFull">Full Name</label>
              </div>
              <InputGroup className="mb-3">
                <DropdownButton
                  variant="outline-secondary"
                  title="Phone Number"
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <Form.Control
                  aria-label="Text input with dropdown button"
                  className="border-0 border-bottom shadow-none"
                />
              </InputGroup>
            </div>
            <h3>Insurance Details</h3>
            <div className="bg-white">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control border-0 border-bottom shadow-none"
                  id="floatingFullName"
                  placeholder="Full Name"
                />
                <label for="floatingFullName">Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control border-0 border-bottom shadow-none"
                  id="floatingFull"
                  placeholder="Full Name"
                />
                <label for="floatingFull">Full Name</label>
              </div>
              <InputGroup className="mb-3">
                <DropdownButton
                  variant="outline-secondary"
                  title="Phone Number"
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <Form.Control
                  aria-label="Text input with dropdown button"
                  className="border-0 border-bottom shadow-none"
                />
              </InputGroup>
            </div>
            <div className="d-flex justify-content-center">
              <Link href="/menu/payment">
              <button className="btn btn-primary my-4" type="submit">
                Proceed to Payment
              </button>
              </Link>
            </div>
          </form>
        </div>
        <div>
          <h3>Flight Details</h3>
          {specificTicket ? (
            <div style={plane} className="bg-white rounded px-5">
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center gap-5">
                  <img src={specificTicket.photo} />
                  <b className="m-0">{specificTicket.name}</b>
                </div>
                <div className="d-flex flex-column gap-4 justify-content-between">
                  <div className="d-flex align-items-center gap-4">
                    <h5>{specificTicket.from.code}</h5>
                    <Image
                      src="/littleplane.png"
                      alt="Little Logo"
                      width={18}
                      height={18}
                    />
                    <h5>{specificTicket.to.code}</h5>
                  </div>
                  <p className="m-0">
                    {specificTicket.takeoff.split("T")[0]}{" "}
                    {specificTicket.takeoff.split("T")[1].split(".")[0]}-
                    {specificTicket.landing.split("T")[1].split(".")[0]}
                  </p>
                  <div className="d-flex gap-4">
                    <Icon.CheckCircle />
                    <h5>Refundable</h5>
                  </div>
                  <div className="d-flex gap-4">
                    <Icon.CheckCircle />
                    <h5>Can reschedule</h5>
                  </div>
                  <div>
                    <h3 className="m-0">Total payment{" "}
                      <span className="text-primary">
                        ${specificTicket.price}.00
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default page;
