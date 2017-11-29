import { getJson } from './helpers';
const services = [
  // {
  //   name: 'Amazon Web Services',
  //   statusUrl: 'https://status.aws.amazon.com/data.json',
  //   status: 'loading'
  // },
  // {
  //   title: 'TokBox (webinars)',
  //   name: 'TokBox',
  //   statusUrl: 'https://status.tokbox.com/opentok.json',
  //   status: 'loading'
  // },
  {
    title: 'Box (document viewer)',
    name: 'Box',
    statusUrl: 'https://status.box.com/history.json',
    status: 'loading'
  },
  {
    title: 'Plivo (teleconference)',
    name: 'Plivo',
    statusUrl: 'https://status.plivo.com/history.json',
    status: 'loading'
  },
  {
    name: 'Filestack',
    title: 'Filestack (file uploads)',
    statusUrl: 'https://status.filestack.com/history.json',
    status: 'loading'
  }
]

async function updateService({name, statusUrl}) {
  console.log(name, statusUrl)
  return await getJson(statusUrl)
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

export { services, processStatusPage, updateService, getTokBoxStatus, getAWSStatus };