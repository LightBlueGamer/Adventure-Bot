require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

app.use(express.json());
app.use(express.static("docs"));

const api = require("./api/api");
app.use("/api", api);

app.get("/", (req, res) => res.send("Dashboard is currently not done"));
app.get("/apidocs", (req, res) => res.sendFile(path.resolve("", "./docs/index.html")));

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
