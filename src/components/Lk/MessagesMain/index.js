import React from 'react';
import './style.scss';
import {LkMessagesMainYou} from "./LkMessagesMainYou";
import {LkMessagesMainUser} from "./LkMessagesMainUser";
import {Line} from "../MainTitle/GreyLine";
import {LineTitle} from "../LineTitle";
import {BlockUserId} from "../LkGuestMain/BlockUserId";

export const MessagesMain = () => {
    const rangeEmojis = Array.from({length: 256}, (v, k) => (k + 9728).toString(16));
    return (
        <>
            <Line/>
            <div className="main_for_all_pages message_no_right_pad">
                <LineTitle title={'Сообщения'}/>
                <div className="message_form_row">
                    <div className="message_left_form">
                        <div className="messageses">
                                <LkMessagesMainUser url={'url(/images/u1.png)'} time={'12:47'} text={'It goes a little something like this.'}/>
                                <LkMessagesMainUser url={'url(/images/u1.png)'} time={'12:57'} text={'It was all a dream, I used to read Word Up magazine Salt\'n\'Pepa and Heavy D up in the limousine.'}/>
                                <LkMessagesMainYou url={'url(/images/u3.png)'} text={'Did you ever Hang\' pictures on your wall?'} time={'12:58'}/>
                            <LkMessagesMainUser url={'url(/images/u1.png)'} time={'13:07'} text={'Yes I did! Every Saturday! Rap Attack, Mr. Magic, Marley Marl. I even let my tape rock \'til my tape popped. Smokin\' weed and bamboo, sippin\' on private stock.  But this was way back, when I had the red and black lumberjack with the hat to match.'}/>
                            <LkMessagesMainYou url={'url(/images/u3.png)'} text={'Haha awesome,  I think I know the album your looking. for.'} time={'13:18'}/>
                        </div>
                        <div className="message_left_form_navig">
                            <form>
                                <div className="message_left_form_navig_row">
                                    <div className="mes_file">
                                        <label>
                                            <input type="file"/>
                                                <img src="/images/file_mes.png" alt=""/>
                                        </label>
                                    </div>
                                    <div className="mes_text">
                                        <textarea placeholder="Type your message..."/>
                                    </div>
                                    <div className="mes_emoji">
                                        <a href="#">
                                            <img src="/images/emoji.png" alt=""/>
                                        </a>
                                        {/*<div>*/}
                                        {/*    {rangeEmojis.map((code, index) => <Emoji code={unescape('%u' + code)}*/}
                                        {/*                                             title={"My code is :" + code}*/}
                                        {/*                                             key={'emj' + index}/>)}*/}
                                        {/*</div>*/}
                                    </div>
                                    <div className="mes_send">
                                        <button>
                                            <img src="/images/send_mes.png" alt=""/>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="message_right_form">
                        <div className="message_user_right">
                            <div className="gost_item">
                                <div className="gost_item_top">
                                    <div className="gost_item_logo" style={{backgroundImage: 'url(/images/u1.png)'}}></div>
                                    <div className="gost_item_top_right">
                                        <div className="gost_item_name">Dmitriy Ivanov</div>
                                        <div className="gost_item_year">25 лет</div>
                                        <div className="gost_item_online">Online</div>
                                    </div>
                                </div>
                                <div className="gost_item_buttons">

                                    <a href="#" className="gost_item_profile">
                                        <img src="/images/prof.png" alt=""/>
                                            <span>Профайл пользователя</span>
                                    </a>
                                </div>
                                <BlockUserId/>
                            </div>
                        </div>
                        <a href="#" className="technical_help">Тех поддержка</a>
                    </div>
                </div>
            </div>

        </>
    );
};

