import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
  const [allOrder, setAllOrder] = useState([]);
  useEffect(() => {
    fetch('https://easy-rent-server-kappa.vercel.app/api/find/singleCarRent')
      .then((res) => res.json())
      .then((data) => setAllOrder(data.slice(0, 6)));
  }, []);
  console.log(allOrder);

  return (
    <div>
      <main>
        <h1>Dashbord</h1>
        <div className="date">
          <input type="date" />
        </div>

        <div className="insights">
          <div className="sales">
            <span class="material-icons-sharp">analytics</span>
            <div className="middle">
              <div className="dashboard-left">
                <h3>Total Sales</h3>
                <h1>$25,024</h1>
              </div>

              <div className="progress">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="number">
                  <p>81%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Last 24 Hours</small>
          </div>
          {/* ------------ end of sates --------- */}
          <div className="expence">
            <span class="material-icons-sharp">bar_chart</span>
            <div className="middle">
              <div className="dashboard-left">
                <h3>Total Expence</h3>
                <h1>$14,014</h1>
              </div>

              <div className="progress">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="number">
                  <p>62%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Last 24 Hours</small>
          </div>
          {/* ------------ end of Expence --------- */}
          <div className="income">
            <span class="material-icons-sharp">stacked_line_chart</span>
            <div className="middle">
              <div className="dashboard-left">
                <h3>Total Income</h3>
                <h1>$10,204</h1>
              </div>

              <div className="progress">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="number">
                  <p>44%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Last 24 Hours</small>
          </div>
          {/* ------------ end of income --------- */}
        </div>
        {/* ------------ end of insights --------- */}

        <div className="recent-order">
          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th className="hide-id">Product Number</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>
            </thead>
            {allOrder.map((data) => (
              <tbody>
                <tr>
                  <td>{data.carName}</td>
                  <td className="hide-id">{data._id}</td>
                  <td className="warning">Due</td>
                  <td className="primary">Details</td>
                </tr>
              </tbody>
            ))}
          </table>
          <Link className="table-single-link" to="#">
            Show All
          </Link>
        </div>
      </main>
    </div>
  );
};

export default DashboardHome;
