import React from 'react'
import Preloader from './Preloader';
import { User } from './User';

export const Users = (props) => {

    const handleClick = () => {
        props.fetchAllUsers();
    }

    return (
        <div className='column'>
            <div className='row' style={{ margin: '5px' }}>
                <button onClick={handleClick}>Fetch data from Mars</button>
            </div>
            <div className='row'>
                {
                    props.loading
                        ? <Preloader />
                        : props.userList.map(el => {
                            return <User key={el.id} name={el.name} username={el.username} />
                        })
                }
            </div>
        </div>
    )
}