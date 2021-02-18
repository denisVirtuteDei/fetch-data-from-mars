import React from 'react';
import { Card } from '../../styles'

export const UserListItem = ({ name, username, ...props }) => (
    <Card>
        <div>
            <div> name: {name} </div>
            <div> username: {username} </div>
        </div>
        <div className='cross-mark'>
            <button onClick={() => props.onClick(props.id)}>
                &#10060;
            </button>
        </div>
    </Card>
)