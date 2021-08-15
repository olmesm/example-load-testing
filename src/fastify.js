const delay = require("delay");

const SECONDS = 3;

const fastify = require("fastify")();

fastify.get("/", async (_, reply) => {
  await delay(SECONDS);

  reply.send("done!");
});

fastify.listen(3000, (err, address) => {
  if (err) throw err;
  console.log(`Server is now listening on ${address}`);
});
