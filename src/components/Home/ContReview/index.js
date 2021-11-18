import React, {useState} from 'react';
import './style.scss';
import {ReviewItem} from "./ReviewItem";
import {Pagination} from "./Pagination";
import {ReviewForm} from "./ReviewForm";
export const ContReview = () => {
	const [review,setReviw]=useState([
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith1'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith2'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith3'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith4'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith5'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith6'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith7'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith8'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith9'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith10'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith'}
					desc={'This is Photoshop\'s version'}/>,
		<ReviewItem url={'url(images/logo_news.png)'}
					login={'Adam Smith'}
					desc={'This is Photoshop\'s version'}/>,
	]);
	const [currentPage,setCurrentPage]=useState(1);
	const [itemOnPage]=useState(9);
	const lastItemIndex = currentPage * itemOnPage
	const firstItemIndex = lastItemIndex-itemOnPage
	const currentItem = review.slice(firstItemIndex,lastItemIndex)

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
            <div className="news_rowHome containerP">
				{currentItem.map(item=>(
					item
					))}
            </div>
            <div className="pagination_p">
				<ul className="containerP">
					<li onClick={prevPage} className="prev_pag ">
						<i className="fa fa-arrow-left" aria-hidden="true"/>
					</li>
				<Pagination itemsPerPage={itemOnPage} totalItems={27} paginate={paginate}/>
					<li onClick={nextPage} className="prev_pag ">
						<i className="fa fa-arrow-right" aria-hidden="true"/>
					</li>
				</ul>
            </div>
			<ReviewForm/>
        </div>
    );
};

