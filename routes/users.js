import express from "express";
import { getUser, createUser } from "../database.js";
import { checkContentType, checkRequestDate } from "../middleware/middleware.js";
import { isValidName, isValidEmail, isValidPassword } from "../utils/utils.js";
const router = express.Router();

router.get("/:id", checkContentType, checkRequestDate, async (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    return res.status(404).send("Invalid Id. It must be a number.");
  }
  try {
    const user = await getUser(id);
    if (!user) {
      return res.status(400).send("User not existing");
    }
    const requestDate = req.get("Request-Date");
    const response = {
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        "request-date": requestDate,
      },
    };
    res.json(response);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", checkContentType, checkRequestDate, async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!isValidName(name)) {
      return res.status(400).send("Name must only contain English alphabet and numbers.");
    }
    if (!isValidEmail(email)) {
      return res.status(400).send("Invalid email format.");
    }
    if (!isValidPassword(password)) {
      return res
        .status(400)
        .send(
          "Invalid password. Passwords should contain at least three of the four character types: Uppercase letters, Lowercase letters, Numbers, Symbols.",
        );
    }
    const user = await createUser(name, email, password);
    const requestDate = req.get("Request-Date");
    const response = {
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        "request-date": requestDate,
      },
    };
    res.send(response);
  } catch (error) {
    if (error.status === 409) {
      res.status(409).send("Email Already Exists");
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
});

export default router;
