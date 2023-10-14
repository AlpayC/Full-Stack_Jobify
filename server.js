import "express-async-errors";
import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
import { body, validationResult } from "express-validator";

dotenv.config();

import { nanoid } from "nanoid";

import jobRouter from "./routers/jobRouter.js";

import mongoose from "mongoose";

const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/api/v1/jobs", jobRouter);
app.use(errorHandlerMiddleware);

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end" },
  { id: nanoid(), company: "google", position: "back-end" },
];

app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ jobs });
});
app.use(express.json());
app.use(morgan("dev"));

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "something went wrong" });
});
app.post("/", (req, res) => {
  console.log(req);

  res.json({ message: "Data received", data: req.body });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

// GET ALL JOBS
app.get("/api/v1/jobs", (req, res) => {
  // console.log(jobss);
  res.status(200).json({ jobs });
});

// CREATE JOB
app.post("/api/v1/jobs", (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ msg: "please provide company and position" });
  }
  const id = nanoid(10);
  // console.log(id);
  const job = { id, company, position };
  jobs.push(job);
  res.status(200).json({ job });
});

// GET SINGLE JOB

app.get("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    throw new Error("no job with that id");
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  res.status(200).json({ job });
});

// EDIT JOB

app.patch("/api/v1/jobs/:id", (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ msg: "please provide company and position" });
  }
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  job.company = company;
  job.position = position;
  res.status(200).json({ msg: "job modified", job });
});

// DELETE JOB

app.delete("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;

  res.status(200).json({ msg: "job deleted" });
});

const port = process.env.PORT || 5100;
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
