"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";

const ProfileDetail = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    userData()
      .then((data) => {
        console.log("Data fetched:", data);
        setUser(data.data.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const userData = async () => {
    try {
      const response = await fetch(
        `https://easy-lime-seal-toga.cyclic.app/booking/tickets/`,
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
  const profile = {
    borderRadius: "10px",
  };

  const booking = {
    width: "65%",
  };

  return (
    <div style={booking} className="container-fluid d-flex flex-column me-5">
      <div
        style={profile}
        className="mt-5 m-0 p-4 bg-white container-fluid d-flex flex-row align-items-center justify-content-between"
      >
        <h3>Booking</h3>
        <p className="m-0">Order History</p>
      </div>
      <div style={{ maxHeight: "520px", overflowY: "auto" }} id="scrollbar">
        {user?.map((item, index) => {
          return (
            <Link
              href={
                item.status.id === 1
                  ? `/menu/find-ticket/payment/${item.code}`
                  : `/menu/find-ticket/booking-pass/${item.code}`
              }
              style={{ textDecoration: "none", color: "black" }}
              key={item.id}
            >
              <div
                style={profile}
                className="container-fluid my-3 m-0 p-4 bg-white"
              >
                <p>
                  {item.ticket.takeoff.split("T")[0]} -{" "}
                  {item.ticket.takeoff.split("T")[1].split(".")[0]}
                </p>
                <div className="d-flex gap-4">
                  <h5>{item.ticket.from.code}</h5>
                  <Image
                    src="/littleplane.png"
                    alt="Little Logo"
                    width={18}
                    height={18}
                  />
                  <h5>{item.ticket.to.code}</h5>
                </div>
                <p>
                  {item.ticket.airline.name}, {item.ticket.airlineId}
                  {item.ticket.airportIdfrom}
                  {item.ticket.airportIdto}
                </p>
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center gap-5">
                    <h5 className="m-0">Status</h5>
                    {item.status.id === 1 ? (
                      <button className="btn btn-warning" type="button">
                        {item.status.name}
                      </button>
                    ) : (
                      <button className="btn btn-success" type="button">
                        {item.status.name}
                      </button>
                    )}
                  </div>
                  <div className="d-flex align-items-center">
                    <h5 className="m-0">View Detail</h5>
                    <Icon.ChevronDown />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileDetail;
