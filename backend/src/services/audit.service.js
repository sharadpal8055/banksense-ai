import AuditLog from "../models/AuditLog.js";

export const createAudit = async (data) => {
  try {
    await AuditLog.create(data);
  } catch (error) {
    console.log("Audit Failed", error.message);
  }
};
