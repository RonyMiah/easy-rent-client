import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import DeleteIcon from '@mui/icons-material/Delete';
import './User.css';

const User = () => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    fetch('https://easy-rent-server-kappa.vercel.app/api/users/findAll')
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);

  const handleDelete = (id) => {
    fetch(
      `https://easy-rent-server-kappa.vercel.app/api/users/deleteUser/${id}`,
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
            title: 'User has been Deleted',
            showConfirmButton: false,
            timer: 1500,
          });
          const remainig = allUsers.filter((service) => service._id !== id);
          setAllUsers(remainig);
        }
      });
  };
  return (
    <div className="all-users">
      <h1>All Users</h1>

      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>User Email</th>
            <th className="hide-id">User Id</th>
            <th>Delete User</th>
          </tr>
        </thead>

        {allUsers.map((data) => (
          <tbody className="alluser-cart-tbody">
            <tr>
              <td>{data.userName}</td>
              <td>{data.email}</td>
              <td className="warning hide-id">{data._id}</td>
              <td className="primary">
                <button
                  onClick={() => handleDelete(data._id)}
                  className="user-delete-btn"
                >
                  <DeleteIcon></DeleteIcon>
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default User;
