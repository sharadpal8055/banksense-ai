import api from "./api";



export const getAuditLogs = ()=>{


return api.get(
"/compliance/audit"
);


};