//components
import Button from "./Button";

//images
import introImage from "../assets/illustration-intro.svg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        <div className="flex flex-col mb-20 space-y-12 md:w-1/2 md:mb-32">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to build better products
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keepong the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button title="Get started" hidden={false} />
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={introImage} alt="intro" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
