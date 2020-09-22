import React from 'react';

function ListItemView({
    cta,
    description,
    imgBg,
    subTitle,
    title,
    imgBgStyles,
}) {
    return (
        <li className="listItem">
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

export default ListItemView;
