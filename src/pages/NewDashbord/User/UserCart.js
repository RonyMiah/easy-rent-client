import React from 'react'


const UserCart = ({userdata}) => {
    const {userName, email, _id, password} = userdata
  return (
    <div className='alluser-cart'> 
            <tbody>
                <tr>
                    <td>{userName}</td>
                    <td>{email}</td>
                    <td className='hide-id warning'>{_id}</td>
                    <td className='primary'>{password}</td>

                </tr>
                                                  
            </tbody>
    </div>
  )
}

export default UserCart