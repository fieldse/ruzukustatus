/* Reducers */ 
/* Redux felt like overkill but some amount of state process needs */
/* doing after api calls. */

function updatedServiceState(state, {name, status}) {
  let updatedState = state.map( service => {
    service.status = service.name === name ? 
        status :
        service.status;
    return service;
  })
  return updatedState;
}

export { updatedServiceState };