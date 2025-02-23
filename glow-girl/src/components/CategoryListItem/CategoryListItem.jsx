// TODO import for client-side routing (useHistory?)
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./CategoryListItem.css";

function CategoryListItem({ category }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let goToCategoryPage = () => {
    // save category obj to reducer
    dispatch({ type: "SET_CATEGORY", payload: category });

    // route user to CategoryPage
    navigate("/summary");
  };

  return (
    <>
      <button className="category-button" onClick={goToCategoryPage}>
        {category.title}
      </button>
    </>
  );
}

export default CategoryListItem;
