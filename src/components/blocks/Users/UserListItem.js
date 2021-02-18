import React from 'react';
import { Card } from '../../styles'

export const UserListItem = ({ name, username }) => (
    <Card>
        <div> name: {name} </div>
        <div> username: {username} </div>
    </Card>
)