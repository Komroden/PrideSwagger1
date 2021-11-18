import React from 'react';
import {Line} from "../MainTitle/GreyLine";
import {VoteItem} from "./VoteItem";

export const VoteMain = () => {
    return (
        <>
            <Line/>
            <div className="main_for_all_pages">
                <div className="main_content_right_sidebar_title_bl">
                    <div className="sidebar_title_bl_left">
                        <div className="main_content_right_sidebar_title_bl_title">Голосование</div>
                        <div className="main_content_right_sidebar_title_bl_subtitle">Тут какойто текст про
                            голосование
                        </div>
                    </div>
                    <div className="sidebar_title_bl_right">
                        <form>
                            <select className="select_filter" name="filter">
                                <option selected>Все</option>
                                <option value="Первый">Первый</option>
                                <option value="Второй">Второй</option>
                                <option value="Третий">Третий</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="vote_row">
                    <VoteItem percent1={0} percent2={0} percent3={0} percent4={0}/>
                    <VoteItem percent1={20} percent2={50} percent3={90} percent4={70}/>
                    <VoteItem percent1={70} percent2={90} percent3={60} percent4={50}/>
                </div>
            </div>

        </>
    );
};

