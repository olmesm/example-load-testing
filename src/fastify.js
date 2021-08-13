const { sleep } = require("sleep");

const SECONDS = 3;

const fastify = require("fastify")();

fastify.get("/", async (_, reply) => {
  await sleep(SECONDS);

  reply.send("done!");
});

fastify.listen(3000, (err, address) => {
  if (err) throw err;
  console.log(`Server is now listening on ${address}`);
});
