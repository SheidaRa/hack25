import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CategoryPage.css';
import Header from '../Header/Header';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';

function CategoryPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const category = useSelector(store => store.selectedCategory);

    let goToDashboard = topic => {
        // save topic obj to reducer
        dispatch({ type: 'SET_TOPIC', payload: topic });

        // route user to Dashboard
        navigate('/topic');
    }

    return (
        <>
        <Header/>
            <div id="summary">
            <h1>{category.title}</h1>
            <p>{category.summary}</p>
            </div>
            
            <div id="articles">
            <Container fluid>
                <Row>
            {category?.topics?.map((topic, i) => (
                <Col key={i} lg={true}><button className='article-button' onClick={() => goToDashboard(topic)}>{topic.title}</button></Col>
            ))}
            </Row>
            </Container>
            </div>
        
        </>
    )
}

export default CategoryPage;