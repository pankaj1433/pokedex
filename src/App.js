import React from "react";
import {
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import { connect } from 'react-redux';

//components
import Loader from "./components/Loader";
import Navigation from "./components/Navigation";
import { PokemonList, Home, Test } from "./view";

class App extends React.Component {

    state = {
        loader: false,
    }

    render() {
        let navigation = [
            {name: 'Home', directTo: '/home'},
            {name: 'List', directTo: '/list'},
        ]
        return (
            <React.Fragment>
                {/* <Navigation navigation={navigation}/> */}
                <div 
                // className="container-fluid"
                >
                {   
                    this.props.loader && <Loader/>
                }
                    <Switch>
                        <Route path={`/list`} component={PokemonList} />
                        <Route path={`/home`} component={Home} />
                        <Route path={`/test`} component={Test} />
                        <Redirect exact from="/" to={`/home`}/>
                        <Route path="*" component={() => <h3>not Found</h3>}/>
                    </Switch>
                
                </div>    
            </React.Fragment>
        )
    }
}

const mapStateToProps = (reduxState) => ({
	loader: reduxState.loader.visible,
});

export default connect(mapStateToProps)(App);