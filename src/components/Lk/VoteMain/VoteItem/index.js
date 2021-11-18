import React from 'react';

export const VoteItem = ({percent1,percent2,percent3,percent4 }) => {
    return (
        <div className="voice_row vote_item">
            <div className="voice_left">
                <div className="voice_title">В какую криптовалюту <br/>стоит вложиться?</div>
                <ul>
                    <li className="active">
                        <div className="voice_numb_li">1</div>
                        <div className="voice_text_li">
                            Bitcoin
                        </div>
                    </li>
                    <li>
                        <div className="voice_numb_li">2</div>
                        <div className="voice_text_li">
                            Etherium
                        </div>
                    </li>
                    <li>
                        <div className="voice_numb_li">3</div>
                        <div className="voice_text_li">
                            Tether
                        </div>
                    </li>
                    <li>
                        <div className="voice_numb_li">4</div>
                        <div className="voice_text_li">
                            litecoin
                        </div>
                    </li>

                </ul>
            </div>
            <div className="voice_right">
                <div className="voice_right_item">
                    <div className="voice_right_top">
                        <div className="voice_right_title">BITCOIN</div>
                        <div className="voice_right_percent">{percent1}%</div>
                    </div>
                    <div className="voice_right_line">
                        <div className="progressbar" style={{width: `${percent1}%`}}/>
                    </div>
                </div>
                <div className="voice_right_item">
                    <div className="voice_right_top">
                        <div className="voice_right_title">ETHERIUM</div>
                        <div className="voice_right_percent">{percent2}%</div>
                    </div>
                    <div className="voice_right_line">
                        <div className="progressbar pink_color" style={{width: `${percent2}%`}}/>
                    </div>
                </div>
                <div className="voice_right_item">
                    <div className="voice_right_top">
                        <div className="voice_right_title">Tether</div>
                        <div className="voice_right_percent">{percent3}%</div>
                    </div>
                    <div className="voice_right_line">
                        <div className="progressbar fiolet_color" style={{width: `${percent3}%`}}/>
                    </div>
                </div>
                <div className="voice_right_item">
                    <div className="voice_right_top">
                        <div className="voice_right_title">Litecoin</div>
                        <div className="voice_right_percent">{percent4}%</div>
                    </div>
                    <div className="voice_right_line">
                        <div className="progressbar blue_color" style={{width: `${percent4}%`}}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

