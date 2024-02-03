type HeaderProps = {
  lightBackground?: string;
  darkBackground?: string;
  title: string;
  subtitle: string;
};

const PageHeader = ({
  lightBackground = "bg-black",
  darkBackground = "dark:bg-prettyDark",
  title,
  subtitle,
}: HeaderProps) => {
  return (
    <header
      className={`${lightBackground} ${darkBackground} min-h-[350px] flex flex-col justify-center px-5 md:px-10 lg:px-0`}
    >
      <div className="w-full max-w-[954px] mx-auto flex flex-col gap-4">
        <h1 className="font-serif text-white text-4xl lg:text-5xl">{title}</h1>
        <p className="text-base text-white w-full max-w-[589px]">{subtitle}</p>
      </div>
    </header>
  );
};

export default PageHeader;
