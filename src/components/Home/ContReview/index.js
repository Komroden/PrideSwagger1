import React from 'react';
import './style.scss';
import {ReviewItem} from "./ReviewItem";
import {ReviewForm} from "./ReviewForm";
import {useSelector} from "react-redux";
import {useFetchWithoutTokenGet} from "../../../hooks/useFetchWithoutTokenGet";
import {Loader} from "../../../api/Loader";
import {usePagination} from "../../../hooks/usePagination";
import {PaginationHome} from "../../../api/PaginationHome/PaginationHome";
export const ContReview = () => {
	const { auth } = useSelector((state) => state);
	const review =useFetchWithoutTokenGet('http://lk.pride.kb-techno.ru/api/Main/review-list?pageNumber=0&pageSize=10',{items:[]})

	const pagination=usePagination(review.data.items,9)
    return (
        <div className="main_cont">
			<Loader loading={review.loading}/>
            <div className="news_rowHome containerP">
				{pagination.currentItem.map(item=>(
					<ReviewItem  key={item.partnerId} url={item.partnerImage} desc={item.text} login={item.partnerName}  date={item.creationDate}/>
					))}
            </div>
			{review.data.items.length>9&&<PaginationHome countOnPage={9} items={review.data.items} nextPage={pagination.nextPage}
												  paginate={pagination.paginate} prevPage={pagination.prevPage}/>}
			{auth.token&&<ReviewForm/>}
        </div>
    );
};

