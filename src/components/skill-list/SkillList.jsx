import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SkillList.css';
import DataTable from 'react-data-table-component';
import { Button, Col, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { deleteSkillById } from '../../store/modules/skill/action';
import SkillListEdit from '../skill-list-edit/SkillListEdit';
import SkillListAdd from '../skill-list-add/SkillListAdd';

const SkillList = (props) => {
    const dispatch = useDispatch();
    const skillModule = useSelector(store => store.skills.data);

    const handlerOnClick = (id) => {
        return (event) => {
            dispatch(deleteSkillById(id));
        }
    };

    const columns = useMemo(() => [
        {
            name: '#',
            selector: 'id',
            sortable: false,
            grow: 1,
        },
        {
            name: 'N A M E',
            selector: 'name',
            sortable: false,
            grow: 3,
        },
        {
            name: '%',
            selector: 'percentage',
            sortable: false,
        },
        {
            cell: (skillModule) => {
                return (
                    <div>
                        <SkillListEdit skill={skillModule}/>&nbsp;&nbsp;
                        <Button
                            color="danger"
                            onClick={handlerOnClick(skillModule.id)}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>
                )
            },
            name: 'A C T I O N',
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
          },
      ], []);

    const data = skillModule;
   
    return (
        <Container className="mt-4">
            <Col xs="12" md="12" className="text-center mt-5 mb-5">
                <h4>S K I L L &nbsp; L I S T</h4>
            </Col>
            <Col xs="12" md={{size:8, offset:2}}>
                <SkillListAdd />
                <DataTable
                    noHeader={true}
                    data={data}
                    columns={columns}
                    pagination
                    responsive={true}
                />
            </Col>
        </Container>
    );
  }

  export default SkillList;