let express = require("express");
let app = express();

app.use("/public", express.static("public"));
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  res.render("index");
});
app.listen(3000);
