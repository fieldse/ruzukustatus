import React, { Component } from 'react';
import { services, getPlivoStatus, getTokBoxStatus, getFilepickerStatus, getAWSStatus } from './api/services';
import { ServicesList } from './services-list';
import { Status, StatusUpdates } from './status';
import { updateServiceStatus } from './reducers';
const updates = [
  {
    title: 'Everything is working normally',
    date: '10-1-2017'
  }
]

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
    this.setState(() => {
      return {
        updates: updates,
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
    getAWSStatus().then(service => {
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
        <StatusUpdates updates={this.state.updates}/>
        <ServicesList services={this.state.services} />
      </div>
    );
  }
}

export default App;
