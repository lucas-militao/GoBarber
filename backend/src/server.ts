import express from "express";

const app = express();

app.get("/", (request, response) => response.json({ message: "Hello Lucas" }));

app.listen(3333, () => {
  console.log("🎶SServer started on port 3333!");
});
