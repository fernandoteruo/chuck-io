import {connect} from 'react-redux';
import {ListJokesComponent} from "../components/ListJokes";
import {fetchJoke} from "../actions/Jokes";

const mapStateToProps = (state) => {
    var jokes = state.Jokes.jokes.length === 0 ? [] : state.Jokes.jokes;
    return {
        jokes: jokes,
        loading: state.Jokes.isFetching
    }
};

const mapDispatchToProps = (dispatch, props) => {
    dispatch(fetchJoke(props.category));
    return {
        handleClick: () => {
            dispatch(fetchJoke(props.category))
        },
        category: props.category
    }
};

export const ListJokes = connect(mapStateToProps, mapDispatchToProps)(ListJokesComponent);

