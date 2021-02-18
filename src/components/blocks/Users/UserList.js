import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsersRequest, deleteUser, deleteUserList } from '../../../actions';
import Preloader from '../../Preloader/Preloader';
import { SideBar } from './SideBar';
import { UserListItem } from './UserListItem';

export const UserList = (props) => {

    const userList = useSelector(state => state.users.userList);
    const loading = useSelector(state => state.preloader.loading)
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(fetchAllUsersRequest());
    }

    const handleDeleteUserClick = id => {
        dispatch(deleteUser(id))
    }

    const handleDeleteUserListClick = () => {
        dispatch(deleteUserList());
    }

    return (
        <table>
            <tbody>
                <tr>
                    <SideBar
                        fetchUsers={handleClick}
                        deleteUserList={handleDeleteUserListClick}
                    />
                    <td>
                        {
                            loading
                                ? <Preloader />
                                : userList.map(el => (
                                    <UserListItem
                                        key={el.id}
                                        id={el.id}
                                        name={el.name}
                                        username={el.username}
                                        onClick={handleDeleteUserClick}
                                    />
                                ))
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    )
}