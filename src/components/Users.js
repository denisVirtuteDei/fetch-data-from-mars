import React from 'react'
import Preloader from './Preloader';
import { User } from './User';

export const Users = (props) => {

    const handleClick = () => {
        props.fetchAllUsers();
    }

    return (
        <div>
            <button onClick={handleClick}>Fetch data from Mars</button>
            <div >
                {
                    props.loading
                        ? <Preloader />
                        : props.userList.map(el => (
                            <User key={el.id} name={el.name} username={el.username} />
                        ))
                }
            </div>
        </div>
    )
}