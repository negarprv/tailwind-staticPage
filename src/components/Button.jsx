const Button = ({ title, hidden, bright }) => {
  return (
    <a
      href=""
      className={`${hidden ? "hidden md:block" : ""}  p-3 px-6 pt-2  ${
        bright
          ? "bg-white text-brightRed hover:bg-gray-200"
          : "bg-brightRed text-white hover:bg-brightRedLight"
      }  rounded-full  shadow-2xl `}
    >
      {title}
    </a>
  );
};

export default Button;
