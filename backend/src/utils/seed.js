import mongoose from "mongoose";

import dotenv from "dotenv";

import Prospect from "../models/Prospect.js";

import { demoProspects } from "../data/demoProspects.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

async function seed() {
  try {
    await Prospect.deleteMany();

    await Prospect.insertMany(demoProspects);

    console.log("Demo data inserted");

    process.exit();
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
}

seed();
