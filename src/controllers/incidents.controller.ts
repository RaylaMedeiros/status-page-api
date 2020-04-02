import { ParameterizedContext } from "koa";

import { Incident } from "../models/incident.model";

const getAll = async (ctx: ParameterizedContext) => {
  ctx.body = await Incident.find();
};

const getById = async (ctx: ParameterizedContext) => {
  try {
    const result = await Incident.findById(ctx.params.id);

    if (result) {
      ctx.body = result;
    }
  } catch (error) {
    ctx.body = error.message;
  }
};

const create = async (ctx: ParameterizedContext) => {
  try {
    const incident = new Incident(ctx.request.body);
    ctx.body = await incident.save();
  } catch (error) {
    ctx.body = error.message;
  }

  const data = ctx.request.body;
  ctx.body = { name: data.name };
};

const update = async (ctx: ParameterizedContext) => {
  try {
    const result = await Incident.findByIdAndUpdate(
      ctx.params.id,
      ctx.request.body,
      { new: true }
    );

    if (result) {
      ctx.body = result;
    }
  } catch (error) {
    ctx.body = error.message;
  }
};

const remove = async (ctx: ParameterizedContext) => {
  try {
    const result = await Incident.findByIdAndDelete(ctx.params.id);

    if (result) {
      ctx.body = result;
    }
  } catch (error) {
    ctx.body = error.message;
  }
};

export { getAll, getById, create, update, remove };
