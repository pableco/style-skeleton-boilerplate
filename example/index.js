/* eslint "import/no-extraneous-dependencies": ["error", {"devDependencies": true }] */
import React from 'react';
import ReactDOM from 'react-dom';
import Test from '../src/project_default/project_default';

// Example of use of the component in an application

ReactDOM.render(
    <Test classname={'--offers'}/>,
    document.getElementById('offers')
);

ReactDOM.render(
    <Test classname={'--news'}/>,
    document.getElementById('news')
);

$(".js--hover").hover(
    function () {
        console.log('add class');
        var classes = $(this).attr('class').split(' ');
        var bemClass = classes[0];
        $(this).addClass(bemClass + '--hover');
    },
    function () {
        console.log('remove class');
        var classes = $(this).attr('class').split(' ');
        var bemClass = classes[0];
        $(this).removeClass(bemClass + '--hover');
    }
);