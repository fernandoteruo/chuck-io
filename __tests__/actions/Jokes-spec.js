import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import * as actions from "../../src/actions/Jokes";
import config from "../../src/utils/config";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('async fetch joke', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('creates RECEIVE_JOKE when fetch joke has been done', async () => {
        const joke = {
            "icon_url": "testing",
            "value": "testing",
            "url": "testing",
            "id": "testing0"
        };
        fetchMock.getOnce(config.api + 'random?category=testing', joke);
        const store = mockStore({ jokes: [] });
        await store.dispatch(actions.fetchJoke("testing")).then(() => {
            const expectedActions = [
                {type: "REQUEST_JOKE"},
                {
                    type: "RECEIVE_JOKE",
                    joke: joke
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