/* eslint "import/no-extraneous-dependencies": ["error", {"devDependencies": true }] */
import React from 'react';
import ReactDOM from 'react-dom';
import Example from '../src/project_default/project_default';

// Example of use of the component in an application

ReactDOM.render(
    <Example classname={'--offers'}/>,
    document.getElementById('offers'),
);

ReactDOM.render(
    <Example classname={'--news'}/>,
    document.getElementById('news'),
);
