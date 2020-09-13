import React, { Component } from 'react';
import ExampleList from './dynamic_templates/modules/list/list';

export default class Example extends Component {

    render() {
        const {
            classname,
            items,
        } = this.props;
        const classNameList = `list list${classname}`;
        const itemsList = items.map((item) => <ExampleList key={item}/>);

        return (
            <ul className={classNameList}>
                {itemsList}
            </ul>
        );
    }
}

Example.defaultProps = {
    items: [1, 2, 3, 4, 5],
};
