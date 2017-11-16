/* eslint-env node, mocha */
/* eslint "import/no-extraneous-dependencies": ["error", {"devDependencies": true }] */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-statements */

import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import Hello from '../src/';

chai.should();

describe('Example test', () => {

    it('example', () => {
        true.should.be.true;
    });

});

describe('Hello', () => {

    it.skip('renders an H1', () => {
        const data = { onEvent: () => { } };
        const wrapper = shallow(<Hello {...data}></Hello>);
        wrapper.is('h1').should.be.true;
    });

    it.skip('prints "hello world!"', () => {
        const wrapper = shallow(<Hello ></Hello>);
        wrapper.props().children.should.eql('hello world!');
    });

});
