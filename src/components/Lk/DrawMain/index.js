import React, { useState} from 'react';
import {DrawItem} from "./DrawItem";
import {DrawItemArchive} from "./DrawItemArchive";
import './style.scss';
import {Line} from "../MainTitle/GreyLine";
import {useSelector} from "react-redux";

export const DrawMain = () => {

    const [filter,setFilter]=useState('all');
    const handleFilter=(e)=>{
        setFilter(e.value)
    }
    const { contests } = useSelector((state) => state);
    return (
        <>
            <Line/>
            <div className="main_for_all_pages">
                <div className="main_content_right_sidebar_title_bl">
                    <div className="sidebar_title_bl_left">
                        <div className="main_content_right_sidebar_title_bl_title">Розыгрыши</div>
                        <div className="main_content_right_sidebar_title_bl_subtitle">Тут какойто текст про
                            голосование
                        </div>
                    </div>
                    <div className="sidebar_title_bl_right">
                        <form>
                            <select defaultValue={'all'}  className="select_filter" name="filter" onChange={e => handleFilter(e.target)}>
                                <option value={'all'} >Все</option>
                                <option value="active">Активные</option>
                                <option value="past">Прошедшие</option>
                            </select>
                        </form>
                    </div>
                </div>
                {(filter==='all'||filter==='active')&&contests.value.filter(item=>!item.winnerName).map((item,index)=>
                    <DrawItem key={item.id} imgPrice={item.image} priceAdd={item.participationCost} title={item.caption} desc={item.desc} date={item.finishDate}
                    members={item.participantsCount} startDate={item.startDate}/>
                    )}

                <div className="rozgr_archive">
                    {(filter==='all'||filter==='past')&&contests.value.filter(item=>item.winnerName).map((item,index)=>
                        <DrawItemArchive key={item.id} imgUrl={item.image} priceAdd={item.participationCost} title={item.caption} desc={item.desc} date={item.finishDate}
                                  members={item.participantsCount} startDate={item.startDate} name={item.winnerName}/>
                    )}
                </div>
            </div>

        </>
    );
};

