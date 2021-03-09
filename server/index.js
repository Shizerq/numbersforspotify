const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("<h1>Hey, it's working!</h1>");
});

app.get("/api/spotify-credentials", (req, res) => {
  const { clientId } = process.env;
  const { clientSecret } = process.env;
  const spotifyCredentials = { clientId, clientSecret };
  res.json(spotifyCredentials);
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
