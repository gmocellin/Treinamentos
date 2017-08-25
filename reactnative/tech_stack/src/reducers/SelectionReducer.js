const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SELECT_LIBRARY':
            return action.payload;
        default: 
            return state;
    }
};
