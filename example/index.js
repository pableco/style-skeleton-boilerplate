/* eslint "import/no-extraneous-dependencies": ["error", {"devDependencies": true }] */
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Example from '../src/project_default/project_default';

// Example of use of the component in an application

ReactDOM.render(
    <Fragment>
        <ul className="menu">
            <li className="menu__item"><a href="/index.html">default</a></li>
            <li className="menu__item"><a href="/alternate.html">alternate</a></li>
            <li className="menu__item"><a href="/option.html">option</a></li>
        </ul>
        <Example classname={'--news'}/>,
        <Example classname={'--offers'}/>
    </Fragment>,
    document.getElementById('content'),
);
