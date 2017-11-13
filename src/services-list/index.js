import * as React from 'react';

function ServicesList({ services = [] }) {
  return (
    <ul className="rz-external-services">
      <h3 className="rz-external-services__header rz-section-heading">External Services</h3>
      { services.map( ({status, title}, i) => {
        return (
          <li key={i} { ...statusAttributes(status) }>{ title }</li>
        )
      })}
    </ul>
  );
}

function statusAttributes(status) {
  const statusCss = {
    'ok': ' ok',
    'issue': ' issue',
    'loading': ' loading'
  }
  const statusAttr = {
    'issue': { 'aria-label': 'intermittent issues' }
  }
  return { className: `rz-external-services__item${statusCss[status]}`, ...statusAttr[status] }
}

export { ServicesList };