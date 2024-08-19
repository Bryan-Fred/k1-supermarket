import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Sidebar from './Sidebar';
import Overview from './Overview';
import Products from './Products';
import Categories from './Categories';
import Orders from './Orders';
import './Dashboard.css';

const Dashboard = () => {
  const [page, setPage] = useState('Overview');

  const renderPage = () => {
    switch (page) {
      case 'Overview':
        return <Overview />;
      case 'Products':
        return <Products />;
      case 'Categories':
        return <Categories />;
      case 'Orders':
        return <Orders />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="dashboard">
      <Sidebar setPage={setPage} activePage={page} />
      <div className="main-content">
        <TransitionGroup>
          <CSSTransition
            key={page}
            timeout={300}
            classNames="fade"
          >
            {renderPage()}
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Dashboard;
