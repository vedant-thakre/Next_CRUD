import { connectDB } from "@/db/mongodb";
import Task from "@/models/taskModel";
import { NextResponse } from "next/server";


export async function PUT(req , { params }) {
  const { id } = params;
  const { title, description } = await req.json();
  await connectDB();
  const updatedTask = await Task.findByIdAndUpdate(
        id,
    {
        title:title,
        description:description,
    }
  );
  console.log(updatedTask);
  return NextResponse.json(
    {
      status: true,
      messaage: "Tasks Updated successfully",
      data: updatedTask,
    },
    { status: 201 }
  );
}

// get single topic by ID
export async function GET(req, { params }) {
  const { id } = params;
  await connectDB();
  const task = await Task.findById(id);
  console.log(task);
  return NextResponse.json(
    {
      status: true,
      messaage: "Tasks Found",
      data: task,
    },
    { status: 201 }
  );
}