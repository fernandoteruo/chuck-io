const initialState = {
    categories: [],
    isFetching: false,
    lastUpdated: Date.now(),
    error: ""
};

export default function categories(state = initialState, action) {
    switch (action.type) {
        case 'REQUEST_CATEGORIES':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'RECEIVE_CATEGORIES':
            return Object.assign({}, state, {
                isFetching: false,
                categories: action.categories,
                lastUpdated: action.receivedAt
            });
        case 'ERROR_FETCH_CATEGORIES':
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error,
                errorAt: action.errorAt
            });
        default:
            return state;
    }
}

