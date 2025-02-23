// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "./Topic.css";

// const Topic = () => {
//   const topic = useSelector((store) => store.selectedTopic);
//   return (
//     <div>
//       <h1>{topic.title}</h1>
//       <p>{topic.description}</p>
//     </div>
//   );
// };

// export default Topic;
import React from "react";
import { useSelector } from "react-redux";
import "./Topic.css";
import NearbySheltersMap from "../map/mymap";
import ResourcesPage from "../resourcespage/resourcespage";

const Topic = () => {
  const topic = useSelector((store) => store.selectedTopic);

  if (topic.path === "map") {
    return <NearbySheltersMap/>;
  } else if (topic.path === "Resources") {
    return <ResourcesPage />;
  }

  return (
    <div>
      <h1>{topic.title}</h1>
      <p>{topic.description}</p>
    </div>
  );
};

export default Topic;
