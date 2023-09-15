import Link from "next/link";
import React from "react";

const Forgot = () => {
  return (
    <div>
      <h1>Forgot Password</h1>
      <form>
        <label htmlFor="email" className="form-label"></label>
        <input
          type="email"
          className="form-control border-0 border-bottom shadow-none"
          id="email"
          placeholder="Email"
          required
        />
        <Link href={'otp'}>
          <button className="btn btn-primary col-12 my-4" type="submit">
            Send
          </button>
        </Link>
      </form>
      <p className="m-0 d-flex justify-content-center">
        You’ll get message soon on your email
      </p>
    </div>
  );
};

export default Forgot;
