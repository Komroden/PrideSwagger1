import React from 'react';

export const ProgramCalculatorValue = ({name}) => {
    return (
        <option value={name}> {name==='CurrenyPriceInfoT'?'USDT':name}</option>
    );
};

