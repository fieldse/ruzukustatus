import moment from 'moment';

function processDates(updateList = []) {
  return updateList.map(convertUpdate)
    .sort(dateMostRecent)
    .map(parseUpdate);
}

function recentUpdate(update = {date: ''}) {
  const emptyUpdate = {
    title: 'Ruzuku is operating normally',
    date: new Date(),
    status: 'nominal'
  }
  const recent = moment().subtract(1, 'days');
  const show = recent.isBefore(moment(update.date));
  return show ? update : emptyUpdate;
}

function dateMostRecent(prev,curr) {
  return (prev,curr) => prev.date <= curr.date;
}

function parseUpdate(update) {
  const parsed = moment(update.date).format('ll'); 
  update.date = parsed;
  return update;
}

function convertUpdate(update, i) {
  update.date = new Date(update.date)
  return update;
}

export { processDates, recentUpdate };