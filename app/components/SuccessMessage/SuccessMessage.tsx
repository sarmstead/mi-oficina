const SuccessMessage = () => (
  <section className="max-w-[710px] m-auto flex flex-col gap-3 bg-green-200 p-6">
    <h2 className="text-3xl font-serif text-black">Success!</h2>
    <p>
      Thank you for your message! I&apos;ll respond back as soon as I can. In
      the meantime, how about we&nbsp;
      <a
        href="https://www.linkedin.com/in/sunjayarmstead/"
        target="_blank"
        className="underline"
      >
        connect on LinkedIn?
      </a>
    </p>
  </section>
);

export default SuccessMessage;
