import Button from "~components/Button/Button";

const ContactForm = () => {
  const handleSubmit = () => {
    // TODO: handle validation
    // TODO: handle submit steps (message to sender, to Sunjay, etc.)
    return;
  };
  return (
    <>
      <h2 className="text-3xl font-serif text-black dark:text-white mb-2">
        Like what you see?
      </h2>
      <p className="text-base text-black dark:text-white mb-8">
        Well, you made it this far. It kind of seems like we should chat about
        how I can add value to your team. Don’t you think? (And yes, I read
        every message that comes through and respond promptly).&nbsp;
        <a
          className="text-blooper dark:text-purps underline"
          href="/assets/resume.pdf"
          target="_blank"
        >
          Download my resume
        </a>
        &nbsp;and drop me a line. Talk soon! 👋🏽
      </p>
      <form action="" className="flex flex-col gap-6">
        <section className="flex gap-5 flex-col md:flex-row">
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="firstName"
              className="text-base font-medium tracking-wider uppercase text-black dark:text-white"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="h-11 border-black dark:border-white border-2 px-2 bg-white dark:bg-transparent text-base text-black dark:text-white"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="lastName"
              className="text-base font-medium tracking-wider uppercase text-black dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="h-11 border-black dark:border-white border-2 px-2 bg-white dark:bg-transparent text-base text-black dark:text-white"
            />
          </div>
        </section>
        <section className="flex flex-col gap-2 w-full">
          <label
            htmlFor="company"
            className="text-base font-medium tracking-wider uppercase text-black dark:text-white"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            className="h-11 border-black dark:border-white border-2 px-2 bg-white dark:bg-transparent text-base text-black dark:text-white"
          />
        </section>
        <section className="flex gap-5 flex-col md:flex-row">
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="email"
              className="text-base font-medium tracking-wider uppercase text-black dark:text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="h-11 border-black dark:border-white border-2 px-2 bg-white dark:bg-transparent text-base text-black dark:text-white"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="phone"
              className="text-base font-medium tracking-wider uppercase text-black dark:text-white"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="h-11 border-black dark:border-white border-2 px-2 bg-white dark:bg-transparent text-base text-black dark:text-white"
            />
          </div>
        </section>
        <section className="flex flex-col gap-2 w-full">
          <label
            htmlFor="message"
            className="text-base font-medium tracking-wider uppercase text-black dark:text-white"
          >
            Message
          </label>
          <textarea
            id="phone"
            className="h-11 border-black dark:border-white border-2 p-2 bg-white dark:bg-transparent text-base text-black dark:text-white min-h-32"
          />
        </section>
        <section className="flex justify-end">
          <Button type="submit" backgroundType="solid">
            Send Message
          </Button>
        </section>
      </form>
    </>
  );
};

export default ContactForm;
