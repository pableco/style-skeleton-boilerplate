import React, { Component } from 'react';
import ListItemView from './ListItem.View';

export default class ListItem extends Component {

    render() {
        const imgBgStyles = { backgroundImage: `url(${this.props.imgBg})` };
        return (
            <ListItemView {...this.props} imgBgStyles={imgBgStyles}/>
        );
    }
}

ListItem.defaultProps = {
    cta: 'Call now',
    description: `Aenean vitae neque ultricies, egestas eros non, bibendum purus.
    Suspendisse sodales quam non lectus imperdiet dignissim.`,
    imgBg: 'https://source.unsplash.com/random',
    subTitle: 'Subtitle test',
    title: 'Test title',
};
