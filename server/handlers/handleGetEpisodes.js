const { getEpisodes } = require("../utils/getEpisodes");

const handleGetEpisodes = async (req, res) => {
  try {
    const episodes = await getEpisodes();
    if (episodes) {
      res.status(200).json({
        status: 200,
        message: "episodes retrieved successfully",
        data: episodes,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "something went wrong, episodes were not retrieved",
        error: result,
      });
    }
  } catch (error) {
    return `ERROR: ${error}`;
  }
};

module.exports = { handleGetEpisodes };
