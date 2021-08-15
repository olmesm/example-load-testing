const delay = require("delay");

const SECONDS = 3;

module.exports = async () => {
  await delay(SECONDS);

  return "done!";
};
