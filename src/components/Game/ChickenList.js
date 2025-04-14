import React, { useState } from 'react';

const ChickenList = ({ chickens, onSelectChicken, loading, onRefresh }) => {
  return (
    <div className="chicken-list-container">
      <div className="chicken-list-header">
        <h4>🐔 Chickens in Sanctuary</h4>
        <button onClick={onRefresh} disabled={loading} className="chicken-refresh-button">
          {loading ? 'Refreshing...' : 'Refresh List'}
        </button>
      </div>
      <ul className="chicken-list">
        {chickens.length === 0 && (
          <li className="chicken-list-empty">No chickens found.</li>
        )}
        {chickens.map((chicken) => (
          <li key={chicken.name} className="chicken-list-item">
            <button onClick={() => onSelectChicken(chicken)} className="chicken-list-select">
              <span role="img" aria-label="chicken">🐔</span> <b>{chicken.name}</b> <span className="chicken-type">({chicken.type})</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChickenList;
