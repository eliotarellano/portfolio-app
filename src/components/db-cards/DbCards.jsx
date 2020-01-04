import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './DbCards.css';
import {
    Container,
    Col,
    Row,
    Card,
    CardTitle,
    CardText,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIcons, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { findPostsAsyncActionCreator } from '../../store/modules/posts/action';
import { findDataAsyncActionCreator } from '../../store/modules/skill/action';

const DbCards = () => {
    const dispatch = useDispatch();
    const skillModule = useSelector(store => store.skills.data);
    const postModule = useSelector(store => store.posts.data);

    useEffect(() => {
        dispatch(findPostsAsyncActionCreator());
        dispatch(findDataAsyncActionCreator());
    }, []);
    
    const skillNumber = skillModule.length;
    const postNumber = postModule.length;

    return (
        <div className="db-cards">
            <Container className="mt-4 mb-4">
                <Col xs="12" md={{size:8, offset:2}}>
                    <Row>
                        <Col sm="6" className=" mt-2 mb-2 mt-sm-2 mb-sm-0">
                            <Card body>
                                <CardText>S K I L L S</CardText>
                                <CardTitle className="form-inline">
                                    <Col md="6">
                                        <h2 className="db-cards-custom-title">{skillNumber}</h2>
                                    </Col>
                                    <Col md="6" className="d-flex justify-content-end">
                                        <FontAwesomeIcon className="db-cards-custom-title" icon={faLaptopCode} size="3x" />
                                    </Col>
                                </CardTitle>
                            </Card>
                        </Col>
                        <Col sm="6" className=" mt-2 mb-2 mt-sm-2 mb-sm-0">
                            <Card body>
                                <CardText>P O S T S</CardText>
                                <CardTitle className="form-inline">
                                    <Col md="6">
                                        <h2 className="db-cards-custom-title">{postNumber}</h2>
                                    </Col>
                                    <Col md="6" className="d-flex justify-content-end">
                                        <FontAwesomeIcon className="db-cards-custom-title" icon={faIcons} size="3x" />
                                    </Col>
                                </CardTitle>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </div>
    )
};

export default DbCards;