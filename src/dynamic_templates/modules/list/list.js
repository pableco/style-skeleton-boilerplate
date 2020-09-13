import React, { Component } from 'react';

export default class ExampleList extends Component {

    render() {
        const {
            cta,
            description,
            imgBg,
            subTitle,
            title,
        } = this.props;
        const imgBgStyles = { backgroundImage: `url(${imgBg})` };
        return (
            <li className="list-item js--hover">
                <figure className="list-figure">
                    <figcaption className="list-figcaption">
                        <h3 className="list-item__title">{title}</h3>
                        <h4 className="list-item__sub-title">{subTitle}</h4>
                    </figcaption>
                    <div className="list-item__img-fix" style={imgBgStyles}></div>
                    <img className="list-item__img" src={imgBg} alt={`${title} image`} />

                    <div className="list-item__content">
                        <p className="list-item__description">{description}</p>
                        <button className="list-item__action">{cta}</button>
                    </div>
                    <span className="list-item__span"></span>
                </figure>
            </li>
        );
    }
}

ExampleList.defaultProps = {
    cta: 'Call now',
    description: `Aenean vitae neque ultricies, egestas eros non, bibendum purus.
    Suspendisse sodales quam non lectus imperdiet dignissim.`,
    imgBg: 'https://source.unsplash.com/random',
    subTitle: 'Subtitle test',
    title: 'Test title',
};
