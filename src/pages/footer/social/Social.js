import React from "react";
import instagram from "../../../assets/images/pages/instagram.svg";
import vk from "../../../assets/images/pages/vk.svg";
import facebook from "../../../assets/images/pages/facebook.svg";
import youtube from "../../../assets/images/pages/youtube.svg";

function Social() {
    return (
        <ul className="social__list">
                <li className="social__item">
                    <a className="social__link"
                       href="tut.by"><img className="instagram"
                                    src={instagram}
                                    alt=""/>
                   </a>
                </li>
                <li className="social__item">
                    <a className="social__link"
                       href="tut.by"><img className="vk"
                                    src={vk}
                                    alt=""/></a>
                </li>
                <li className="social__item">
                    <a className="social__link"
                       href="tut.by"><img className="facebook"
                                    src={facebook}
                                    alt=""/></a>
                </li>
            <li className="social__item">
                <a className="social__link"
                   href="tut.by"><img className="youtube"
                                src={youtube}
                                alt=""/></a></li>
        </ul>
    );
}

export default Social;
