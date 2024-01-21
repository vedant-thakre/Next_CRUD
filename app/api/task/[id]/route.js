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