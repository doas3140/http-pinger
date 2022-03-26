"use strict";

const ping = require("ping");
const Koa = require("koa");

const app = new Koa();

app.use(async (ctx) => {
  const host = ctx.url.slice(1);
  if (!ValidateIPaddress(host))
    return ctx.throw(400, `${host} is bad ip address`);
  let res = await ping.promise.probe(host, {
    timeout: 10,
    extra: ["-i", "2"],
  });
  if (res.alive) {
    ctx.status = 200;
    ctx.body = `${host} is alive`;
  } else {
    ctx.throw(400, `${host} is not alive`);
  }
});

const port = 8010;
app.listen(port);
console.log(`Running app on ${port} port`);

function ValidateIPaddress(ipaddress) {
  return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
    ipaddress
  );
}
