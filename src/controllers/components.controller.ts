import { ParameterizedContext } from "koa";

import { Component } from "../models/component.model";

const getAll = async (ctx: ParameterizedContext) => {
  ctx.body = await Component.find();
};

const getById = async (ctx: ParameterizedContext) => {
  try {
    const result = await Component.findById(ctx.params.id);

    if (result) {
      ctx.body = result;
    }
  } catch (error) {
    ctx.body = error.message;
  }
};

const create = async (ctx: ParameterizedContext) => {
  try {
    const component = new Component(ctx.request.body);
    ctx.body = await component.save();
  } catch (error) {
    ctx.body = error.message;
  }

  const data = ctx.request.body;
  ctx.body = { name: data.name };
};

const update = async (ctx: ParameterizedContext) => {
  try {
    const result = await Component.findByIdAndUpdate(
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
    const result = await Component.findByIdAndDelete(ctx.params.id);

    if (result) {
      ctx.body = result;
    }
  } catch (error) {
    ctx.body = error.message;
  }
};

export { getAll, getById, create, update, remove };
