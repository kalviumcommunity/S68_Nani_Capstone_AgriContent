const Market = require("../Model/Market");


const getMarkets = async (req, res) => {
  try {
    const markets = await Market.find();
    res.status(200).json(markets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports =  getMarkets ;


