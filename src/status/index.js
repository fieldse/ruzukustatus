import * as React from 'react';
import whiteCheckIcon from '../icons/white-check.svg';
import whiteDownIcon from '../icons/white-x.svg';
import whiteIssueIcon from '../icons/white-issue.svg';
import './status.css';

function StatusUpdates({ updates = [] }) {
  return (
    <div className="rz-status-updates">
      <h3 className="rz-section-heading">
        Status Updates
      </h3>
      <ul className="rz-status-updates__list update-list">
        <UpdateList updates={updates} />
      </ul>
    </div>
  );
}
function UpdateList({updates}) {
  if(updates.length <= 0) {
    return (
      <li className="rz-status-updates__list-item">No updates just yet</li>
    )
  }
  return updates.map( (update, i) => {
    return (
      <li key={i} className="rz-status-updates__list-item update-item">
        <p class="update-item__msg">{update.title}</p> 
        <p class="update-item__date">{update.date}</p>
      </li>
    )
  });
}

function StatusBar({ update = {} }) {
  const {title, status} = update;
  const iconGrid = {
    'nominal': whiteCheckIcon,
    'issue': whiteIssueIcon,
    'down': whiteDownIcon
  }
  return (
    <div className={`rz-status-panel ${status}`}>
      <img src={iconGrid[status]} alt="check" className="rz-status-panel__icon" />
      <h3>{ title }</h3>
    </div> 
  )
}


export { StatusBar, StatusUpdates }