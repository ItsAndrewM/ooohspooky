const Parser = require("rss-parser");
const parser = new Parser();

const getRssFeed = async () => {
  const feed = await parser.parseURL("https://ooohspooky.libsyn.com/rss");
  const keys = Object.keys(feed);
  console.log(feed.image);
  for await (const item of feed.items) {
    // console.log(item);
  }
};

getRssFeed();

module.exports = { getRssFeed };
