const express = require("express");
const cors = require("cors");
const data = require("./db/db.json");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, this is the RTK Query server!");
});

// API
app.get("/api", (req, res) => res.status(200).json(data));
app.get("/api/:id", (req, res) => {
  const filteredData = data.find((ele) => ele.id === Number(req.params.id));
  if (filteredData !== undefined) {
    res.status(200).json(filteredData);
  } else {
    res.status(404).json({ message: `No data found for id: ${req.params.id}` });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
