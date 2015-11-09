import React from 'react';
import Router from 'react-router';
import routes from 'routes';

Router.run(routes, Router.HashLocation, (Root, state) => {
    React.render(
        <Root {...state}/>,
        document.getElementById('content')
    );
});