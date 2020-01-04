import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SkillListEdit.css';
import { 
    Container,
    Col,
    Row,
    Button,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPencilAlt,
    faCheck,
    faTimes,
    faCode,
    faPercent
} from '@fortawesome/free-solid-svg-icons'
import { updateSkillAsyncActionCreator } from '../../store/modules/skill/action';

const SkillListEdit = (props) => {
    const {
        className
    } = props;
    const dispatch = useDispatch();
    const skillModule = useSelector(store => store.skills.data);

    const [modal, setModal] = useState(false);
    const [name, setName] = useState(props.skill.name);
    const [percentage, setPercentage] = useState(props.skill.percentage);

    const toggle = () => setModal(!modal);

    const handlerOnClick = () => {
        const data = skillModule;
        const newSkill = {
            id: props.skill.id,
            name: name,
            percentage: percentage,
        }
        data.map(skill => {
            const i = data.findIndex(skill => skill.id === newSkill.id);
            data[i].name = newSkill.name;
            data[i].percentage = newSkill.percentage;
        });
        const skillObj = {
            description: JSON.stringify(data),
        }
        dispatch(updateSkillAsyncActionCreator(skillObj))
        setName('');
        setPercentage('');
        toggle();
    };

    return (
        <Fragment>
            <Button color="danger" className="btn-custom-sl" onClick={toggle}><FontAwesomeIcon icon={faPencilAlt} /></Button>
            <Modal isOpen={modal} toggle={toggle} className={className} centered>
                <ModalHeader
                    className="bs-custom-modal-header"
                    toggle={toggle}
                >
                    <Label className="mt-2 bs-custom-modal-header">E D I T &nbsp; S K I L L</Label>
                </ModalHeader>
                <ModalBody>
                    <Container>
                        <Row>
                            <Col sm="12" md="12" className="m-2">
                                <Label>
                                    <FontAwesomeIcon className="fa-custom-icon mr-3" icon={faCode}/>N A M E
                                </Label>
                                <Input 
                                    type="text" 
                                    placeholder="N A M E"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </Col>
                            <Col sm="12" md="12" className="m-2">
                                <Label>
                                    <FontAwesomeIcon className="fa-custom-icon mr-3" icon={faPercent}/>P E R C E N T A G E
                                </Label>
                                <Input
                                    type="number"
                                    placeholder="P E R C E N T A G E"
                                    value={percentage}
                                    max={100}
                                    onChange={(event) => event.target.value > 100 ? setPercentage('100') : setPercentage(event.target.value) }
                                />
                            </Col>
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

export default SkillListEdit;