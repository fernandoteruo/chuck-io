import { connect} from 'react-redux';
import {ListCategoriesComponent} from "../components/ListCategories";
import {fetchCategories} from "../actions/Categories";

const mapStateToProps = (state) => {
    return {
        categories: state.Categories.categories,
        loading: state.Categories.isFetching
    }
};

const mapDispatchToProps = (dispatch) => {
    dispatch(fetchCategories());
    return {
    }
};

export const ListCategories = connect(mapStateToProps, mapDispatchToProps)(ListCategoriesComponent);

