import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Icon from "react-feather";

const page = () => {
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
          <form>
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
              required
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
                  required
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
                  required
                />
              </div>
            </div>
            <h5>Summary</h5>
            <div>
              <h5 className="m-0">
                Total payment <span className="text-primary">$500.00</span>
              </h5>
            </div>
            <Link href="booking-pass">
            <button className="btn btn-primary col-12 my-4" type="submit">
              Pay
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
