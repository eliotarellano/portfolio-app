import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import './SkillList.css';
import DataTable from 'react-data-table-component';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { deleteSkillById } from '../../store/modules/skill/action';
import SkillListEdit from '../skill-list-edit/SkillListEdit';

const SkillList = (props) => {
    const dispatch = useDispatch();

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

    const data = props.skills;
   
    return (
        <DataTable
            noHeader={true}
            data={data}
            columns={columns}
            pagination
            responsive={true}
        />
    );
  }

  export default SkillList;