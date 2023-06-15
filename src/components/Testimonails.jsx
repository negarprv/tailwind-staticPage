//components
import Testimonial from "./Testimonial";
import Button from "./Button";

//images
import avatar1 from "../assets/avatar-ali.png";
import avatar2 from "../assets/avatar-anisha.png";
import avatar3 from "../assets/avatar-richard.png";

const Testimonails = () => {
  return (
    <section id="teestimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 mb-20 text-center">
        <h2 className="text-4xl font-bold text-center">
          What&apos;s different About Manage?
        </h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <Testimonial
            image={avatar1}
            name="Ali Bravo"
            text=" &rdquo;Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.&ldquo;"
          />
          <Testimonial
            image={avatar2}
            name="Anisha Li"
            text=" &rdquo;We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.&ldquo;"
          />
          <Testimonial
            image={avatar3}
            name="Richard Watts"
            text=" &rdquo;Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.&ldquo;"
          />
        </div>
        <Button hidden={false} title="See more" bright={false} />
      </div>
    </section>
  );
};

export default Testimonails;
