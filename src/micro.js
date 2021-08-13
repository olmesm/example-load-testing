const { sleep } = require("sleep");

const SECONDS = 3;

module.exports = async () => {
  await sleep(SECONDS);

  return "done!";
};
