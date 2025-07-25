import React from "react";

const Review = (props) => {
  return (
    <div className="review-card">
      <div className="review-content">
        <div style={{ padding: '0 20px 0 30px' }}>
          <div style={{ display: 'flex', placeItems: 'center' }}>
            <h2 style={{ width: '90%' }}>{props.name}</h2>
            <a href={props.link} target="_blank" className="link">
              <p className="telegram-icon"></p>
              <p className="array-corner-icon"></p>
            </a>
          </div>
          <p className="review">{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Review;