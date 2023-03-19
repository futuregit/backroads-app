import React from 'react';

const PageLink = ({id, href, text, iconType}) => {
    return (
        <li key={id}>
            <a href={href} className={iconType}> {text} </a>
        </li>
    );
}

export default PageLink;