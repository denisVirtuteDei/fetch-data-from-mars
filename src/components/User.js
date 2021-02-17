import React from 'react';
import style from 'styled-components';

const Card = style.div`
    margin: 10px;
    padding: 5px;
    border: 2px solid;
    height: 50px;
    width: 200px;
`

export const User = ({ name, username }) => (
    <Card>
        <div> name: {name} </div>
        <div> username: {username} </div>
    </Card>
)