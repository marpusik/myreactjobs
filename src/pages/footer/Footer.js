import React from "react";
import './Footer.css'
import Menu from "./menu/Menu";
import Secondmenu from "./secondmenu/Secondmenu";
import Contract from "./contract/Сontract";
import Social from "./social/Social";
import Email from "./email/Email";

function Footer() {
    return (
        <div className="Footer">
            <div className="Top">
                <div className="Email"><Email/></div>
                <div className="Menu"><Menu/></div>
                <div className="Secondmenu"><Secondmenu/></div>
                <div className="Social"><Social/></div>
            </div>
            <div className="Contract"><Contract/></div>
        </div>
    );
}

export default Footer;