import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './LoginForm.css';
import { loginAsyncActionCreator } from '../../store/modules/login/actions';
import {
    Container,
    Form,
    Col,
    Input,
    Button,
    Label,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

const LoginForm = (props) => {
    const store = useSelector(store => store);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerSubmit = (event) => {
        event.preventDefault();
        dispatch(loginAsyncActionCreator({
            email,
            password,
        }))
    }

    useEffect(() => {
        if (store.login.isLogin) {
            props.history.push('/private/home');
        }
    }, [store.login.isLogin, props]);

    return (
        <div className="login-form">
            <Container className="mt-4">
                <h2>S I N G &nbsp; I N</h2>
                <Form className="mt-4" onSubmit={handlerSubmit}>
                    <Col xs="12" md={{ size: 4, offset: 4 }}>
                        <Label>U S E R </Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <FontAwesomeIcon icon={faUser} />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="username"
                                onChange={({ target }) => setEmail(target.value) }
                            />
                        </InputGroup>
                        <br/>
                        <Label>P A S S W O R D</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <FontAwesomeIcon icon={faLock} />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                type="password"
                                name="password"
                                value={password}
                                placeholder="********"
                                onChange={({ target }) => setPassword(target.value) }
                            />
                        </InputGroup>
                    </Col>
                    <Col className="mt-4">
                        <Button>Login</Button>
                    </Col>
                </Form>
            </Container>
        </div>
    )
}

export default LoginForm;