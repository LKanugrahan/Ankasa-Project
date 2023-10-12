"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";

const page = ({ params }) => {
  const [ticket, setTicket] = useState();

  useEffect(() => {
    ticketData()
      .then((data) => {
        console.log("Data fetched:", data);
        setTicket(data.data.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const ticketData = async () => {
    try {
      const response = await fetch(
        `https://easy-lime-seal-toga.cyclic.app/booking/tickets/${params.code}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
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

  const staticHeight = { height: "650px" };
  const container = { height: "550px", width: "800px" };
  const booking = { height: "350px", width: "650px" };
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
          <div style={booking} className="border col-11 rounded d-flex">
            <div className="col-8 d-flex flex-column gap-4 p-5">
              <div className="d-flex justify-content-between align-items-center">
                <img
                  src={ticket?.ticket.airline.photo}
                  alt={ticket?.ticket.airline.name}
                  width={100}
                  height={57}
                />
                <div className="d-flex gap-4">
                  <h5>{ticket?.ticket.from.code}</h5>
                  <Image
                    src="/littleplane.png"
                    alt="Little Logo"
                    width={18}
                    height={18}
                  />
                  <h5>{ticket?.ticket.to.code}</h5>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <div className="d-flex flex-column gap-2">
                    <p className="m-0">From</p> <b>{ticket?.ticket.from.location}</b>
                    <p className="m-0">Terminal</p>{" "}
                    <b>{ticket?.ticket.from.terminal}</b>
                  </div>
                  <div className="d-flex flex-column gap-2 ms-1">
                    <p className="m-0">To</p> <b>{ticket?.ticket.to.location}</b>
                  </div>
                </div>
                <div className="d-flex flex-column gap-2">
                  <p className="m-0">Departure</p>
                  <b>
                    {ticket?.ticket.takeoff.split("T")[0]} -{" "}
                    {ticket?.ticket.takeoff.split("T")[1].split(".")[0]}
                  </b>
                </div>
              </div>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
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
