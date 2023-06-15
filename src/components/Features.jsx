import ListItems from "./ListItems";

const Features = () => {
  return (
    <section id="features">
      <div className="container flex flex-col px-4 mx-auto mt-10 mb-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left ">
            What&apos;s different about Manage?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left mx-auto md:ml-0 md:mr-0">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <div className="flex flex-col space-y-8 md:w-1/2 mx-4">
          <ListItems
            number="1"
            title="Track company-wide progress"
            text="See how your day-to-day tasks fit into the wider vision. Go from tracking progrress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
          />
          <ListItems
            number="2"
            title="Advanced built-in reports"
            text="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
          />
          <ListItems
            number="3"
            title="Everything you need in one place"
            text="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Managge offers an all-in-one team productivity solution."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
