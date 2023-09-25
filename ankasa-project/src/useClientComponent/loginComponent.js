"use client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";

export const loginHandler = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://easy-lime-seal-toga.cyclic.app/auth/login",
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

  return { formData, handleChange, handleSubmit}
};
