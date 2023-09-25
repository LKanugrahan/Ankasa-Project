"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import * as Icon from "react-feather";

const transit = [
  { id: 1, name: "Direct" },
  { id: 2, name: "Transit" },
  { id: 3, name: "Transit 2+" },
];

const departure = [
  { id: 1, name: "00:00 - 06:00" },
  { id: 2, name: "06:00 - 12:00" },
  { id: 3, name: "12:00 - 18:00" },
  { id: 4, name: "18:00 - 24:00" },
];

const arrived = [
  { id: 1, name: "00:00 - 06:00" },
  { id: 2, name: "06:00 - 12:00" },
  { id: 3, name: "12:00 - 18:00" },
  { id: 4, name: "18:00 - 24:00" },
];

const airlines = [
  { id: 1, name: "Garuda Indonesia" },
  { id: 2, name: "Air Asia" },
  { id: 3, name: "Lion Air" },
];

// const listPlane = [ {id:}]
const page = () => {
  const [facilities, setFacilities] = useState([]);
  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    facilitiesData()
      .then((data) => {
        console.log("Data fetched:", data);
        setFacilities(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    ticketData()
      .then((data) => {
        console.log("Data fetched:", data);
        setTicket(data.data);
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

  const facilitiesData = async () => {
    try {
      const response = await fetch(
        "https://easy-lime-seal-toga.cyclic.app/airlines/facilities",
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

  const heightSkeleton = {
    height: "1250px",
  };
  const search = {
    height: "176px",
    borderRadius: "0px 0px 20px 20px",
    color: "white",
    backgroundImage: 'url("/bigplane.png")',
    backgroundRepeat: "no-repeat",
  };
  const plane = {
    height: "240px",
  };
  return (
    <div style={heightSkeleton}>
      <div className="p-0 align-items-center d-flex bg-primary" style={search}>
      </div>
      <div className="d-flex">
        <div className="col-2 m-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="m-0">Filter</h3>
            <p className="m-0">Reset</p>
          </div>
          <Accordion alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Transit</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex flex-column gap-2">
                  {transit?.map((item, index) => {
                    return (
                      <div
                        key={item.id}
                        className="form-check-reverse text-center d-flex justify-content-between"
                      >
                        <label
                          className="form-check-label container-fluid d-flex p-0 align-items-start"
                          htmlFor={`transit ${item.id}`}
                        >
                          {item.name}
                        </label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id={`transit ${item.id}`}
                        />
                      </div>
                    );
                  })}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Facilities</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex flex-column gap-2">
                  {Array.isArray(facilities) && facilities.length > 0 ? (
                    facilities.map((item, index) => {
                      return (
                        <div
                          key={item.id}
                          className="form-check-reverse text-center d-flex justify-content-between"
                        >
                          <label
                            className="form-check-label container-fluid d-flex p-0 align-items-start"
                            htmlFor={`facilities ${item.id}`}
                          >
                            {item.name}
                          </label>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id={`facilities ${item.id}`}
                          />
                        </div>
                      );
                    })
                  ) : (
                    <p>No facilities available.</p>
                  )}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Departure Time</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex flex-column gap-2">
                  {departure?.map((item, index) => {
                    return (
                      <div
                        key={item.id}
                        className="form-check-reverse text-center d-flex justify-content-between"
                      >
                        <label
                          className="form-check-label container-fluid d-flex p-0 align-items-start"
                          htmlFor={`departure${item.id}`}
                        >
                          {item.name}
                        </label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id={`departure${item.id}`}
                        />
                      </div>
                    );
                  })}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Time Arrived</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex flex-column gap-2">
                  {arrived?.map((item, index) => {
                    return (
                      <div
                        key={item.id}
                        className="form-check-reverse text-center d-flex justify-content-between"
                      >
                        <label
                          className="form-check-label container-fluid d-flex p-0 align-items-start"
                          htmlFor={`arrived ${item.id}`}
                        >
                          {item.name}
                        </label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id={`arrived ${item.id}`}
                        />
                      </div>
                    );
                  })}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Airlines</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex flex-column gap-2">
                  {airlines?.map((item, index) => {
                    return (
                      <div
                        key={item.id}
                        className="form-check-reverse text-center d-flex justify-content-between"
                      >
                        <label
                          className="form-check-label container-fluid d-flex p-0 align-items-start"
                          htmlFor={`airlines${item.id}`}
                        >
                          {item.name}
                        </label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id={`airlines${item.id}`}
                        />
                      </div>
                    );
                  })}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="container-fluid mt-4 me-4 col-9">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="m-0">Select Ticket</h3>
            <div className="d-flex">
              <p className="m-0">Sort by</p>
              <Icon.Filter />
            </div>
          </div>
          <div style={{ maxHeight: "970px", overflowY: "auto" }} id="scrollbar">
            <div className=" d-flex flex-column gap-4">
              {ticket?.map((item, index) => {
                return (
                  <div style={plane} key={item.code} className="bg-white rounded px-5 shadow">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center gap-5">
                        <img src={item.photo} />
                        <b className="m-0">{item.name}</b>
                      </div>
                      <div className="d-flex gap-4 justify-content-between">
                        <div className="d-flex gap-4">
                          <div className="d-flex flex-column align-items-center">
                            <h5>{item.from.code}</h5>
                            <p className="m-0">
                              {item.takeoff.split("T")[1].split(".")[0]}
                            </p>
                          </div>
                          <Image
                            src="/littleplane.png"
                            alt="Little Logo"
                            width={18}
                            height={18}
                          />
                          <div className="d-flex flex-column align-items-center">
                            <h5>{item.to.code}</h5>
                            <p className="m-0">
                              {item.landing.split("T")[1].split(".")[0]}
                            </p>
                          </div>
                        </div>
                        <div>
                          <h5>{item.interval_time}</h5>
                          <p className="m-0">({item.transit} transit)</p>
                        </div>
                        <div className="d-flex gap-4">
                          {item.facilities[0] === "baggage" ? (
                            <Icon.Briefcase />
                          ) : null}
                          {item.facilities[1] === "meal" ? (
                            <Icon.Coffee />
                          ) : null}
                          {item.facilities[2] === "wifi" ? <Icon.Wifi /> : null}
                        </div>
                        <div>
                          <h5 className="m-0">
                            <span className="text-primary">
                              ${item.price}.00
                            </span>
                            /pax
                          </h5>
                        </div>
                        <Link href={{ pathname: `/menu/find-ticket/${item.code}`}}>
                          <button type="button" className="btn btn-primary">
                            Select
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
