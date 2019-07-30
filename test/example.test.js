/* eslint-env node, jest */
/* eslint "import/no-extraneous-dependencies": ["error", {"devDependencies": true }] */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-statements */

import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import Test from '../src';

import ExampleList from '../src/dynamic_templates/modules/list/list';

chai.should();

describe('ExampleList', () => {

    it('example', () => {
        const wrapper = shallow(<ExampleList />);
        wrapper.is('li').should.be.true;
    });

});

describe('List test', () => {
    let data;

    beforeEach(() => {
        data = {
            classname: '--news',
        };

    });

    it('renders a list', () => {
        const wrapper = shallow(<Test {...data} />);
        wrapper.is('ul').should.be.true;
    });

    it('prints "hello world!"', () => {
        const wrapper = shallow(<Test />);
        wrapper.find('ExampleList').length.should.eql(5);
    });

});
