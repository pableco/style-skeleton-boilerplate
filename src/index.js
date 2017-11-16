import React, { Component } from 'react';
import ExampleList from './dynamic/modules/list/list';

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responsive: 'desktop'
        };
    }
    render() {
        const className = this.state.responsive;
        const classNameList = `list list${this.props.classname}`;
        return (
        <div className={className}>
            <ul className={classNameList}>
                <ExampleList/>
                <ExampleList/>
                <ExampleList/>
                <ExampleList/>
                <ExampleList/>
            </ul>
        </div>
        );
    }

}
