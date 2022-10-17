import React from "react";
import myCardStyle from '../styles/MyCard.module.css';

const MyCard = (props) => {

    const {children, description} = props

    return (
        <div >
            <div className={myCardStyle.container}>
            <h4>
                This is a card component
            </h4>
            </div>
            <div className={myCardStyle.container}>
                <p>
                    {description}

                </p>
            {children}
            </div>
        </div>
        
    )
}

export default MyCard