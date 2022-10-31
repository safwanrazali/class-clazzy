import React from "react";
import myCardStyle from '../styles/MyCard.module.css';
import { Button } from "@mui/material";

const MyCard2 = (props) => {

    const { doneContent, deleteFunc, index } = props

  return (
    <div className={myCardStyle.container}>
      <p>{index+1} - {doneContent}</p>

      <div className={myCardStyle.btnContainer}>
        <Button size="small" color='error' style={{ marginLeft: 10 }} onClick={() => deleteFunc(index)}>
          Delete
        </Button>
      </div>
    </div>
  )
}

export default MyCard2