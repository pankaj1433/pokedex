import React from "react";
import {
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import { connect } from 'react-redux';

//components
import Loader from "./components/Loader"
import {
    Home
} from "./view";

class App extends React.Component {

    state = {
        loader: false
    }

    render() {
        return (
            !this.props.loader ?
            <Switch>
                <Route path={`/home`} component={Home} />
                <Redirect exact from="/" to={`/home`}/>
                <Route path="*" component={() => <h3>not Found</h3>}/>
            </Switch>
            :<Loader/>
        )
    }
}

const mapStateToProps = (reduxState) => ({
	loader: reduxState.loader.visible,
});

export default connect(mapStateToProps)(App);