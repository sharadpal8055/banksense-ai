import Banker from "../models/Banker.js";

import bcrypt from "bcryptjs";

import { generateToken } from "../utils/token.js";

// REGISTER

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await Banker.findOne({
      email,
    });

    if (exists) {
      return res.status(400).json({
        message: "Banker already exists",
      });
    }

    const hash = await bcrypt.hash(password, 10);

    const banker = await Banker.create({
      name,
      email,

      password: hash,
    });

    const token = generateToken(banker._id);

    res.cookie(
      "token",

      token,

      {
        httpOnly: true,

        secure: false,

        sameSite: "lax",
      },
    );

    res.status(201).json({
      success: true,

      banker: {
        id: banker._id,

        name: banker.name,

        email: banker.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// LOGIN

export const login = async (req, res) => {
  try {
    const {
      email,

      password,
    } = req.body;

    const banker = await Banker.findOne({
      email,
    });

    if (!banker) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const match = await bcrypt.compare(
      password,

      banker.password,
    );

    if (!match) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = generateToken(banker._id);

    res.cookie(
      "token",

      token,

      {
        httpOnly: true,

        secure: false,

        sameSite: "lax",
      },
    );

    res.json({
      success: true,

      banker: {
        id: banker._id,

        name: banker.name,

        email: banker.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// LOGOUT

export const logout = (req, res) => {
  res.clearCookie("token");

  res.json({
    success: true,

    message: "Logged out",
  });
};
