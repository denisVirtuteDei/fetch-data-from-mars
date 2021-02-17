import { SHOW_PRELOADER, HIDE_PRELOADER } from '../constants/types';

const initState = {
    loading: false
}

export default function (state = initState, action) {
    switch (action.type) {
        case SHOW_PRELOADER:
            return {
                ...state,
                loading: true
            }
        case HIDE_PRELOADER:
            return {
                ...state,
                loading: false
            }
        default: return state;
    }
}
