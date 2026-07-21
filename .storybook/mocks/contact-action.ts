type ContactState = {
  errors: unknown[];
  message: string;
  status: number;
};

export const contactAction = async (
  _prevState: ContactState,
  _params: FormData,
): Promise<ContactState> => ({
  errors: [],
  message: "",
  status: 200,
});
