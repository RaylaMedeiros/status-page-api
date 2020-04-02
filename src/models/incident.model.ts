import { model, Schema } from "mongoose";

const IncidentSchema = new Schema({
  name: { type: String, required: true },
  description: String,
});

export const Incident = model("Incident", IncidentSchema);
