import React from "react"
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Header from '../../Header/index';
import Home from '../../../containers/Home';
import AdminPanel from '../../../containers/AdminPanel';
import NotFound from '../../NotFound/index';

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getSocket();

       // const user=this.state.user;
        //window.localStorage.setItem("user",user);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Redirect exact from='/' to='/home'/>
                    <Route path='/home' component={Home}/>
                    <Route path='/admin' component={AdminPanel}/>
                    <Route path='/404' component={NotFound}/>
                    <Redirect from='*' to='/404'/>
                </Switch>
            </Router>);
    }
}

export default Wrapper;
