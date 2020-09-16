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
            <li className="listItem js--hover">
                <figure className="listItem__figure">
                    <figcaption className="listItem__figcaption">
                        <h3 className="listItem__title">{title}</h3>
                        <h4 className="listItem__subTitle">{subTitle}</h4>
                    </figcaption>
                    <div className="listItem__imgFix" style={imgBgStyles}></div>
                    <img className="listItem__img" src={imgBg} alt={`${title} image`} />

                    <div className="listItem__content">
                        <p className="listItem__description">{description}</p>
                        <button className="listItem__action">{cta}</button>
                    </div>
                    <span className="listItem__extra"></span>
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
