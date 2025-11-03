import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import Bus from './Pages/Bus';
import Train from './Pages/Train';

const MainBody = () => {
  return (
    <>
      <header className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            BusBookingApp
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/bus">Bus</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/train">Train</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bookings">My Bookings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main className="body">
        <Routes>
          <Route
            path="/"
            element={
              <div className="text-center">
                <h1 className="display-5 fw-bold text-primary">Welcome to BusBookingApp</h1>
                <p className="lead text-muted">
                  Book your bus tickets easily and quickly from anywhere.
                </p>
                <button className="btn btn-primary btn-lg mt-3">Get Started</button>
              </div>
            }
          />
          <Route path="/bus" element={<Bus />} />
          <Route path="/train" element={<Train />} />
        </Routes>
      </main>
    </>
  );
};

export default MainBody;
