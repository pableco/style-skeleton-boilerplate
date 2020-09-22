/* eslint-env node, jest */
/* eslint "import/no-extraneous-dependencies": ["error", {"devDependencies": true }] */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-statements */

import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Test from '../src';
import ListItem from '../src/dynamic_templates/modules/list';

const props = {
    classname: '--news',
};

describe('component snapshoot', () => {

    it('render without props', () => {
        const wrapper = renderer.create(
            <Test />,
        ).toJSON();

        expect(wrapper).toMatchSnapshot();
    });

    it('render with all props', () => {
        const wrapper = renderer.create(
            <Test {...props}/>,
        ).toJSON();

        expect(wrapper).toMatchSnapshot();
    });
});

describe('ListItem', () => {

    it('example', () => {
        const wrapper = mount(<ListItem />);

        expect(wrapper.find('li')).toHaveLength(1);
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
        const wrapper = shallow(<Test {...data} />);

        expect(wrapper.find('ListItem')).toHaveLength(5);
    });

});
