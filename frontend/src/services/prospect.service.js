import api from "./api";

export const getProspects = () => {
  return api.get("/prospects");
};

export const addProspect = (data) => {
  return api.post(
    "/prospects",

    data,
  );
};
export const getProspectDetails =
(id)=>{

return api.get(
`/prospects/${id}`
);

};