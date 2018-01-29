import React from 'react';
import "../styles/css/jokes.css";
import {Loading} from "./Loading";
import {Banner} from "./Banner";
import PropTypes from "prop-types";

export const ListJokesComponent = ({jokes, loading, handleClick, category}) => (
    <div className="view jokes">
        <Banner/>
        <div className="container">
            <div className="row">
                {loading ? <Loading/> : null}
                {jokes.map((joke) =>
                    <div key={joke.id} className="card">
                        <h3>{joke.value}</h3>
                    </div>
                )}
            </div>
            <div className="row">
                <button onClick={handleClick} category={category}>Load More</button>
            </div>
        </div>
    </div>
);
ListJokesComponent.propTypes = {
    category: PropTypes.string,
    Banner: PropTypes.element,
    jokes: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool,
    handleClick: PropTypes.func,
};