"use client";
import TopicsList from "@/components/TopicsList";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Page = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("https://next-crud-bjir.vercel.app/api/task");
      const obj = res.data;
      setData(obj.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [data]);

  return data.map((task, i) => (
    <TopicsList key={i} id={task._id} tit={task.title} desc={task.description} />
  ));
};

export default Page;
