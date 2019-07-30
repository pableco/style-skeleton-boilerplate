/* eslint "import/no-extraneous-dependencies": ["error", {"devDependencies": true }] */
import React from 'react';
import ReactDOM from 'react-dom';
import Test from '../src/project_default/project_default';

// Example of use of the component in an application

ReactDOM.render(
    <Test classname={'--offers'}/>,
    document.getElementById('offers'),
);

ReactDOM.render(
    <Test classname={'--news'}/>,
    document.getElementById('news'),
);
