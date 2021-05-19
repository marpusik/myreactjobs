
import React from 'react';
import s from "./linkBtn.module.scss";

function linkBtn(props) {
    return (
        <>
        <button className={s.link}>{props.text}</button>
        </>
    );
}

export default linkBtn;