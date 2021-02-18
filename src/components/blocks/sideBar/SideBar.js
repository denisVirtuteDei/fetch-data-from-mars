import React from 'react'
import { CustomTh } from '../../styles'

export const SideBar = ({ fetchUsers, deleteUserList, switchTheme }) => (
    <CustomTh>
        <div className='part'>
            <button onClick={fetchUsers}> Fetch data from Mars </button>
            <button onClick={deleteUserList}> Remove user list </button>
            <button onClick={switchTheme}> Switch cards theme </button>
        </div>
    </CustomTh>
)