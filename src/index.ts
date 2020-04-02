/* eslint-disable no-console */
import Koa from "koa";
import logger from "koa-logger";
import json from "koa-json";
import bodyParser from "koa-bodyparser";
import mongoose from "mongoose";
import dotenv from "dotenv";

import componentsRouter from "./routes/components.router";
import incidentsRouter from "./routes/incidents.router";

dotenv.config();

mongoose.connect("mongodb://localhost/my_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to the DB!");
});

const app = new Koa();

// Middlewares
app.use(json());
app.use(logger());
app.use(bodyParser());

// Routes
app.use(componentsRouter.routes()).use(componentsRouter.allowedMethods());
app.use(incidentsRouter.routes()).use(incidentsRouter.allowedMethods());

const port = 3000;

app.listen(port, () => {
  console.log("Koa started");
});
