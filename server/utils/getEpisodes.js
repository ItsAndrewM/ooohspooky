const Parser = require("rss-parser");
const parser = new Parser();

const getEpisodes = async () => {
  const feed = await parser.parseURL("https://ooohspooky.libsyn.com/rss");
  return feed.items;
};

module.exports = { getEpisodes };
