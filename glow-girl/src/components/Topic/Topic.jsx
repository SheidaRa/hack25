import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Topic.css";

const Topic = () => {
  const topic = useSelector((store) => store.selectedTopic);
  return (
    <div>
      <h1>{topic.title}</h1>
      <p>{topic.description}</p>
    </div>
  );
};

export default Topic;
