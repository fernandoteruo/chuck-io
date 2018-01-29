import React from 'react';
import { connect} from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import "./styles/css/app.css";
import {ListJokes} from "./containers/ListJokes";

class App extends React.Component {
    constructor(props) {
        super(props);
        const routes = [
            {
                path: '/',
                exact: true,
                component: () => <Home />
            },{
                path: '/:category/joke',
                exact: true,
                component: ({match}) => <ListJokes category={match.params.category} />
            }
        ];
        this.state = {
            loading: false,
            routes: routes
        };
    }
    render() {
        return (
            <div>
                <Header></Header>
                <BrowserRouter>
                    <Switch>
                        {this.state.routes.map((route, index) => (
                            <Route key={index} path={route.path} exact={route.exact} component={route.component}/>
                        ))}
                        <Redirect to="/404" />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
export default connect()(App)