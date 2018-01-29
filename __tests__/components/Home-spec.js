import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Home } from '../../src/components/Home'

Enzyme.configure({ adapter: new Adapter() });

let setup = () => {
    const enzymeWrapper = shallow(<Home/>);
    return {
        enzymeWrapper
    };
};

describe("component Home", () => {
    it("should render home", () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find(".view").hasClass("home")).toBe(true);
        expect(enzymeWrapper.find("Banner").exists()).toBe(true);
        expect(enzymeWrapper.find(".container").exists()).toBe(true);
        expect(enzymeWrapper.find(".container").children().length).toBe(1);
    });
});