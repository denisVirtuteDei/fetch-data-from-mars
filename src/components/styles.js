import style from 'styled-components'

export const Card = style.div`
    width: 100%;
    margin: 10px 10px 0 0;
    padding: 5px 10px;
    border: 1px solid #333; 
    box-sizing: content-box;
    box-shadow: 3px 3px 7px #444;
    
    .cross-mark {
        text-align: right;
    }
`
export const Loading = style.div`
    margin: 10px;
    padding: 5px;
`
export const CustomTh = style.th`
    padding: 10px;
    vertical-align: top;
    text-align: left;

    .part {
        margin: 5px;
    }
`