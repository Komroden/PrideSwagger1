import React from 'react';

export const BottomTextLine = ({number,price}) => {
    return (
        <div className="bottom_text_line">
            Пригласите в ячейку #{number}
            <span>+{price}р.</span>
        </div>
    );
};

