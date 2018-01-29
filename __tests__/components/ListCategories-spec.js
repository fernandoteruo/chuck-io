import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {createMockStore} from 'redux-test-utils'
import {ListCategories} from "../../src/containers/ListCategories";

Enzyme.configure({ adapter: new Adapter() });

let setup = (store) => {
    const context = { store, };
    const enzymeWrapper = shallow(<ListCategories/>, { context });
    return {
        enzymeWrapper
    };
};

describe("component ListCategories", () => {
    it("should render ListCategories with loading", () => {
        const testState = {
            Categories: {
                isFetching: true,
                categories: []
            }
        };
        const store = createMockStore(testState);
        const { enzymeWrapper } = setup(store);
        expect(enzymeWrapper.dive().find(".row").exists()).toBe(true);
        expect(enzymeWrapper.dive().find("Loading").exists()).toBe(true);
        expect(enzymeWrapper.dive().find("a.card").exists()).toBe(false);
    });
    it("should render ListCategories without loading and 1 category", () => {
        const testState = {
            Categories: {
                isFetching: false,
                categories: ["test1"]
            }
        };
        const store = createMockStore(testState);
        const { enzymeWrapper } = setup(store);
        expect(enzymeWrapper.dive().find(".row").exists()).toBe(true);
        expect(enzymeWrapper.dive().find("Loading").exists()).toBe(false);
        expect(enzymeWrapper.dive().find("a.card").text()).toBe("test1");
    });
    it("should render ListCategories without loading and 3 categories", () => {
        const testState = {
            Categories: {
                isFetching: false,
                categories: ["test1", "test2", "test3"]
            }
        };
        const store = createMockStore(testState);
        const { enzymeWrapper } = setup(store);
        expect(enzymeWrapper.dive().find(".row").exists()).toBe(true);
        expect(enzymeWrapper.dive().find("Loading").exists()).toBe(false);
        expect(enzymeWrapper.dive().find("a.card")).toHaveLength(3);
    });
});