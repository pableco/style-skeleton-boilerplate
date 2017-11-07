/* eslint "import/no-extraneous-dependencies": ["error", {"devDependencies": true }] */
import React from 'react';
import ReactDOM from 'react-dom';
import Test from '../src/index-with-styles';

// Example of use of the component in an application

ReactDOM.render(
    <Test classname={'__default'}/>,
    document.getElementById('content')
);
