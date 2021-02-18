import React from 'react'
import { CustomTh } from '../../styles'

export const SideBar = ({ fetchUsers, deleteUserList }) => (
    <CustomTh>
        <div className='part'>
            <button
                
                onClick={fetchUsers}
            > Fetch data from Mars </button>
        </div>
        <div className='part'>
            <button
                
                onClick={deleteUserList}
            > Remove user list </button>
        </div>

    </CustomTh>
)