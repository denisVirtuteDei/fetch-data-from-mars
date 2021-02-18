import style from 'styled-components'

export const Card = style.div`
    width: 100%;
    margin: 10px 10px 0 0;
    padding: 5px 10px;
    border: 1px solid #333; 
    box-sizing: content-box;
    box-shadow: 3px 3px 7px #444;
`
export const Loading = style.div`
    margin: 10px;
    padding: 5px;
`
export const CustomTh = style.th`
    padding: 11px;
    vertical-align: baseline;

    .button {
        padding: 3px;
    }
`