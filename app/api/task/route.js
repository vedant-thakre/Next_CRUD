import { connectDB } from "@/db/mongodb";
import Task from "@/models/taskModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { title, description } = await req.json();
    await connectDB();
    const task = await Task.create({
        title,
        description,
    })
    console.log(task);
    return NextResponse.json({ 
        status: true,
        messaage: "Tasks Fetched successfully",
        data: task, 
    },
    { status: 201 },
    );
}

export async function GET(req) {
  await connectDB();
  const tasks = await Task.find();
  return NextResponse.json({ 
        status: true,
        messaage: "Tasks Fetched successfully",
        data: tasks, 
    },
    { status: 201 }
  );
}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id");
    await connectDB();
    try {
        const task = await Task.findById(id);
        if (!task) {
            return NextResponse.json({
                    status: false,
                    messaage: "Task not found",
                },
                { status: 404 }
            );
        }

        await Task.findByIdAndDelete(id);

        return NextResponse.json(
            {
                status: true,
                messaage: "Task Deleted successfully",
                data: task,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error deleting task:", error);
        return NextResponse.json(
            {
                status: false,
                messaage: "Error deleting task",
            },
            { status: 500 }
        );
    }
}