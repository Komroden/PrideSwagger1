import React from 'react';

export const Pagination = ({itemsPerPage,totalItems,paginate}) => {
    const pageNumbers=[]
    for (let i=1;i<=Math.ceil(totalItems/itemsPerPage);i++){
        pageNumbers.push(i)
    }
    return (
        <>
            {pageNumbers.map(number=>(
                <li onClick={()=>paginate(number)} className="prev_pag " key={number} >{number}
                </li>
            ))}
        </>
    );
};

