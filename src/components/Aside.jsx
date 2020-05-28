import React from "react";
import asideCss from './Aside.module.css';

const Aside = () => {
    return (

        <aside>

            <nav>
                <div className={asideCss.link}><a href="#">Home1</a></div>
                <div className={asideCss.link}><a href="#">Messages</a></div>
                <div className={asideCss.link}><a href="#">Music</a></div>
                <div className={asideCss.link}><a href="#">News1</a></div>


            </nav>

        </aside>
    )
}

export default Aside;