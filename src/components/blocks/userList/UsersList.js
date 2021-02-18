import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsersRequest, deleteUser, deleteUsersList, toggleTheme } from '../../../actions';
import Preloader from '../../preloader/Preloader';
import { UserListItem } from './UsersListItem';
import { SideBar } from '../sideBar/SideBar';

export const UserList = (props) => {

    const userList = useSelector(state => state.users.userList);
    const loading = useSelector(state => state.preloader.loading);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(fetchAllUsersRequest());
    }

    const handleDeleteUserClick = id => {
        dispatch(deleteUser(id));
    }

    const handleDeleteUserListClick = () => {
        dispatch(deleteUsersList());
    }

    const handleThemeToggleClick = () => {
        dispatch(toggleTheme());
    }

    return (
        <table>
            <tbody>
                <tr>
                    <SideBar
                        fetchUsers={handleClick}
                        deleteUserList={handleDeleteUserListClick}
                        switchTheme={handleThemeToggleClick}
                    />
                    <td>
                        {loading
                            ? <Preloader />
                            : userList.map(el => (
                                <UserListItem
                                    key={el.id}
                                    id={el.id}
                                    name={el.name}
                                    username={el.username}
                                    onClick={handleDeleteUserClick}

                                />
                            ))}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}