"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://easy-lime-seal-toga.cyclic.app/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message, {
          position: "top-right",
          autoClose: 3000,
        });
        router.push("./login");
      } else if (data.message.split("-")[1]){
        console.log(data.message);
        toast.error(data.message.split("-")[1]);
      } else {
        console.log(data.message);
        toast.error(data.message.split(".")[0]);
      }
      return data;
    } catch (error) {
      toast.error("Terjadi kesalahan:", error);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname" className="form-label"></label>
        <input
          id="fullname"
          type="text"
          className="form-control border-0 border-bottom shadow-none"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full name"
          required
        />
        <label htmlFor="email" className="form-label"></label>
        <input
          id="email"
          type="email"
          className="form-control border-0 border-bottom shadow-none"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <label htmlFor="password" className="form-label"></label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-control border-0 border-bottom shadow-none"
          placeholder="Password"
          aria-describedby="passwordDesc"
          required
        />
        {/* <div id="passwordDesc" className="form-text">
        {}
      </div> */}
        <button className="btn btn-primary col-12 my-4" type="submit">
          Sign Up
        </button>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            required
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Accept terms and condition
          </label>
        </div>
      </form>
      <p className="text-center my-3">Already have an account?</p>
      <Link href={"./login"}>
        <button className="btn btn-outline-primary col-12" type="button">
          Sign In
        </button>
      </Link>
    </div>
  );
};

export default Register;
