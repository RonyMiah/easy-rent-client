import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const ManageAllOrderCart = ({alldata, deletfunc}) => {
     const {_id, carName, email, endDate, name, rent , startDate} = alldata;
  return (
    <div>
        <p><strong>{name}</strong></p>
        <p>{carName}</p>
        <p>{email}</p>
        <p>{endDate}</p>       
        <p>{rent}$</p>
        <p>{startDate}</p>
        <button onClick={() => deletfunc(_id)} className="delete-btn" ><DeleteIcon></DeleteIcon></button>
    </div>
  )
}

export default ManageAllOrderCart