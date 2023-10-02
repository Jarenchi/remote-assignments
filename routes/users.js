import express from "express";
import { getUser, createUser } from "../database.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    return res.status(404).send("Invalid Id. It must be a number.");
  }
  try {
    const user = await getUser(id);
    if (!user) {
      return res.status(400).send("User not existing");
    }
    const response = {
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        "request-date": new Date().toUTCString(),
      },
    };
    res.json(response);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const nameRegex = /^[A-Za-z0-9]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~`!@#$%^&*()_\-+={[}\]|:;"'<,>.?/]).{1,}$/;
    if (typeof name !== "string" || !nameRegex.test(name)) {
      return res.status(400).send("Name must only contain English alphabet and numbers.");
    }
    if (typeof email !== "string" || !emailRegex.test(email)) {
      return res.status(400).send("Invalid email format.");
    }
    if (typeof password !== "string" || !passwordRegex.test(password)) {
      return res
        .status(400)
        .send(
          "Invalid password. Passwords should contain at least three of the four character types: Uppercase letters, Lowercase letters, Numbers, Symbols.",
        );
    }
    const user = await createUser(name, email, password);
    const response = {
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        "request-date": new Date().toUTCString(),
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
