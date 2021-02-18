import { TOGGLE_THEME } from '../actions';

const initUserList = {
    isUsualTheme: true
}

export default function (state = initUserList, action) {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                isUsualTheme: !state.isUsualTheme
            }
        default: return state;
    }
}
