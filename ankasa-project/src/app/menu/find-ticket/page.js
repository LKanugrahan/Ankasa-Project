"use client";
import React from "react";
import { Accordion } from "react-bootstrap";
import * as Icon from "react-feather";

const page = () => {
  const heightSkeleton = {
    height: "1250px",
  };
  const search = {
    height: "174px",
    borderRadius: "0px 0px 20px 20px",
    color: "white",
    backgroundImage: 'url("/bigplane.png")',
    backgroundRepeat: "no-repeat",
  };
  const plane = {
    height: "240px",
  };
  return (
    <div style={heightSkeleton} className="bg-warning">
      <div className="p-0 align-items-center d-flex bg-primary" style={search}>
        a
      </div>
      <div className="d-flex">
        <div className="col-3 m-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="m-0">Filter</h3>
            <p className="m-0">Reset</p>
          </div>
          <Accordion alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex flex-column gap-2">
                  <div className="form-check-reverse text-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                  <div className="form-check-reverse text-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                  <div className="form-check-reverse text-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex flex-column gap-2">
                  <div className="form-check-reverse text-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                  <div className="form-check-reverse text-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                  <div className="form-check-reverse text-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex flex-column gap-2">
                  <div className="form-check-reverse text-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                  <div className="form-check-reverse text-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                  <div className="form-check-reverse text-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                  <div className="form-check-reverse text-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex flex-column gap-2">
                  <div className="form-check-reverse text-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                  <div className="form-check-reverse text-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                  <div className="form-check-reverse text-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                  <div className="form-check-reverse text-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex flex-column gap-2">
                  <div className="form-check-reverse text-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                  <div className="form-check-reverse text-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                  <div className="form-check-reverse text-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="container-fluid mt-4 me-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="m-0">Select Ticket</h3>
            <div className="d-flex">
              <p className="m-0">Sort by</p>
              <Icon.Filter />
            </div>
          </div>
          <div style={{maxHeight:'970px', overflowY:'auto'}} id="scrollbar">
          <div className=" d-flex flex-column gap-4">
            <div style={plane} className="bg-white rounded">
              a
            </div>
            <div style={plane} className="bg-white rounded">
              a
            </div>
            <div style={plane} className="bg-white rounded">
              a
            </div>
            <div style={plane} className="bg-white rounded">
              a
            </div>
            <div style={plane} className="bg-white rounded">
              a
            </div>
            <div style={plane} className="bg-white rounded">
              a
            </div>
            <div style={plane} className="bg-white rounded">
              a
            </div>
            <div style={plane} className="bg-white rounded">
              a
            </div>
            <div style={plane} className="bg-white rounded">
              a
            </div>
            <div style={plane} className="bg-white rounded">
              a
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
