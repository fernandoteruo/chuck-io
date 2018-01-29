import {Api} from "../utils/Api";

export const REQUEST_JOKE = "REQUEST_JOKE";
export const RECEIVE_JOKE = "RECEIVE_JOKE";
export const ERROR = "ERROR_FETCH_JOKE";

export const requestJoke = () => ({
    type: REQUEST_JOKE,
});

export const receiveJoke = (joke) => ({
    type: RECEIVE_JOKE,
    joke: joke,
    receivedAt: Date.now(),
});

export const errorFetchJoke = (error) => ({
    type: ERROR,
    errorAt: Date.now(),
    error: error
});

export const fetchJoke =  (category) => async (dispatch) => {
    dispatch(requestJoke());
    try {
        const api = new Api();
        let joke = await api.get("random?category=" + category);
        dispatch(receiveJoke(joke));
    } catch (err) {
        console.log(err);
        dispatch(errorFetchJoke(err));
    }
};
