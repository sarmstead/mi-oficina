export const colorSwitcher = (
  theme: string,
  darkColor: string,
  lightColor: string,
) => (theme === "dark" ? darkColor : lightColor);

export const generateRecaptchaToken = () => {
  grecaptcha.enterprise.ready(async () => {
    const token = await grecaptcha.enterprise.execute(
      "6Le602MpAAAAAKgFQu1sy1TyAvev6FoPTZCA-hgJ",
      { action: "contact_submit" },
    );
    sessionStorage.setItem("token", token);
  });
};
