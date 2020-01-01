import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './SkillListAdd.css';
import {
    Col,
    Input,
    Button,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCode, faPercentage } from '@fortawesome/free-solid-svg-icons'
import { findDataAsyncActionCreator, addSkillAsyncActionCreator } from '../../store/modules/skill/action';


const SkillListAdd = (props) => {
    const dispatch = useDispatch();
    const skillModule = useSelector(store => store.skills.data);

    useEffect(() => {
        dispatch(findDataAsyncActionCreator());
    }, []);

    const [name, setName] = useState('');
    const [percentage, setPercentage] = useState('');

    const handleOnClick = () => {
        if (name && percentage) {
            const data = skillModule;
            const id = skillModule.length;
            const skill = {
                id,
                name,
                percentage,
            }
            const nData = data.concat(skill)
            const skillObj = {
                description: JSON.stringify(nData),
            }
            dispatch(addSkillAsyncActionCreator(skillObj))
            setName('');
            setPercentage('');
        }
    };

    return (
        <div className="skill-list-add">
            <Col xs="12" md="12" className="form-inline mb-5">
                <Col xs="12" md="12" className="text-center">
                    <FontAwesomeIcon className="fa-custom-icon mr-3" icon={faCode} />
                    <Input 
                        id="input-skill-name"
                        className="mr-4" 
                        placeholder="N A M E"
                        value={name} 
                        onChange={(event) => setName(event.target.value)}
                    />
                    <FontAwesomeIcon className="fa-custom-icon mr-3" icon={faPercentage} />
                    <Input
                        id="input-skill-percentage"
                        type="number"
                        className="mr-4" 
                        placeholder="P E R C E N T A G E"
                        value={percentage}
                        onChange={(event) => setPercentage(event.target.value)}
                    />
                    <Button 
                        color="danger" 
                        className="mt-md-0 mt-2" 
                        onClick={handleOnClick}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </Col>
            </Col>
        </div>
    )
};

export default SkillListAdd;