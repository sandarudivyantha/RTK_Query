const express = require("express");
const cors = require("cors");
const data = require("./db/db.json");
const app = express();
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, this is the RTK Query server!");
});

// API
// Get all data API
app.get("/api", (req, res) => res.status(200).json(data));
// Get data by id API
app.get("/api/:id", (req, res) => {
  const filterData = data.find((ele) => ele.id === Number(req.params.id));
  if (filterData !== undefined) {
    res.status(200).json(filterData);
  } else {
    res.status(404).json({ message: `No data found for id: ${req.params.id}` });
  }
});
// Create data API
app.post("/api", (req, res) => {
  const body = { id: data.length + 1, ...req.body };
  data.push(body);
  fs.writeFileSync(path.join(__dirname, "db/db.json"), JSON.stringify(data));
  res.status(201).json({ msg: "Data added successfully", data: body });
});
// Update data API
app.put("/api/:id", (req, res) => {
  const filterData = data.find((ele) => ele.id === Number(req.params.id));
  if (filterData !== undefined) {
    const updatedBody = { ...filterData, ...req.body };
    const updatedData = data.map((ele) => {
      if (ele.id === filterData.id) {
        return updatedBody;
      } else {
        return ele;
      }
    });
    fs.writeFileSync(
      path.join(__dirname, "db/db.json"),
      JSON.stringify(updatedData)
    );
    res
      .status(201)
      .json({ msg: "Data updated successfully", data: updatedBody });
  } else {
    res.status(404).json({ message: `No data found for id: ${req.params.id}` });
  }
});
// Delete data API
app.delete("/api/:id", (req, res) => {
  const filterData = data.find((ele) => ele.id === Number(req.params.id));
  if (filterData !== undefined) {
    data.forEach((ele, index) => {
      if (ele.id === filterData.id) {
        data.splice(index, 1);
      }
    });
    fs.writeFileSync(path.join(__dirname, "db/db.json"), JSON.stringify(data));
    res.status(201).json({ msg: "Data deleted successfully" });
  } else {
    res.status(404).json({ message: `No data found for id: ${req.params.id}` });
  }
});
// End of API

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
