import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import './SkillList.css';
import DataTable from 'react-data-table-component';
import SkillListEdit from '../skill-list-edit/SkillListEdit';
import SkillListDelete from '../skill-list-delete/SkillListDelete';

const SkillList = (props) => {
    const skillModule = useSelector(store => store.skills.data);
    const data = skillModule;

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
            cell: (data) => {
                return (
                    <div>
                        <SkillListEdit skill={data}/>&nbsp;&nbsp;
                        <SkillListDelete skill={data} />
                    </div>
                )
        },
            name: 'A C T I O N',
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ], []);

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