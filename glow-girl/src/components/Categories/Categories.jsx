import Data from "../../data.json";
import { Container, Row, Col } from "react-bootstrap";
import "./Categories.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CategoryListItem from "../CategoryListItem/CategoryListItem";

function Categories() {
  return (
    <div id="categories">
      <Header />
      <Container>
        <h1>Categories</h1>
        {Data.categories.map((category, i) => (
          <div key={i}>
            <h2>{category.title}</h2>
            <p>{category.summary}</p>
            <Row>
              {category.topics.map((topic, j) => (
                <Col key={j} md={6} lg={4}>
                  <CategoryListItem topic={topic} />
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
      <Footer />
    </div>
  );
}

export default Categories;
