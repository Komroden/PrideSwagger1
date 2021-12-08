import React from 'react';

export const Pagination = ({itemsPerPage,totalItems,paginate,currentPage}) => {
    const pageNumbers=[]
    for (let i=1;i<=Math.ceil(totalItems/itemsPerPage);i++){
        pageNumbers.push(i)
    }



    return (
        <>
            {pageNumbers.filter(number=>number<=currentPage+2||number===pageNumbers.length).slice(currentPage-1).map(number=>(
                <li  className={currentPage===number?'active':''} key={number} >
                    <span onClick={()=>paginate(number)}>{number===currentPage+2&&number!==pageNumbers.length-1&&number!==pageNumbers.length?'...':number}</span>
                </li>
            ))}
        </>
    );
};

