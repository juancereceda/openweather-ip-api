const getLocation = async (req, res) => {
  try {
    res.json({ message: "getLocation" });
  } catch (error) {}
};

module.exports = {
  getLocation,
};
