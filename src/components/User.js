import React from 'react';
import style from 'styled-components';

const Card = style.div`
    margin: 5px;
    padding: 2px;
`

export const User = ({ name, username }) => (
    <Card>
        <div> name: {name} </div>
        <div> username: {username} </div>
    </Card>
)