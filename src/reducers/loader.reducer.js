const initialState = {
    visible: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SHOW_LOADER':
            if (action.visible !== initialState) {
                return { ...state, visible: action.visible }
            }
            return state;
            break;
        case 'HIDE_LOADER':
            if (action.visible !== initialState) {
                return { ...state, visible: action.visible }
            }
            return state;
        default:
            return state;
    }
}