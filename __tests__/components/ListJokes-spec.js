import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {createMockStore} from 'redux-test-utils'
import {ListJokes} from "../../src/containers/ListJokes";

Enzyme.configure({adapter: new Adapter()});

let setup = (store) => {
    const context = {store,};
    const enzymeWrapper = shallow(<ListJokes/>, {context});
    return {
        enzymeWrapper
    };
};

describe("component ListJokes", () => {
    it("should render ListJokes with loading", () => {
        const testState = {
            Jokes: {
                isFetching: true,
                jokes: []
            }
        };
        const store = createMockStore(testState);
        const {enzymeWrapper} = setup(store);
        expect(enzymeWrapper.dive().find(".row").exists()).toBe(true);
        expect(enzymeWrapper.dive().find("Loading").exists()).toBe(true);
        expect(enzymeWrapper.dive().find(".card").exists()).toBe(false);
    });
    it("should render ListJokes without loading and 1 joke", () => {
        const testState = {
            Jokes: {
                isFetching: false,
                jokes: [{
                    value: "test1",
                    id: "test1"
                }]
            }
        };
        const store = createMockStore(testState);
        const {enzymeWrapper} = setup(store);
        expect(enzymeWrapper.dive().find(".row").exists()).toBe(true);
        expect(enzymeWrapper.dive().find("Loading").exists()).toBe(false);
        expect(enzymeWrapper.dive().find(".card")).toHaveLength(1);
        expect(enzymeWrapper.dive().find("h3").text()).toBe("test1");
    });
});