import React from 'react'
import './Bus.css'
import { useState } from "react";
const Bus = () => {
  const [from, setFrom] = useState("");
  const [to , setTo] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({}); // for field validation
  const [showResult, setShowResult] = useState(false); // ✅ dynamic visibility
  const OnSearchClick = () => 
  {
    const newErrors = {};

    if (!from.trim()) newErrors.from = true;
    if (!to.trim()) newErrors.to = true;
    if (!date.trim()) newErrors.date = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // ✅ all fields filled
      alert(`Searching buses from ${from} to ${to} on ${date}`);
      setShowResult(true);
      // You can navigate or trigger your search logic here
    }
    else
      setShowResult(false);
  }

  return (
    <>
    <div
      className="mainDiv"
    >
      <div className="search-card">
        <div className="row">
          <div className="input-group">
            <span className="tag">From</span>
            <input
              type="text"
              placeholder="From location"
              value={from}
              onChange={(e) => {
                setFrom(e.target.value);
                if (errors.from) setErrors((prev) => ({ ...prev, from: false }));
              }}
              className={errors.from ? "error" : ""}
            />
          </div>
          <div className="input-group">
            <span className="tag">To</span>
            <input
              type="text"
              placeholder="To location"
              value={to}
              onChange={(e) => {
                setTo(e.target.value);
                if (errors.to) setErrors((prev) => ({ ...prev, to: false }));
              }}
              className={errors.to ? "error" : ""}
            />
          </div>
          <div className="input-group">
            <span className="tag">Date</span>
            <input
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                if (errors.date) setErrors((prev) => ({ ...prev, date: false }));
              }}
              className={errors.date ? "error" : ""}
            />
          </div>
        </div>
        <button className="search-btn" onClick={OnSearchClick}>Search</button>
      </div>
    </div>
    {showResult && (<div className='BusList'>
      <li>
        <u><h2>Orange Travels</h2></u>
        <h4 style={{ display: "flex", justifyContent: "space-between", width: "100%" }}><span>{from} - {to}</span> <span>  {date} | 09:45 PM</span></h4>
      </li>
      <li>
        <u><h2>Vallabha Travels</h2></u>
        <h4 style={{ display: "flex", justifyContent: "space-between", width: "100%" }}><span>{from} - {to}</span> <span>  {date} | 10:25 PM</span></h4>
      </li>
      <li>
        <u><h2>Navayuga Travels</h2></u>
        <h4 style={{ display: "flex", justifyContent: "space-between", width: "100%" }}><span>{from} - {to}</span> <span>  {date} | 07:15 PM</span></h4>
      </li>
    </div>
    )}
    </>
  )
}
;

export default Bus;