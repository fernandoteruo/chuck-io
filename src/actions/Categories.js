import {Api} from "../utils/Api";

export const REQUEST_CATEGORIES = "REQUEST_CATEGORIES";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const ERROR = "ERROR_FETCH_CATEGORIES";

export const requestCategories = () => ({
    type: REQUEST_CATEGORIES,
});

export const receiveCategories = (array) => ({
    type: RECEIVE_CATEGORIES,
    categories: array,
    receivedAt: Date.now(),
});

export const errorFetchCategories = (error) => ({
    type: ERROR,
    errorAt: Date.now(),
    error: error
});

export const fetchCategories = () => async (dispatch) => {
    dispatch(requestCategories());
    try {
        const api = new Api();
        let categories = await api.get("categories");
        dispatch(receiveCategories(categories));
    } catch (err) {
        console.log(err);
        dispatch(errorFetchCategories(err));
    }

};
