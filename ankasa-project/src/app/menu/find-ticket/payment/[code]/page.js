"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";



const Payment = ({ params }) => {
  const router = useRouter()
  console.log(params.code);
  const [user, setUser] = useState();
  const [passenger, setPassenger] = useState({
    statusId: 2,

  });
  const handlerPut = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://easy-lime-seal-toga.cyclic.app/booking/status/${params.code}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(passenger),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      router.push(`/menu/find-ticket/booking-pass/${params.code}`);

      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    userData()
      .then((data) => {
        console.log("Data fetched:", data);
        setUser(data.data.result.ticket.price);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const userData = async () => {
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
  const container = { height: "483px", width: "941px" };
  return (
    <div
      style={staticHeight}
      className="bg-primary d-flex justify-content-center align-items-center"
    >
      <div
        style={container}
        className="bg-white d-flex flex-column justify-content-center align-items-center gap-3"
      >
        <div>
          <h5>Payment Method</h5>
          <form onSubmit={handlerPut}>
            <div
              style={{ backgroundColor: "rgba(245, 246, 250, 1)" }}
              className="d-flex justify-content-between align-items-center rounded p-2"
            >
              <p className="m-0">Paypal</p>
              <Image src="/paypal.png" alt="Paypal" width={25} height={25} />
            </div>
            <div
              style={{ backgroundColor: "rgba(245, 246, 250, 1)" }}
              className="d-flex justify-content-between align-items-center rounded p-2 mt-2"
            >
              <p className="m-0">Credit Card</p>
              <Icon.CreditCard />
            </div>
            <label htmlFor="cardNumber" className="form-label">
              Card Number
            </label>
            <input
              type="text"
              className="form-control border-0 border-bottom shadow-none"
              id="cardNumber"
              name="cardNumber"
              placeholder="0000 0000 0000 0000"
            />
            <div className="d-flex gap-2">
              <div>
                <label htmlFor="expiryDate" className="form-label">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  className="form-control border-0 border-bottom shadow-none"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label htmlFor="CVC" className="form-label">
                  CVC/CVV
                </label>
                <input
                  type="text"
                  id="CVC"
                  name="CVC"
                  className="form-control border-0 border-bottom shadow-none"
                  placeholder="000"
                />
              </div>
            </div>
            <h5>Summary</h5>
            <div>
              <h5 className="m-0">
                Total payment <span className="text-primary">${user}.00</span>
              </h5>
            </div>
              <button className="btn btn-primary col-12 my-4" type="submit">
                Pay
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
