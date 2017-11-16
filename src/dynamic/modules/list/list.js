import React, { Component } from 'react';

export default class ExampleList extends Component {

    render() {
        const imgBg = { backgroundImage: 'url(https://source.unsplash.com/random)' };
        return (
            <li className="list-item">
                <figure className="list-figure">
                    <figcaption className="list-figcaption">
                        <h3 className="list-item__title">Título de test</h3>
                        <h4 className="list-item__sub-title">Sub Título de test</h4>
                    </figcaption>
                    <div className="list-item__img-fix" style={ imgBg }></div>
                    <img className="list-item__img" src="https://source.unsplash.com/random" alt="test" />

                    <div className="list-item__content">
                        <p className="list-item__description">description test</p>
                        <button className="list-item__action">Call now</button>
                    </div>

                </figure>
            </li>
        );
    }
}
