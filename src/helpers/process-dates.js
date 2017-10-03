import moment from 'moment';

function processDates(updateList) {
  return parseUpdates(sortUpdates(convertUpdates(updateList)))
}

function sortUpdates(updates) {
  return updates.sort((prev,curr) => prev.date <= curr.date);
}

function parseUpdates(updates) {
  return updates.map(update => {
    const parsed = moment(update.date).format('ll'); 
    update.date = parsed;
    return update;
  })
}

function convertUpdates(updates) {
  return updates.map(update => {
    update.date = new Date(update.date)
    return update;
  })
}

export { processDates };