import React from "react";
import "./LoadingSkeleton.css";

const LoadingSkeleton = ({ type = "card", count = 3 }) => {
  if (type === "card") {
    return (
      <div className="skeleton-grid">
        {[...Array(count)].map((_, i) => (
          <div key={i} className="skeleton-card">
            <div className="skeleton skeleton-number"></div>
            <div className="skeleton-content">
              <div className="skeleton skeleton-title"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-detail"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "ayah") {
    return (
      <div className="skeleton-ayah-container">
        {[...Array(count)].map((_, i) => (
          <div key={i} className="skeleton-ayah">
            <div className="skeleton skeleton-ayah-number"></div>
            <div className="skeleton-ayah-content">
              <div className="skeleton skeleton-arabic"></div>
              <div className="skeleton skeleton-latin"></div>
              <div className="skeleton skeleton-indo"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default LoadingSkeleton;
