export const start = () => {
  const container = `\n<div class="codeblock__container">`;

  const titleWrapper = `<div class="codeblock__title">`;

  const icon = `<img src="https://cdn.sanity.io/images/q3yrxlwb/production/2e286e4dc81676efe55617ac18ec6a30174632e1-44x44.svg" alt="White file icon" />`;

  return container + titleWrapper + icon;
};

export const end = () => "</div></div>";
