import * as React from 'react';

function ServicesList({ services = [] }) {
  return (
    <ul className="rz-external-services">
      <h3 className="rz-external-services__header rz-section-heading">External Services</h3>
      { services.map( ({status, name}, i) => {
        return (
          <li key={i} className={`rz-external-services__item${statusClassName(status)}`}>{ name }</li>
        )
      })}
    </ul>
  );
}

function statusClassName(status) {
  const statusGrid = {
    'ok': ' ok',
    'issue': ' issue',
    'loading': ' loading'
  }
  return statusGrid[status]
}

export { ServicesList };