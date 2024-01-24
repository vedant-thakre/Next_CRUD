"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const addTask = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and Description are required");
      return;
    }
    try {
      // Make a POST request to your API endpoint
      console.log("Request Payload:", { title, description });
      const res = await axios.post("http://localhost:3000/api/task", {
          title,
          description,
        }, {
          headers: {
            "Content-Type": "application/json",
          },
      });

      // Log the response and navigate to the home page on success
      console.log(res.data);
      router.push("/");
    } catch (error) {
      // Handle errors and log them
      console.error("Error adding task:", error);
    }
  };

  return (
    <form onSubmit={addTask} className="flex flex-col gap-3">
      <input
        className="border border-slate-500 rounded-sm px-8 py-2"
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        className="border border-slate-500 rounded-sm px-8 py-2"
        type="text"
        placeholder="Description"
        value={description}
        name="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        className="bg-green-600 fontbold text-white py-3 px-6
        w-fit rounded-md cursor-pointer"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
};

export default Page;