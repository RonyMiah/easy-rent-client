import React, { useEffect, useState } from 'react';
import './ManageAllOrder.css';
// import ManageAllOrderCart from './ManageAllOrderCart'
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';

const ManageAllOrder = () => {
  // Final order
  const [finalallOrder, setFinalAllOrder] = useState([]);
  useEffect(() => {
    fetch('https://easy-rent-server-kappa.vercel.app/api/find/rentAllCars')
      .then((res) => res.json())
      .then((data) => setFinalAllOrder(data));
  }, []);
  // console.log(finalallOrder)

  const handleDeletefinal = (id) => {
    fetch(
      `https://easy-rent-server-kappa.vercel.app/api/find/rentCarsdelete/${id}`,
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.message) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Order has been Deleted',
            showConfirmButton: false,
            timer: 1500,
          });
          const remainig = finalallOrder.filter(
            (service) => service._id !== id
          );
          setFinalAllOrder(remainig);
        }
      });
  };

  return (
    <div className="manageallorderbody">
      <h1>ManageAllOrder {finalallOrder.length}</h1>
      <div className="manageallordercart">
        {finalallOrder.map((data) => (
          <div key={data._id}>
            <img style={{ width: '200px' }} src={data.product_imgUrl} alt="" />
            <p>
              <strong>{data.cus_name}</strong>
            </p>
            <p>
              <strong>{data.product_name}</strong>
            </p>
            <p>{data.cus_email}</p>
            <p>{data.cus_phone}</p>
            <p>
              {data.cus_add1}, {data.cus_city}, {data.cus_country}
            </p>
            <p>
              {data.date_start} - {data.date_end}
            </p>
            <p>
              {data.ship_city}, {data.ship_country}
            </p>
            <p>
              <strong>৳</strong> {data.total_amount}
            </p>
            {data.paymentStatus === 'Successful' ? (
              <p>
                <strong className="color-success">{data.paymentStatus}</strong>
              </p>
            ) : (
              <p>
                <strong className="color-warning">{data.paymentStatus}</strong>
              </p>
            )}

            <button
              onClick={() => handleDeletefinal(data._id)}
              className="delete-btn"
            >
              <DeleteIcon></DeleteIcon>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAllOrder;
