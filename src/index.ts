/* eslint-disable no-console */
import * as Koa from "koa";
import * as Router from "koa-router";
import * as logger from "koa-logger";
import * as json from "koa-json";
import * as bodyParser from "koa-bodyparser";

interface HelloRequest {
  name: string;
}

const app = new Koa();
const router = new Router();

router.post("/", async (ctx, next) => {
  const data = ctx.request.body as HelloRequest;
  ctx.body = { name: data.name };

  await next();
});

// Middlewares
app.use(json());
app.use(logger());
app.use(bodyParser());

// Routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("Koa started");
});
