const express = require("express");

const app = express();
const hbs = require("hbs");
require("./helpers/helpers");

const port = process.env.PORT || 3000;

// Middleware
app.use(express.static(__dirname + "/public"));

// Express HBS engine
hbs.registerPartials(__dirname + "/views/partials");
// hbs.registerHelper("getCurrentYear", () => {
//   return new Date().getFullYear();
// });
// hbs.registerHelper("setCapitalize", (text) => {
//   let words = text.split(" ");
//   words.forEach((word, index) => {
//     words[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   });

//   return words.join(" ");
// });
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index.hbs", {
    namePage: "INDEX",
    // currentYear: new Date().getFullYear(),
  });
});

app.get("/home", (req, res) => {
  res.render("home");
});

// app.get("/", (req, res) => {
//   //   res.send("hello express!");

//   let outputJson = {
//     name: "gustavo",
//     age: 40,
//     isMale: true,
//     url: req.url,
//     httpVersion: req.httpVersion,
//   };

//   res.send(outputJson);
// });

app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});
