import { getJson } from './helpers';
const servicesList = [
  {
    name: 'Amazon Web Services',
    statusUrl: 'https://status.aws.amazon.com/data.json',
    status: 'ok'
  },
  {
    name: 'TokBox',
    statusUrl: 'https://status.tokbox.com/opentok.json',
    status: 'loading'
  },
  {
    name: 'Plivo',
    statusUrl: 'https://status.plivo.com/history.json',
    status: 'loading'
  },
  {
    name: 'Filestack',
    statusUrl: 'https://status.filestack.com/history.json',
    status: 'loading'
  }
]

async function getPlivoStatus() {
  return await getJson('https://status.plivo.com/history.json')
    .then(processStatusPage)
}

async function getFilepickerStatus() {
  return await getJson('https://status.filestack.com/history.json')
    .then(processStatusPage)
}

async function getAWSStatus() {
  return await getJson('https://status.aws.amazon.com/data.json')
    .then(processAWSStatus)
}

async function getTokBoxStatus() {
  return await getJson('https://status.tokbox.com/opentok.json')
    .then(({health}) => {
      return {
        name: 'TokBox',
        status: health.status
      };
    })
}

function processStatusPage({page_status, components}) {
  // specifically for Powered By StatusPage Sites
  let issues = components.filter( component => {
    return component.status !== 'operational';
  });
  return {
    name: page_status.page.name,
    status: issues.length ? 'issue' : 'ok'
  };
}

function processAWSStatus({current}) {
  return {
    name: 'Amazon Web Services',
    status: current.length ? 'issue' : 'ok'
  }
}

function services() {
  return servicesList.map( service => service);
}

export { services, getPlivoStatus, getTokBoxStatus, getFilepickerStatus, getAWSStatus };