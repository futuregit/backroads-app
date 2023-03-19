import React from 'react';
const SocialLink = ({ id, href, icon, iconType}) => {
    return (
        <li key={id}>
            <a href={href} target="_blank" rel="noreferrer" className={iconType}>
                <i className={icon}></i>
            </a>
        </li>
    );
}

export default SocialLink;