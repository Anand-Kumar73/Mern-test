import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
const PORT = 3000;

import { validStudent, common } from "./middleware/middleWare.js";
import student from "./db/db.js";

app.post("/login", validStudent, (req, res) => {
  const newStudent = {
    id: req.body.id,
    name: req.body.name,
    roll: req.body.roll,
    Branch: req.body.branch,
    contact: req.body.contact,
  };
  student.push(newStudent);
  res.status(201).json(newStudent);
});

app.listen(PORT, () => {
  console.log("server is running on 3000");
});