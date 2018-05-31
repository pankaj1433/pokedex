import React from "react";
import { connect } from 'react-redux';
import { asyncgetCurrentUser } from './actions/user.asyncaction';

class App extends React.Component {
    componentDidMount(){
        this.props.dispatch(asyncgetCurrentUser())
    }
    render() {
        return (
            <div>
                <h2>my App</h2>
            </div>
        )
    }
}

export default connect(state => state)(App);