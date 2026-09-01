import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
const PORT = 3000;

import { validStudent} from "./middleware/middleWare.js";
import student from "./db/db.js";
import events from "./db/db.js";

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

app.get("events", (req, res) => {
  res.status(200).json(events);
});

app.get("/events/:id",  (req, res) => {
  const id = Number(req.params.id);
  const user1 = events.find((user) => user.id === id);
  res.json(user1);
});

app.post("/events", (req, res) => {
  const newEvents = {
    id: req.body.id,
    Eventname: req.body.Eventname,
    Category: req.body.Category,
    Location: req.body.Location,
    Description: req.body.Description,
  };
  events.push(newEvents);
  res.status(201).json(newEvents);
});

app.get("/events", common, (req, res) => {
  res.json(events);
});

app.get("/events/:id", common, (req, res) => {
  const id = Number(req.params.id);
  const event1 = events.find((enevt) => events.id === id);
  res.json(event1);
});

app.listen(PORT, () => {
  console.log("server is running on 3000");
});