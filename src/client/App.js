import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// page imports
import HomeContainer from "./components/Home";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={HomeContainer} />
            </Router>
        );
    }
}
