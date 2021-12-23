import React, { useLayoutEffect, useState} from 'react';
import './style.scss';
import {Line} from "../MainTitle/GreyLine";
import {LkHistoryMainItem} from "./LkHistoryMainItem";
import {Pagination} from "./LkHistoryMainItem/Pagination";
import {useFetchWithTokenGet} from "../../../hooks/useFetchWithTokenGet";
import {Loader} from "../../../api/Loader";

export const LkHistoryMain = () => {
    const [filter,setFilter]=useState('all')
    // const [totalItems,setTotalItems]=useState({
    //     items:[]
    // })
    const totalItems=useFetchWithTokenGet('http://lk.pride.kb-techno.ru/api/Finance/list',{items:[]})
    const filtredArray=totalItems.data.items.filter(item=>item.processingStatus===filter||filter==='all')
    // useEffect(()=>{
    //     if(auth.token) {
    //         fetch('http://lk.pride.kb-techno.ru/api/Finance/list', {
    //             method: 'GET',
    //             headers: {
    //                 'accept': 'application/json',
    //                 'Authorization': `Bearer ${auth.token}`
    //             }
    //         })
    //             .then(res => res.json())
    //             .then(body => setTotalItems(body))
    //     }
    // },[auth.token])

    // pagination
    const [currentPage,setCurrentPage]=useState(1);
    const [itemOnPage]=useState(12);
    const lastItemIndex = currentPage * itemOnPage
    const firstItemIndex = lastItemIndex-itemOnPage
    const currentItem = filtredArray.slice(firstItemIndex,lastItemIndex)


    const paginate=pageNumber=> setCurrentPage(pageNumber);
    const nextPage=(e)=> {

        e.preventDefault()
        if(currentPage===Math.ceil(filtredArray.length/itemOnPage)){
            setCurrentPage(1)
            return
        }
        setCurrentPage(prev => prev + 1)
    };
    const prevPage=(e)=> {
        e.preventDefault()
        if(currentPage===1){
            setCurrentPage(Math.ceil(filtredArray.length/itemOnPage))
            return
        }
        setCurrentPage(prev => prev - 1)
    };

    useLayoutEffect (() => {
        window.scrollTo ( 0 , 0 ); }, [currentPage]);





    return (
        <>
            <Line/>
            <div className="main_for_all_pages">
                <div className="main_content_right_sidebar_title_bl">
                    <div className="sidebar_title_bl_left">
                        <div className="main_content_right_sidebar_title_bl_title">ИСТОРИЯ ОПЕРАЦИЙ</div>
                        <div className="main_content_right_sidebar_title_bl_subtitle">отображение истории транзакций
                        </div>
                    </div>
                    <div className="sidebar_title_bl_right filter_history">
                        <form className="filter_history_form">
                            <select defaultValue={'all'} className="select_filter " name="filter" onChange={e=>setFilter(e.target.value)}>
                                <option value={'all'}>Все</option>
                                <option value="Отменен">Вывод средств</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="history_row">
                    <Loader loading={totalItems.loading}/>
                    {currentItem.map((item)=>
                        <LkHistoryMainItem img={'/images/history_img.png'}
                                           date={item.paymentDate}
                                           key={item.id}
                                           title={item.objectName}
                                           course={1}
                                           valueDeb={item.debetSum}
                                           valueCre={item.creditSum}
                                           status={item.processingStatus}
                                           id={item.id}
                                           valueType={item.accountName}/>)}

                </div>


                {filtredArray.length>24&&<div className="history_pagin_row">
                    <div className="voice_pagination">
                        <ul>
                            <li className="arrow_li li_start">
                                <a href={'/'} onClick={prevPage}>
                                    <img src="/images/pag_arr.png" alt=""/>
                                </a>
                            </li>
                            <Pagination itemsPerPage={itemOnPage} totalItems={filtredArray.length} paginate={paginate}  currentPage={currentPage}  />
                            <li className="arrow_li li_eng">
                                <a href={'/'} onClick={nextPage}>
                                    <img src="/images/pag_arr.png" alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>}
            </div>

        </>
    );
};

