"use client";

import { PropsWithChildren, useCallback } from "react";
import { useFormState, useFormStatus } from "react-dom";

import { contactAction } from "~/components/ContactForm/contact-action";
import Button from "~components/Button/Button";

type Error = { errors: string[] };

type Input = {
  errors?: string[];
  id: string;
  name: string;
  required?: boolean | undefined;
  type?: string;
};

interface Label extends PropsWithChildren {
  htmlFor: string;
}

const ContactForm = () => {
  const [state, formAction] = useFormState(contactAction, {
    errors: [],
    message: "",
    status: 200,
  });
  const findErrors = useCallback(
    (fieldName: string) => {
      return state?.errors
        .filter((item) => {
          return item.path.includes(fieldName);
        })
        .map((item) => item.message);
    },
    [state?.errors],
  );

  const firstNameErrors = findErrors("firstName");
  const lastNameErrors = findErrors("lastName");
  const companyErrors = findErrors("company");
  const emailErrors = findErrors("email");
  const phoneErrors = findErrors("phone");
  const messageErrors = findErrors("message");
  const honeyPotErrors = findErrors("website");

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
      <form action={formAction} className="flex flex-col gap-6">
        <section className="flex gap-5 flex-col md:flex-row">
          <TextInput
            name="First Name"
            id="firstName"
            required={true}
            errors={firstNameErrors}
          />
          <TextInput
            name="Last Name"
            id="lastName"
            required={true}
            errors={lastNameErrors}
          />
        </section>
        <TextInput name="Company" id="company" errors={companyErrors} />
        <section className="flex gap-5 flex-col md:flex-row">
          <TextInput
            name="Email"
            id="email"
            type="email"
            errors={emailErrors}
            required={true}
          />
          <TextInput name="Phone" id="phone" type="tel" errors={phoneErrors} />
        </section>
        <section className="flex flex-col gap-2 w-full">
          <TextArea
            name="Message"
            id="message"
            errors={messageErrors}
            required={true}
          />
        </section>
        {honeyPotErrors && honeyPotErrors.length > 0 && (
          <Errors errors={honeyPotErrors} />
        )}
        <input type="text" id="nobot" name="website" defaultValue="" />
        <section className="flex justify-end">
          <Button type="submit" backgroundType="solid">
            Send Message
          </Button>
        </section>
      </form>
    </>
  );
};

const Label = ({ htmlFor, children }: Label) => (
  <label
    htmlFor={htmlFor}
    className="text-base font-medium tracking-wider uppercase text-black dark:text-white"
  >
    {children}
  </label>
);

const TextInput = ({
  name,
  id,
  errors = [],
  required,
  type = "text",
}: Input) => {
  const baseClasses =
    "h-11 border-2 px-2 bg-white dark:bg-transparent text-base text-black dark:text-white";
  if (errors.length > 0) {
    return (
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor={id}>{name}</Label>
        <input
          type="text"
          id={id}
          name={id}
          className={`${baseClasses} border-red-800 dark:border-red-300`}
          required={required}
        />
        <Errors errors={errors} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <Label htmlFor={id}>{name}</Label>
      <input
        type={type}
        id={id}
        name={id}
        className={`${baseClasses} border-black dark:border-white`}
        required={required}
      />
    </div>
  );
};

const TextArea = ({ name, id, errors = [], required }: Input) => {
  const baseClasses =
    "h-11 border-2 p-2 bg-white dark:bg-transparent text-base text-black dark:text-white min-h-32";
  if (errors.length > 0) {
    return (
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor={id}>{name}</Label>
        <textarea
          id={id}
          name={id}
          className={`${baseClasses} border-red-800 dark:border-red-300`}
          required={required}
        ></textarea>
        <Errors errors={errors} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <Label htmlFor={id}>{name}</Label>
      <textarea
        id={id}
        name={id}
        className={`${baseClasses} border-black dark:border-white`}
        required={required}
      ></textarea>
    </div>
  );
};

const Errors = ({ errors }: Error) => {
  const errorString = errors.join(", ");

  if (!errors || errors.length === 0) null;

  return (
    <p className="text-red-800 dark:text-red-300 font-medium">{errorString}</p>
  );
};
export default ContactForm;
