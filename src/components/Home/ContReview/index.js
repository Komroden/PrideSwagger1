import React, { useState} from 'react';
import './style.scss';
import {ReviewItem} from "./ReviewItem";
import {Pagination} from "./Pagination";
import {ReviewForm} from "./ReviewForm";
import {useSelector} from "react-redux";
import {useFetchWithoutTokenGet} from "../../../hooks/useFetchWithoutTokenGet";
import {Loader} from "../../../api/Loader";
export const ContReview = () => {
	const { auth } = useSelector((state) => state);
	// const [review,setReview]=useState({items:[]});
	const review =useFetchWithoutTokenGet('http://lk.pride.kb-techno.ru/api/Main/review-list?pageNumber=0&pageSize=10',{items:[]})
	const [currentPage,setCurrentPage]=useState(1);
	const [itemOnPage]=useState(9);
	const lastItemIndex = currentPage * itemOnPage
	const firstItemIndex = lastItemIndex-itemOnPage
	const currentItem = review.data.items.slice(firstItemIndex,lastItemIndex)

	// useEffect(()=>{
	// 	fetch('http://lk.pride.kb-techno.ru/api/Main/review-list?pageNumber=0&pageSize=10',{
	// 		method:'GET',
	// 		headers:{
	// 			'Accept': 'application/json',
	// 			}
	// 	})
	// 		.then((res) => res.json())
	// 		.then((body)=>{
	// 			setReview(body)
	// 		})
	// 		.catch((e) => {
	// 			console.log(e.message);
	// 		});
	// },[])

	const paginate=pageNumber=> setCurrentPage(pageNumber);
	const nextPage=()=> {
		if(currentPage===3){
			setCurrentPage(1)
		}
		setCurrentPage(prev => prev + 1)
	};
	const prevPage=()=> {
		if(currentPage===1){
			setCurrentPage(3)
		}
		setCurrentPage(prev => prev - 1)
	};
    return (
        <div className="main_cont">
			<Loader loading={review.loading}/>
            <div className="news_rowHome containerP">
				{currentItem.map(item=>(
					<ReviewItem  key={item.partnerId} url={item.partnerImage} desc={item.text} login={item.partnerName}  date={item.creationDate}/>
					))}
            </div>
			{review.data.items.length>=itemOnPage&&<div className="pagination_p">
				<ul className="containerP">
					<li onClick={prevPage} className="prev_pag ">
						<i className="fa fa-arrow-left" aria-hidden="true"/>
					</li>
					<Pagination itemsPerPage={itemOnPage} totalItems={review.items.length} paginate={paginate}
								className={"prev_pag "}/>
					<li onClick={nextPage} className="prev_pag ">
						<i className="fa fa-arrow-right" aria-hidden="true"/>
					</li>
				</ul>
			</div>}
			{auth.token&&<ReviewForm/>}
        </div>
    );
};

