import * as React from 'react';
import whiteCheckIcon from '../icons/white-check.svg';

function StatusUpdates({ updates = [] }) {
  return (
    <div className="rz-status-updates">
      <h3 className="rz-section-heading">
        Status Updates
      </h3>
      <ul className="rz-status-updates__list">
        { updates.map( (update, i) => {
          return (
            <li key={i} className="rz-status-updates__list-item">{update.title} {update.date}</li>
          )
        })}
      </ul>
    </div>
  );
}
function Status({ update = {} }) {
  return (
    <div className="rz-status-panel">
      <img src={whiteCheckIcon} alt="check" className="rz-status-panel__icon" />
      <h3>{ update.title }</h3>
    </div> 
  )
}

function Test() {
  return (
    <div>TEST</div>
  )
}

export { Status, StatusUpdates, Test }