import api from "./api";

export const askAssistant = (data) => {
  return api.post(
    "/ai/ask",

    data,
  );
};
