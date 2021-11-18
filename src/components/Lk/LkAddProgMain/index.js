import React from 'react';

import './style.scss';
export const LkAddProgMain = () => {
    return (
        <>
            <div className="grey_line"/>
            <div className="name_page">
                <img src="/images/black_arrow.png" alt=""/>
                    <span className="name_page_text">Добавление программы</span>
            </div>
            <div className="prog_text">
                <p>
                    Якщо Користувач не згоден з цією Угодою повністю або частково, Виконавець просить його залишити цей
                    сайт, та/або видалити додаток з пристрою. Ці умови регулюють використання Користувачем Сайтів та
                    послуг OLX.ua. Використання послуг сайту OLX.ua означає, що Користувач ознайомлений з цією Угодою,
                    розуміє і приймає її умови. Права та обов’язки Сторін, правила користування Сайтами можуть міститись
                    також у статтях Центру підтримки користувачів, матеріалах, розміщених на Сайті (або посилання на які
                    розміщені на Сайті). Такі статті, матеріали являються невід’ємною частиною Угоди. Якщо Користувач не
                    згоден з цією Угодою повністю або частково, Виконавець просить його залишити цей сайт, та/або
                    видалити додаток з пристрою. Ці умови регулюють використання Користувачем Сайтів та послуг OLX.ua.
                    Використання послуг сайту OLX.ua означає, що Користувач ознайомлений з цією Угодою, розуміє і
                    приймає її умови. Права та обов’язки Сторін, правила користування Сайтами можуть міститись також у
                    статтях Центру підтримки користувачів, матеріалах, розміщених на Сайті (або посилання на які
                    розміщені на Сайті). Такі статті, матеріали являються невід’ємною частиною Угоди.</p>
                <p>Якщо Користувач не згоден з цією Угодою повністю або частково, Виконавець просить його залишити цей
                    сайт, та/або видалити додаток з пристрою. Ці умови регулюють використання Користувачем Сайтів та
                    послуг OLX.ua. Використання послуг сайту OLX.ua означає, що Користувач ознайомлений з цією Угодою,
                    розуміє і приймає її умови. Права та обов’язки Сторін, правила користування Сайтами можуть міститись
                    також у статтях Центру підтримки користувачів, матеріалах, розміщених на Сайті (або посилання на які
                    розміщені на Сайті). Такі статті, матеріали являються невід’ємною частиною Угоди. </p>
            </div>
            <div className="addprog_form">
                <form>
                    <div className="addprog_form_row">
                        <div className="addprog_form_input">
                            <input type="text" className="clasic_input" placeholder="Name"/>
                                <input type="text" className="clasic_input" placeholder="Email Address"/>
                        </div>
                        <textarea placeholder="Message" className="clasic_input"/>
                        <div className="addprog_form_grey">
                            <div className="addprog_form_grey_img">
                                <img src="/images/file_icon.png" alt=""/>
                            </div>
                            <div className="addprog_form_grey_descr">
                                <div className="addprog_form_grey_top">Прикрепите файл</div>
                                <div className="addprog_form_grey_title">Программа</div>
                                <div className="addprog_form_grey_bottom">Предлогаемая программа</div>
                            </div>
                            <div className="addprog_form_grey_doc">
                                <label>
                                    <input type="file"/>
                                        <span>Добавить файл</span>
                                </label>
                            </div>
                            <div className="addprog_form_send">
                                <button>Отправить программу</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

