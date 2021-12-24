import  {useState} from 'react';

export const usePagination = (items,countOnPage) => {

    const [currentPage,setCurrentPage]=useState(1);
    const [itemOnPage]=useState(countOnPage);
    const lastItemIndex = currentPage * itemOnPage
    const firstItemIndex = lastItemIndex-itemOnPage
    const currentItem = items.slice(firstItemIndex,lastItemIndex)

    const paginate=pageNumber=> setCurrentPage(pageNumber);
    const nextPage=(e)=> {

        e.preventDefault()
        if(currentPage===Math.ceil(items.length/itemOnPage)){
            setCurrentPage(1)
            return
        }
        setCurrentPage(prev => prev + 1)
    };
    const prevPage=(e)=> {
        e.preventDefault()
        if(currentPage===1){
            setCurrentPage(Math.ceil(items.length/itemOnPage))
            return
        }
        setCurrentPage(prev => prev - 1)
    };
    return {
        currentItem,
        paginate,
        nextPage,
        prevPage,
        currentPage
    }
};

