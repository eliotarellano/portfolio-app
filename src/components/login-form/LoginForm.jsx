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
    Alert
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

const LoginForm = (props) => {
    const store = useSelector(store => store);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);

    const onDismiss = () => setVisible(false);

    const handlerSubmit = (event) => {
        event.preventDefault();
        if ( email && password) {
            dispatch(loginAsyncActionCreator(email, password))
        } else {
            setVisible(true);
        }
    }

    useEffect(() => {
        if (store.login.isLogin) {
            props.history.push('/private/home');
        }
    }, [store.login.isLogin, props]);

    return (
        <div className="login-form">
            <Container className="mt-4">
                <h4 className="text-center py-4">S I G N &nbsp; I N</h4>
                <Form className="mt-4">
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
                                placeholder="email"
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
                    <Col className="text-center py-4 mt-2">
                        <Button
                            type="button"
                            color="danger"
                            className="transition-3d-hover"
                            onClick={handlerSubmit}
                        >
                            Login
                        </Button>
                    </Col>
                    <Col className="text-center">
                        <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                            Invalid fields.
                        </Alert>
                    </Col>
                </Form>
            </Container>
        </div>
    )
}

export default LoginForm;