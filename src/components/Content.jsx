import React from "react";
import contentCss from './Content.module.css';
const Content = () => {
    return (

        <div className={contentCss.content}>
            <img className={contentCss.big__pic} src="https://econclassroom.com/wp-content/uploads/2017/03/forest.jpg"
                 alt=""/>

            <div className={contentCss.user__block}>
                <div className={contentCss.user__avatar}>
                    <img src="https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png" alt=""/>
                </div>

                <div className={contentCss.user__info}>
                    <div className={contentCss.user__info__inner}>
                        <ul>
                            <li>Date Of Birth2:</li>
                            <li>Date Of Birth2:</li>
                            <li>Date Of Birth3:</li>
                        </ul>

                    </div>
                </div>

                <div className={contentCss.link}><a href="#">Home1</a></div>
                <div className={contentCss.link}><a href="#">Messages</a></div>
                <div className={contentCss.link}><a href="#">Music</a></div>
                <div className={contentCss.link}><a href="#">News1</a></div>

            </div>

            <div className="post__block">



                <h2>My Post</h2>

                <div className={contentCss.post__field}>
                    <input type="text"/>

                </div>
                <button>Sent</button>
            </div>

            <div className={contentCss.love__me}>
                <div className={contentCss.love__me__pic}>
                    <img src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png" alt=""/>
                </div>

                <div className={contentCss.love__me}>
                    <h3>Why Nobody Loves Me?</h3>
                </div>


            </div>

            <div className="love__me">
                <div className={contentCss.love__me__pic}>
                    <img src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png" alt=""/>
                </div>

                <div className="love__title">
                    <h3>It's Our New Programed</h3>
                </div>


            </div>


        </div>
    )
}

export default Content;