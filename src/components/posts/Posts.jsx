import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Posts.css';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import { findPostsAsyncActionCreator } from '../../store/modules/posts/action';

const Posts = (props) => {

    const dispatch = useDispatch();
    const postModule = useSelector(store => store.posts);

    useEffect(() => {
        dispatch(findPostsAsyncActionCreator());
    }, []);

    return (
        <div className="posts">
            <Container>
                <Row>
                    <Col className="container page-top">
                        <Row>
                            {postModule.data.map(post => (
                                <Col xs="6" md="4" lg="3" key={post.id} className="thumb mt-4 mb-4">
                                    <a href={post.url}>
                                        <img className="img-fluid" alt={post.title} src={post.image_url} />
                                    </a>
                                </Col>
                            ))} 
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Posts;