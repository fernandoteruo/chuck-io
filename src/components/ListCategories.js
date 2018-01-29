import React from 'react';
import PropTypes from 'prop-types';
import {Loading} from "./Loading";

export const ListCategoriesComponent = ({categories, loading}) => (
    <div className="row">
        { loading ? <Loading/> : null }
        {categories.map((category) =>
            <a key={category} href={"/" + category + "/joke"} className="card">
                {category}
            </a>
        )}
    </div>
);

ListCategoriesComponent.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string),
    loading: PropTypes.bool
};
