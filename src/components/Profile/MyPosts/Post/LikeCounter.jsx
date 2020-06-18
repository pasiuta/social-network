import React from "react";
import classes from "./LikeCounter.module.css"

const LikeCounter = (props) => {
    return (
        <div className={classes.item}>
            {props.like}


        </div>
    )
}
export default LikeCounter;