import Button from "~components/Button/Button";

export const Hero = () => (
  <section className="flex flex-col items-center justify-center min-h-[350px] bg-blooper dark:bg-prettyDark w-full">
    <h1 className="text-white font-serif text-4xl lg:text-5xl mb-2">
      Ditch the search.
    </h1>
    <h2 className="text-white text-xl lg:text-2xl mb-6 lg:mb-8">
      Land your best hire today.
    </h2>
    <Button href="#about" backgroundType="clear">
      Meet Sunjay
    </Button>
  </section>
);
