import React from "react";
import { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import orangeSneaker from "../assets/images/orangeSneaker.png";
import iconPlus from "../assets/images/iconPlus.svg";
import iconMinus from "../assets/images/iconMinus.svg";

export default function Men() {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    //condition for decrement to not get the negative output
    {
      count > 0
        ? setCount((prevCount) => prevCount - 1)
        : console.log("Cannot decrease count below 0.");
    }
  }

  return (
    <div className="w-full bg-white py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4 py-4">
        <div className="flex justify-center items-center">
          <img
            src={orangeSneaker}
            alt="orangeSneaker"
            className=" w-full  
         my-4 rounded-3xl"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#ff7d1a] font-bold text-xl md:text-2xl uppercase flex justify-center">
            Sneaker for Women
          </p>
          <h1 className="font-bold text-2xl md:text-4xl py-2 flex justify-center">
            Chuck Taylor All Star Crush Heel Sneakers - Orange
          </h1>
          <div className="mx-auto">
            <p className="">
              Part low-top sneaker, part mule - 100% essential. These versatile
              Chucks are designed for easy, goes-with-everything style. A
              slightly stretchy crush-back heel allows you to switch up your
              style between classic low top and backless mule looks. Made with
              an about 50% recycled cotton canvas upper and everyday neutrals,
              they're a must-have for warm-weather styling.Women's low-top
              sneaker with 12oz cotton canvas upper (about 50% recycled cotton,
              about 50% cotton)Slightly stretchy heel for easy on and
              offStandard woven tongue label and license plate
            </p>
            <div className="grid  ">
              <div className="flex place-items-center">
                <span className="text-2xl py-2 font-bold mr-2">₱1,750</span>
                <p className="text-[#ff7d1a] font-bold bg-orange-100 rounded-lg px-2">
                  50%
                </p>
              </div>
              <span className="font-bold text-lg text-slate-400 line-through">
                ₱3,500
              </span>
            </div>

            <div className="flex gap-4">
              <div className="flex justify-center w-full rounded-lg bg-slate-100 text-xl py-2 my-4">
                <button
                  className="px-2 text-[#ff7d1a]"
                  onClick={incrementCount}
                >
                  <img src={iconPlus} alt="iconPlus" />
                  {/* <PlusOutlined style={{fontWeight: "bold"}} className="font-bold"/> */}
                </button>
                <span className="px-8 items-center justify-center flex font-bold">
                  {count}
                </span>
                <button
                  className="px-2 text-[#ff7d1a] "
                  onClick={decrementCount}
                >
                  <img src={iconMinus} alt="iconMinus" />
                  {/* <MinusOutlined /> */}
                </button>
              </div>
              <div className="flex justify-center items-center w-full">
                <button className="bg-[#ff7d1a] w-full rounded-lg font-medium my-4 py-2 mx-auto md:mx-0 flex items-center justify-center text-white shadow-orange">
                  <ShoppingCartOutlined
                    className="mr-2"
                    style={{ fontSize: "22px" }}
                  />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
