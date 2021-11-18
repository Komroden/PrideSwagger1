import React from 'react';
import './style.scss';
export const Emoji = ({title,code}) => {
    return (
        <span className="emoji" title={title}>{code}</span>
    );
};

