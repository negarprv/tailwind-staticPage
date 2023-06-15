const Button = ({ title, hidden }) => {
  return (
    <a
      href=""
      className={`${
        hidden ? "hidden md:block" : ""
      }  p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight`}
    >
      {title}
    </a>
  );
};

export default Button;
