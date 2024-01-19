import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

let Task;

if (mongoose.models && mongoose.models.Task) {
  Task = mongoose.model("Task");
} else {
  Task = mongoose.model("Task", TaskSchema);
}

export default Task;
