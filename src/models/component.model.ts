import { model, Schema } from "mongoose";

const ComponentSchema = new Schema({
  name: { type: String, required: true },
  description: String,
});

export const Component = model("Component", ComponentSchema);
