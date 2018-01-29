const initialState = {
    jokes: [],
    isFetching: false,
    lastUpdated: Date.now(),
    error: "",
};

export default function jokes(state = initialState, action) {
    switch (action.type) {
        case 'REQUEST_JOKE':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'RECEIVE_JOKE':
            var jokes = Object.assign(state.jokes);
            jokes.push(action.joke);
            return Object.assign({}, state, {
                isFetching: false,
                jokes: jokes,
                lastUpdated: action.receivedAt,
            });
        case 'ERROR_FETCH_JOKE':
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error,
                errorAt: action.errorAt
            });
        default:
            return state;
    }
}