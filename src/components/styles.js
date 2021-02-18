import styled from 'styled-components'

export const Card = styled.div`
    width: 100%;
    margin: 10px 10px 0 0;
    padding: 5px 10px;
    border: 1px solid #333; 
    box-sizing: content-box;
    box-shadow: 3px 3px 7px #444;

    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};

    .cross-mark {
        text-align: right;
    }

`
export const CustomTh = styled.th`
    padding: 10px;    
    vertical-align: top;

    & div button {
        width: 100%;
        margin: 5px;
        display: block;
        cursor: pointer;
        text-align: left;
        padding: 5px 10px;
        border: 1px solid black;
        transition-duration: 0.4s;
        background-color: white;

        &:hover {
            background-color: #e7e7e7;
            color: black;
        }
    }
`
