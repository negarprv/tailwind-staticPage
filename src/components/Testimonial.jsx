const Testimonial = ({ image, name, text }) => {
  return (
    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray mb-20 md:w-1/3">
      <img src={image} className="w-16 -mt-14" alt="avatar" />
      <h5 className="text-lg font-bold">{name}</h5>
      <p className="text-sm text-darkGrayishBlue">{text}</p>
    </div>
  );
};

export default Testimonial;
