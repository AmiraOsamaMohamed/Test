import React from "react";
import "./signup.css"
// import Header from "../../component/Header/Header";
// import { Link } from "react-router-dom";

const Signup = ()=> {
    return (
        <form className="form">
        <h2>Sign Up</h2>

        <div className="first-name">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="last-name">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="email">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="password">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="number">
          <label>PhoneNumber</label>
          <input
            type="Phone Number"
            className="form-control"
            placeholder="Enter Your Phone Number"
          />
        </div>
        <div className="skills">
          <label>skills</label>
          <input
            type="Text"
            className="form-control"
            placeholder="Enter  Your skills"
          />
        </div>
        <div className="ABout you">
          <label>About You</label>
          <input
            type="Text"
            className="form-control"
            placeholder="Describe yourself"
          />
        </div>

        <div className="submit">
          <button type="submit" className="btn">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/Login">Log in?</a>
        </p>
      </form>
  
     
    );
  };

export default Signup;

 