//image
import logo from "../assets/logo.svg";

//button
import Button from "./Button";

const Navbar = () => {
  return (
    <div>
      <nav className="relative container p-6 mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="pt-2">
            <img src={logo} alt="logo" />
          </div>
          {/* menu Items */}
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
          <Button title="Get started" hidden={true} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
