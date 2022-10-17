import React from "react";
import myCardStyle from '../styles/MyCard.module.css';

const MyCard = (props) => {

    const {description} = props

    return (
        <div className={myCardStyle.container}>
                <p>
                    {description}

                </p>
                <button style={{marginRight:10}}>
                    View
                </button>
                <button style={{marginRight:10}}>
                    Edit
                </button>
                <button>
                    Delete
                </button>
        </div>
        
    )
}

export default MyCard