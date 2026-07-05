import api from "./api";

export const sendFeedback = (data) => {
  return api.post(
    "/feedback",

    data,
  );
};
