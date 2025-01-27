import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import '../styles/app.css'

function Test(props) {
  return (
    <>
      <div className="testimonies">
        <div className="test1">
          <div className="talk-img">
            <img src={props.img} alt={props.alt} />
            <p>{props.who}</p>
          </div>
          <p>{props.talk}</p>
          <p>{props.tak}</p>
        </div>
      </div>
    </>
  );
}


function Drop() {
  return (
    <>
      <div className="dropdown">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          
          <li>
            <Link to="/about-us">About</Link>
          </li>
          <li>
            <Link to="/tracking">Tracking</Link>
          </li>
          <li>
            <Link to="/pricing-plans">Pricing</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
// { dropDown ? <Drop /> : null}

function Footer() {
  return (
    <>
      <footer>
       <div className="right">
        <p>Osdin.net &copy; 2025 All Right Reserved.</p>
       </div>
       <div className="left">
        <p>Privacy Policy | Terms & Conditions</p>
       </div>
      </footer>
    </>
  );
}

function Perk(props) {
  return (
    <>
      <div className="service">
        <img src={props.img} alt="" />
        <p> {props.head}</p>
        <p>{props.details}</p>
      </div>
    </>
  );
}
function Prod(props) {
  return (
    <>
      <div className="product-list">
        <h4>{props.name}</h4>
        <p>{props.list}</p>
      </div>
    </>
  );
}

function Cost(props) {
  return (
    <>
      <div className="cost">
        <input type="text" placeholder={props.place} />
      </div>
    </>
  );
}

function Deliver(props) {
  return (
    <>
      <div className="deli">
        <h1>{props.num}</h1>
        <div className="">
          <h3>{props.do}</h3>
          <p>{props.why}</p>
          <p>{props.whyy}</p>
        </div>
      </div>
    </>
  );
}

function Line(props) {
  return (
    <>
      <div className="linn">
        <div className="line">
          <div className="">
            <h4>{props.cont}</h4>
          </div>

          <div className="numbs">
            <p>{props.num1}</p>
            <p>{props.num2}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function What(props) {
  return (
    <>
      <div className="what">
        <div
          className="wedo
      "
        >
          <div className="com">
            <img src={props.img} alt={props.alt} />
          </div>
          <div className="">
            <h3>{props.we}</h3>
            <p>{props.do}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Plan(props) {
  return (
    <>
      <div className="plan">
        <div className="chan">
          <h2>{props.price}</h2>
          <p>{props.for}</p>
          <button className="btn1">{props.type}</button>
        </div>

        <h5>PRODUCT WEIGHT: {props.kg}</h5>
        <h5>COUNTRY:{props.cotry}</h5>
        <h5>DURATION:{props.time}</h5>
        <h5>SUPPORT:Yes</h5>
        <button className="ord">ORDER NOW</button>
      </div>
    </>
  );
}

export { Test, Drop, Footer, Perk, Prod, Cost, Deliver, Line, What, Plan };

