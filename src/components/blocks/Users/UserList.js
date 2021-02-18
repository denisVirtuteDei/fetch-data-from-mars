import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsersRequest } from '../../../actions';
import Preloader from '../../Preloader/Preloader';
import { CustomTh } from '../../styles';
import { UserListItem } from './UserListItem';

export const UserList = (props) => {

    const userList = useSelector(state => state.users.userList);
    const loading = useSelector(state => state.preloader.loading)
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(fetchAllUsersRequest());
    }

    return (
        <table>
            <tbody>
                <tr>
                    <CustomTh>
                        <button className='button' onClick={handleClick}>Fetch data from Mars</button>
                    </CustomTh>
                    <td>
                        {
                            loading
                                ? <Preloader />
                                : userList.map(el => (
                                    <UserListItem key={el.id} name={el.name} username={el.username} />
                                ))
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    )
}