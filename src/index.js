import React, { Component } from 'react';
import ExampleList from './dynamic_templates/modules/list/list';

export default class Test extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const classNameList = `list list${this.props.classname}`;
        return (
            <ul className={classNameList}>
                <ExampleList/>
                <ExampleList/>
                <ExampleList/>
                <ExampleList/>
                <ExampleList/>
            </ul>
        );
    }

}
