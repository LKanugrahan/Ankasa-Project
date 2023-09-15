import Link from "next/link";
import React from "react";

const Otp = () => {
  return (
    <div>
      <h1>Verifikasi OTP</h1>
      <form>
        <label htmlFor="email" className="form-label"></label>
        <input
          type="email"
          className="form-control border-0 border-bottom shadow-none"
          id="email"
          placeholder="Email"
          required
        />
        <label htmlFor="otp" className="form-label"></label>
        <input
          type="text"
          id="otp"
          className="form-control border-0 border-bottom shadow-none"
          placeholder="OTP"
          required
        />
        <Link href={"login"}>
          <button className="btn btn-primary col-12 my-4" type="submit">
            Verify
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Otp;
