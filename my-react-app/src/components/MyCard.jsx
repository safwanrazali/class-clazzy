import React from "react";
import myCardStyle from '../styles/MyCard.module.css';
import { Button } from "@mui/material";

const MyCard = (props) => {

    const { description, deleteFunc, editFunc, index, doneFunc } = props

  return (
    <div className={myCardStyle.container}>
      <p>{index+1} - {description}</p>

      <div className={myCardStyle.btnContainer}>
        <Button className={myCardStyle.doneBtn} size="small" variant="contained" onClick={() => doneFunc(index)}>
          Done
        </Button>
        <Button className={myCardStyle.editBtn} size="small" variant="outlined" style={{ marginLeft: 10 }} onClick={() => editFunc(index)}>
          Edit
        </Button>
        <Button size="small" color='error' style={{ marginLeft: 10 }} onClick={() => deleteFunc(index)}>
          Delete
        </Button>
      </div>
    </div>
  )
}

export default MyCard