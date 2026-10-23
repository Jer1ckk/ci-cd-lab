import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello, GitHub Actions!");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "success",
  });
});

app.get("/healthRoute", (req, res) => {
  res.status(200).json({
    status: "successful",
  });
});

export default app;
