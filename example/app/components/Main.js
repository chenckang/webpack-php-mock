import React from 'react';
import {RouteHandler, Link} from 'react-router';

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>Example</h1>
                <Link to="example">Go to example</Link>
                <RouteHandler></RouteHandler>
            </div>
        );
    }
}

export default Main;