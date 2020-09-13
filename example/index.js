/* eslint "import/no-extraneous-dependencies": ["error", {"devDependencies": true }] */
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Example from '../src/project_default/project_default';

// Example of use of the component in an application

ReactDOM.render(
    <Fragment>
        <Example classname={'--news'}/>,
        <Example classname={'--offers'}/>
    </Fragment>,
    document.getElementById('content'),
);
