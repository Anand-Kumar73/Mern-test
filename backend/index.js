import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
const PORT = 3000;

import { validStudent, CommonCheck } from "./middlewere/middlewere.js";
import { student, events } from "./db/db.js";

app.post("/login", validStudent, CommonCheck, (req, res) => {
  const newStudent = {
    email: req.body.email,
    password: req.body.password,
  };
  student.push(newStudent);
  res.status(201).json(newStudent);
});

app.get("/events", (req, res) => {
  res.status(200).json(events);
});

app.get("/events/:id", (req, res) => {
  const id = Number(req.params.id);
  const event = events.find((e) => e.id === id);
  res.json(event);
});

app.post("/events", (req, res) => {
  const newEvents = {
    id: req.body.id,
    Eventname: req.body.Eventname,
    Category: req.body.Category,
    Location: req.body.Location,
    Date: req.body.Date,
    Description: req.body.Description,
  };
  events.push(newEvents);
  res.status(201).json(newEvents);
});

app.listen(PORT, () => {
  console.log("server is running on 3000");
});
