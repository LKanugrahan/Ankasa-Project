"use client";
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

const data = [
  { id: 1, name: "Bandung" },
  { id: 2, name: "Bandung" },
  { id: 3, name: "Bandung" },
  { id: 4, name: "Bandung" },
  { id: 5, name: "Bandung" },
  { id: 6, name: "Bandung" },
  { id: 7, name: "Bandung" },
  { id: 8, name: "Bandung" },
  { id: 9, name: "Bandung" },
  { id: 10, name: "Bandung" },
];

class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
    };

    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="col-10">
          <Slider {...settings}>
            {data?.map((item, index) => {
              return (
                <div key={item.id}>
                  <div className="card text-bg-dark mx-2">
                    <img src="/tokyo.png" className="card-img" alt="..." />
                    <div className="card-img-overlay">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

const circleData = [
  { id: 1, name: "Paris", link: "/paris.png" },
  { id: 2, name: "Bali", link: "/bali.png" },
  { id: 3, name: "Singapore", link: "/singapore.png" },
  { id: 4, name: "Agra", link: "/mosque.png" },
  { id: 5, name: "Sydney", link: "/sky.png" },
]

class MultipleItemsCircle extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
    };

    const avatar = {
      height:'150px',
      width:'150px'
    }

    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="col-10">
          <Slider {...settings}>
            {circleData?.map((item, index) => {
              return (
                <div key={item.id} className="d-flex flex-column align-items-center">
                  <img src={item.link} style={avatar} className="m-2 rounded-circle">
                  </img>
                  <p>{item.name.toUpperCase()}</p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

const page = () => {
  const list = {
    marginLeft:"auto",
    marginRight:'auto',
    height: "550px",
    width:"1106px",
    borderRadius: "20px 20px 20px 20px",
    color: "white",
    backgroundImage: 'url("/planelist.png")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'bottom left'
  };
  return (
    <>
      <div className="d-flex align-items-start justify-content-between">
        <div>
          <div className="m-5 p-5">
            <h1 className="display-2">
              Find your <span className="text-primary">Flight</span>
            </h1>
            <p>and explore the world with us</p>
          </div>
          <Image
            src="/bottomImage.png"
            alt="Destination"
            width={804}
            height={520}
          />
        </div>
        <div className="d-flex flex-column align-items-start">
          <Image
            src="/topImage.png"
            alt="Destination"
            width={429}
            height={520}
          />
          <Image
            src="/vector.png"
            alt="Destination"
            width={232}
            height={246}
            className="m-5"
          />
        </div>
      </div>
      <div className="d-flex flex-column">
        <MultipleItems />
      </div>
      <div style={list} className=" bg-primary my-5 d-flex flex-column justify-content-center align-items-center p-5">
      <MultipleItemsCircle />
      </div>
    </>
  );
};

export default page;
