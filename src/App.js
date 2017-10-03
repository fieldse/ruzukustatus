import React, { Component } from 'react';
import { services, getPlivoStatus, getTokBoxStatus, getFilepickerStatus } from './api/services';
import { ServicesList } from './services-list';
import { Status, StatusUpdates } from './status/index';
import { updateServiceStatus } from './reducers';
import { updates } from './status.json';
import { processDates } from './helpers/process-dates';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updates: [],
      services: [],
      components: []
    }
  }
  componentDidMount() {
    this.updateServices();
    const updateList = processDates(updates);
    this.setState(() => {
      return {
        updates: updateList,
        services: services()
      }
    })
  }
  updateServices() {
    getPlivoStatus().then(plivo => {
      this.setState(({services}) => {
        return {
          services: updateServiceStatus(services, plivo)
        }
      })
    });
    getFilepickerStatus().then(service => {
      this.setState(({services}) => {
        return {
          services: updateServiceStatus(services, service)
        }
      })
    });
    getTokBoxStatus().then(service => {
      this.setState(({services}) => {
        return {
          services: updateServiceStatus(services, service)
        }
      })
    })
  }

  render() {
    return (
      <div className="rz-content rz-page__content">
        <Status update={this.state.updates[0]} />
        <ServicesList services={this.state.services} />
        <StatusUpdates updates={this.state.updates}/>
      </div>
    );
  }
}
export default App;
