const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { handleGetEpisodes } = require("./handlers/handleGetEpisodes");

const port = 8000;

express()
  .use(express.json())
  .use(helmet())
  .use(morgan("dev"))

  .get("/", (req, res) => {
    res.status(200).json({ status: 200, message: "hello world" });
  })

  .get("/episodes/all", handleGetEpisodes)

  .listen(port, () => {
    console.log(`Oooh Spooky listening on port ${port}`);
  });
