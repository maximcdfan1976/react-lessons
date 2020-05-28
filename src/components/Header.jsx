import React from "react";
import HeaderCss from './Header.module.css'
const Header = () => {
    return (

        <header className={HeaderCss.header}>
            <div className={HeaderCss.logo}>
                <img src="http://horizonmix.ru/wp-content/uploads/2020/04/logo_1.png" alt=""/>
            </div>

        </header>
    )
}

export default Header;