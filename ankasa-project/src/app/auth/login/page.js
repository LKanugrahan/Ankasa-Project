"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://easy-lime-seal-toga.cyclic.app/users/login",
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
        router.push("/menu/profile/my-profile");
      } else {
        console.log(data.message.split("-")[1]);
        toast.error(data.message.split(".")[0]);
      }
    } catch (error) {
      toast.error("Terjadi kesalahan:", error);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="form-label"></label>
        <input
          type="email"
          className="form-control border-0 border-bottom shadow-none"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <label htmlFor="password" className="form-label"></label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-control border-0 border-bottom shadow-none"
          placeholder="Password"
          required
        />
        <button className="btn btn-primary col-12 my-4" type="submit">
          Sign In
        </button>
        
      </form><div className="d-flex flex-column align-items-center">
      <p className="m-0">Did you forgot your password?</p>
      <Link href={'forgotpass'}>Tap here for reset</Link>
      </div>

    </div>
  );
};

export default Login;
