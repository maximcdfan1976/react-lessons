import React from "react";
const Content = () => {
    return (

        <div className="content">
            <img className="big__pic" src="https://econclassroom.com/wp-content/uploads/2017/03/forest.jpg"
                 alt=""/>

            <div className="user__block">
                <div className="user__avatar">
                    <img src="https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png" alt=""/>
                </div>

                <div className="user__info">
                    <div className="user__info__inner">
                        <ul>
                            <li>Date Of Birth2:</li>
                            <li>Date Of Birth2:</li>
                            <li>Date Of Birth3:</li>
                        </ul>

                    </div>
                </div>

            </div>

            <div className="post__block">

                <h2>My Post</h2>

                <div className="post__field">
                    <input type="text"/>

                </div>
                <button>Sent</button>
            </div>

            <div className="love__me">
                <div className="love__me__pic">
                    <img src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png" alt=""/>
                </div>

                <div className="love__title">
                    <h3>Why Nobody Loves Me?</h3>
                </div>


            </div>

            <div className="love__me">
                <div className="love__me__pic">
                    <img src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png" alt=""/>
                </div>

                <div className="love__title">
                    <h3>It's Our New Programd</h3>
                </div>


            </div>


        </div>
    )
}

export default Content;