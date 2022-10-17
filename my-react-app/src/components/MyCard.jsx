import React from "react";

const MyCard = (props) => {
    const {children} = props
    return (
        <div>
            <h4>
                This is a card component
            </h4>
            {children}
        </div>
        
    )
}

export default MyCard