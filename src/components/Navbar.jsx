//image
import { useState } from "react";
import logo from "../assets/logo.svg";

//button
import Button from "./Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <div>
      <nav className="relative container p-6 mx-auto">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <img src={logo} alt="logo" />
          </div>

          <div className="hidden md:flex space-x-6 ">
            <a href="#" className="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Product
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              About us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Community
            </a>
          </div>
          <Button title="Get started" hidden={true} bright={false} />

          <button
            id="menu-btn"
            className={`${
              open ? "open" : ""
            } blcok hamburger md:hidden focus:outline-none`}
            onClick={clickHandler}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        <div className={`${open ? "" : "hidden"}`}>
          <div
            id="menu"
            className="absolute flex flex-col items-center self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6  drop-shadow-md"
          >
            <a href="#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-brightRed">
              Product
            </a>
            <a href="#" className="hover:text-brightRed">
              About Us
            </a>
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
