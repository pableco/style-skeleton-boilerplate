/* eslint-env node, jest */
/* eslint "import/no-extraneous-dependencies": ["error", {"devDependencies": true }] */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-statements */

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Test from '../src';
import ExampleList from '../src/dynamic_templates/modules/list/list';

const props = {
    classname: '--news',
};

describe('component snapshoot', () => {

    it('render without props', () => {
        const wrapper = renderer.create(
            <ExampleList />,
        ).toJSON();

        expect(wrapper).toMatchSnapshot();
    });

    it('render with all props', () => {
        const wrapper = renderer.create(
            <ExampleList {...props}/>,
        ).toJSON();

        expect(wrapper).toMatchSnapshot();
    });
});

describe('ExampleList', () => {

    it('example', () => {
        const wrapper = shallow(<ExampleList />);

        expect(wrapper.type()).toBe('li');
    });

});

describe('List test', () => {
    let data;

    beforeEach(() => {
        data = {
            ...props,
        };

    });

    it('renders a list', () => {
        const wrapper = shallow(<Test {...data} />);

        expect(wrapper.type()).toBe('ul');
    });

    it('check length of the list', () => {
        const wrapper = shallow(<Test />);

        expect(wrapper.find('ExampleList')).toHaveLength(5);
    });

});
