import React from 'react';
import "../styles/css/home.css";
import {Banner} from "../components/Banner";
import {ListCategories} from "../containers/ListCategories";
import PropTypes from "prop-types";

export class Home extends React.Component {
    render() {
        return (
            <div className="view home">
                <Banner/>
                <div className="container">
                    <ListCategories/>
                </div>
            </div>
        );
    };
}

Home.propTypes = {
    Banner: PropTypes.element,
    ListCategories: PropTypes.element
};