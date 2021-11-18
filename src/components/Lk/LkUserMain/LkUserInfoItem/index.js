import React from 'react';

export const LkUserInfoItem = ({url,title,text,classes,href}) => {
    return (
        <div className={"userinfo "+classes}>
            <div className="userinfo__icon">
                <img src={url} alt=""/>
            </div>
            <div className="userinfo__right">
                <div className="userinfo__title">{title}</div>
                <div className="userinfo__value">
                    <a href={href}>{text}</a>
                </div>
            </div>
        </div>
    );
};

