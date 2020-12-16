const hbs = require("hbs");

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("setCapitalize", (text) => {
  let words = text.split(" ");
  words.forEach((word, index) => {
    words[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return words.join(" ");
});
