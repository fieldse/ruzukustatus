import React, { Component } from 'react';
import { services, updateService, getTokBoxStatus } from './api/services';
import { ServicesList } from './services-list';
import { StatusBar, StatusUpdates } from './status/index';
import { updatedServiceState } from './reducers';
import { processDates, recentUpdate } from './helpers/process-dates';
import { updates } from './status-updates';

class App extends Component {
  constructor(props) {
    super(props)
    const updateList = processDates(updates);
    this.state = {
      updates: updateList,
      systemStatus: recentUpdate(updates[0]),
      services: services,
    }
  }
  componentDidMount() {
    this.updateServices();
  }
  updateServiceState(service) {
    this.setState(({services}) => {
      return {
        services: updatedServiceState(services, service)
      }
    })
  }
  updateServices() {
    services.filter(service => service && service.name && !/Tokbox/i.test(service.name))
      .map(service => updateService(service)
        .then(this.updateServiceState.bind(this)))
    getTokBoxStatus().then(this.updateServiceState.bind(this));
  }

  render() {
    return (
      <div className="rz-content rz-page__content">
        <StatusBar update={this.state.systemStatus} />
        <ServicesList services={this.state.services} />
        <StatusUpdates updates={this.state.updates}/>
      </div>
    );
  }
}
export default App;
