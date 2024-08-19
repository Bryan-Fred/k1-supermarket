import React, { useState, useEffect } from 'react';
import gel from '../images/gel.png';

const OffersPage = () => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const twoDaysInMilliseconds = 2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds
    const endTime = now + twoDaysInMilliseconds;
    const timeLeft = endTime - now;

    return {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();

      if (
        newTimeLeft.days <= 0 &&
        newTimeLeft.hours <= 0 &&
        newTimeLeft.minutes <= 0 &&
        newTimeLeft.seconds <= 0
      ) {
        setTimeLeft(calculateTimeLeft()); // Reset the timer
      } else {
        setTimeLeft(newTimeLeft);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="offers-page">
      <header className="offers-header">
        <h1>Exclusive Offers</h1>
        <p>Grab these amazing deals before they’re gone!</p>
      </header>

      <section className="featured-offers">
        <h2>Featured Offers</h2>
        <div className="offer-card">
          <div className="offer-image">
            <img src={gel} alt="Shower Gel" />
          </div>
          <div className="offer-details">
            <h2>Shower Gel</h2>
            <p>Shampoo</p>
            <p className="price">
              <span className="original-price">$219.78</span>{' '}
              <span className="discounted-price">$149.99</span>
            </p>
          </div>
        </div>
        <div className="offer-timer">
          <p>
            Ends in:{' '}
            <span className="timer">
              {String(timeLeft.days).padStart(2, '0')}d{' '}
              {String(timeLeft.hours).padStart(2, '0')}h{' '}
              {String(timeLeft.minutes).padStart(2, '0')}m{' '}
              {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </p>
        </div>
      </section>

      <section className="upcoming-offers">
        <h2>Upcoming Offers</h2>
      </section>
    </div>
  );
};

export default OffersPage;