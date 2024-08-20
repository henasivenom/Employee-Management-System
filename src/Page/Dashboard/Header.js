import React from 'react'
import './header.css'

function Header({ setIsAdding }) {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-container">
          <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1724126503~exp=1724130103~hmac=d020289f864c974ddae2b0b6dde508fcd4e9f798b5fdf2c9e2054427621809f4&w=740" alt="Logo" className="logo" />
          </div>
        <h1 className="header-title">Employee Management Software</h1>
        <div className="button-container">
          <button onClick={() => setIsAdding(true)} className="add-employee-button">Add Employee</button>
        </div>
      </div>
    </header>
  );
}

export default Header