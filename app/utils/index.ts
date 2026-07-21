type Author = {
  firstName: string;
  lastName: string;
};

export const colorSwitcher = (
  theme: string,
  darkColor: string,
  lightColor: string,
) => (theme === "dark" ? darkColor : lightColor);

export const formattedBlogDate = (date: string | number | Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const authorsAsString = (authors: Author[]) => {
  return authors.map((author: Author) => {
    return `${author.firstName} ${author.lastName}`;
  });
};
