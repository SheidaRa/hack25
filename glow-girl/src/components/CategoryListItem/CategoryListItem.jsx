import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./CategoryListItem.css";

function CategoryListItem({ topic }) {
  // Changed from category to topic
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToCategoryPage = () => {
    // save topic obj to reducer
    dispatch({ type: "SET_TOPIC", payload: topic });

    // route user to topic page
    navigate("/topic");
  };

  return (
    <div className="category-item">
      <button className="category-button" onClick={goToCategoryPage}>
        <h3>{topic.title}</h3>
      </button>
    </div>
  );
}
export default CategoryListItem;
