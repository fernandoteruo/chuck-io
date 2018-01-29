import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import * as actions from "../../src/actions/Categories";
import config from "../../src/utils/config";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('async fetch joke', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('creates RECEIVE_CATEGORIES when fetch categories has been done', async () => {
        const categories = ["explicit", "dev", "movie", "food", "celebrity", "science", "sport", "political", "religion", "animal", "history", "music", "travel", "career", "money", "fashion"];
        fetchMock.getOnce(config.api + 'categories', categories);
        const store = mockStore({categories: []});
        await store.dispatch(actions.fetchCategories()).then(() => {
            const expectedActions = [
                {type: "REQUEST_CATEGORIES"},
                {
                    type: "RECEIVE_CATEGORIES",
                    categories: categories
                }
            ];
            let response = store.getActions();
            for(let i in response[1]) {
                if(i === "receivedAt") {
                    delete response[1][i];
                    break;
                }
            }
            expect(response).toEqual(expectedActions);
        });
    });
});