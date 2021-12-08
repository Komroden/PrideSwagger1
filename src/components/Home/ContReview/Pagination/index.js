import React from 'react';

export const Pagination = ({itemsPerPage,totalItems,paginate,className}) => {
    const pageNumbers=[]
    for (let i=1;i<=Math.ceil(totalItems/itemsPerPage);i++){
        pageNumbers.push(i)
    }
    return (
        <>
            {pageNumbers.map(number=>(
                <li onClick={()=>paginate(number)} className={className} key={number} >{number}
                </li>
            ))}
        </>
    );
};

