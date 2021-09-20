const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("docs"));

const dir = fs.readdirSync(__dirname + "/routes");
for (const file of dir) {
    const fileName = file.replace(".js", "");
    app.use(`/api/${fileName}`, require(`./routes/${file}`));
}

app.get("/", (req, res) => res.send("Dashboard is currently not done"));
app.get("/apidocs", (req, res) => res.sendFile(path.resolve("", "./docs/index.html")));

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
console.log(`API was successfully loaded!`)