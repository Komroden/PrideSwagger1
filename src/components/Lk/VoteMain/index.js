import React from 'react';
import {Line} from "../MainTitle/GreyLine";
import {useSelector} from "react-redux";
import {VoteItem} from "../LkHomeMain/VoteItem";


export const VoteMain = () => {
    const {votes} = useSelector((state) => state);
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
                    {/*<div className="sidebar_title_bl_right">*/}
                    {/*    <form>*/}
                    {/*        <select className="select_filter" name="filter">*/}
                    {/*            <option selected>Все</option>*/}
                    {/*            <option value="Первый">Первый</option>*/}
                    {/*            <option value="Второй">Второй</option>*/}
                    {/*            <option value="Третий">Третий</option>*/}
                    {/*        </select>*/}
                    {/*    </form>*/}
                    {/*</div>*/}
                </div>
                {votes.value.items.map(item=><VoteItem key={item.id} id={item.id} title={item.question} votesBars={item.answers} all={item.totalVotesCount}/>)}
            </div>

        </>
    );
};

