import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';

const Overview = () => {
  const [metrics, setMetrics] = useState({
    totalSales: 0,
    totalOrders: 0,
    totalProducts: 0,
    totalCustomers: 0,
  });
  const [salesData, setSalesData] = useState([]);
  const [recentOrders, setRecentOrders] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [categoryPerformance, setCategoryPerformance] = useState([]);
  const [customerFeedback, setCustomerFeedback] = useState([]);

  useEffect(() => {
    // Fetch data from your API and update the state
    // For demonstration, we'll use dummy data

    setMetrics({
      totalSales: 15000,
      totalOrders: 320,
      totalProducts: 120,
      totalCustomers: 200,
    });

    setSalesData([
      { name: 'Mon', sales: 400 },
      { name: 'Tue', sales: 300 },
      { name: 'Wed', sales: 500 },
      { name: 'Thu', sales: 700 },
      { name: 'Fri', sales: 600 },
      { name: 'Sat', sales: 800 },
      { name: 'Sun', sales: 900 },
    ]);

    setRecentOrders([
      { id: 1, customer: 'John Doe', total: '$50', date: '2024-07-21' },
      { id: 2, customer: 'Jane Smith', total: '$30', date: '2024-07-22' },
      { id: 3, customer: 'Bob Johnson', total: '$70', date: '2024-07-23' },
    ]);

    setTopProducts([
      { id: 1, name: 'Product A', sales: 200 },
      { id: 2, name: 'Product B', sales: 150 },
      { id: 3, name: 'Product C', sales: 100 },
    ]);

    setCategoryPerformance([
      { name: 'Breakfast', value: 30 },
      { name: 'Pastries', value: 20 },
      { name: 'Frozen Foods', value: 25 },
      { name: 'Grains', value: 15 },
      { name: 'Toiletries', value: 10 },
    ]);

    setCustomerFeedback([
      { customer: 'John Doe', rating: 5, comment: 'Great service!' },
      { customer: 'Jane Smith', rating: 4, comment: 'Good quality products.' },
      { customer: 'Bob Johnson', rating: 5, comment: 'Fast delivery!' },
    ]);
  }, []);

  return (
    <div className="overview">
      {/*
      <div className="header">
        <h2>Admin Dashboard Overview</h2>
        <p>Quick insights into your store's performance</p>
      </div>
*/}
      <div className="metrics">
        <div className="metric">
          <h3>Total Sales</h3>
          <p>${metrics.totalSales}</p>
        </div>
        <div className="metric">
          <h3>Total Orders</h3>
          <p>{metrics.totalOrders}</p>
        </div>
        <div className="metric">
          <h3>Total Products</h3>
          <p>{metrics.totalProducts}</p>
        </div>
        <div className="metric">
          <h3>Total Customers</h3>
          <p>{metrics.totalCustomers}</p>
        </div>
      </div>

      <div className="chart">
        <h3>Sales Over Time</h3>
        <LineChart width={600} height={300} data={salesData}>
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>

      <div className="recent-orders">
        <h3>Recent Orders</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.total}</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="top-products">
        <h3>Top Products</h3>
        <ul>
          {topProducts.map(product => (
            <li key={product.id}>{product.name} - Sales: {product.sales}</li>
          ))}
        </ul>
      </div>

      <div className="category-performance">
        <h3>Category Performance</h3>
        <PieChart width={400} height={400}>
          <Pie
            data={categoryPerformance}
            cx={200}
            cy={200}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {categoryPerformance.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384'][index % 5]} />
            ))}
          </Pie>
        </PieChart>
      </div>

      <div className="customer-feedback">
        <h3>Customer Feedback</h3>
        <ul>
          {customerFeedback.map(feedback => (
            <li key={feedback.customer}>
              {feedback.customer}: {feedback.rating} stars - "{feedback.comment}"
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Overview;
