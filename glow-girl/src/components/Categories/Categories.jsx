import Data from '../../data.json'; 
import { Container, Row, Col } from 'react-bootstrap';
import './Categories.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CategoryListItem from '../CategoryListItem/CategoryListItem';

function Categories() {

    return (
        <div id="categories">
            <Header />
            <h1>Categories</h1>
            <Container fluid>
            <Row>
            {Data.categories.map((category, i) => (
                <Col key={i} lg={true}><CategoryListItem category={category} /></Col>
            ))}
            </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Categories;