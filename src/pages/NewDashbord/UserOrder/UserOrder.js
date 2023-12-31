import React from 'react'
import profile from '../../../images/download.jpg'
import './UserOrder.css'

const UserOrder = () => {
  return (
    <div className='customer'>
        <h1>Customers</h1>
        <div className="d-right">

            <div className="recent-update">
                <h2>Recent Updates</h2>
                <div className="updates">
                    <div className="update">
                        <div className="profile-photo">
                            <img src={profile} alt="" />
                        </div>
                        <div className="message">
                            <p><b>Myke Tyson </b>receved his order of night light lion tech GPS drome.</p>
                            <small className="text-muted">2 Mintes Ago</small>
                        </div>
                    </div>
                    <div className="update">
                        <div className="profile-photo">
                            <img src={profile} alt="" />
                        </div>
                        <div className="message">
                            <p><b>Myke Tyson </b>receved his order of night light lion tech GPS drome.</p>
                            <small className="text-muted">2 Mintes Ago</small>
                        </div>
                    </div>
                    <div className="update">
                        <div className="profile-photo">
                            <img src={profile} alt="" />
                        </div>
                        <div className="message">
                            <p><b>Myke Tyson </b>receved his order of night light lion tech GPS drome.</p>
                            <small className="text-muted">2 Mintes Ago</small>
                        </div>
                    </div>
                </div>
                {/* ===== sales-analitics ==== */}
                <div className="sales-analytics">
                    <h2>Sales Analytics</h2>
                    <div className="d-item">
                    <span class="material-icons-sharp">shopping_cart</span>
                    </div>
                </div>
                
            </div>
            </div> 
    </div>
  )
}

export default UserOrder