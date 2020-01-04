import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SkillListDelete.css';
import { 
    Container,
    Row,
    Button,
    Label,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheck,
    faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { deleteSkillAsyncActionCreator } from '../../store/modules/skill/action';

const SkillListDelete = (props) => {
    const {
        className
    } = props;
    const dispatch = useDispatch();
    const skillModule = useSelector(store => store.skills.data);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const handlerOnClick = () => {
        const data = skillModule;
        const newData = data.filter(skill => skill.id !== props.skill.id);
        const skillObj = {
            description: JSON.stringify(newData),
        }
        dispatch(deleteSkillAsyncActionCreator(skillObj))
        toggle();
        toggle();
    };

    return (
        <Fragment>
            <Button color="danger" className="btn-custom-sl" onClick={toggle}><FontAwesomeIcon icon={faTimes} /></Button>
            <Modal isOpen={modal} toggle={toggle} className={className} centered>
                <ModalHeader
                    className="bs-custom-modal-header"
                    toggle={toggle}
                >
                    <Label className="mt-2 bs-custom-modal-header">D E L E T E &nbsp; S K I L L</Label>
                </ModalHeader>
                <ModalBody>
                    <Container>
                        <Row>
                            ¿Are you sure you want to delete this skill?
                        </Row>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button
                        className="btn-custom-sle-p"
                        onClick={handlerOnClick}
                    >
                        <FontAwesomeIcon icon={faCheck} />
                    </Button>{' '}
                    <Button
                        className="btn-custom-sle-s"
                        onClick={toggle}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </Button>
                </ModalFooter>
            </Modal>
        </Fragment>
    )
};

export default SkillListDelete;