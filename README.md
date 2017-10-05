# Ruzuku Status Page (status.ruzuku.com)
Public facing page to display Ruzuku's system stability

This utilizes gh-pages along with create-react-app and publishes to a separate public repository (morebetterlabs.github.io).

View this at http://status.ruzuku.com

## HOW TO USE:
clone repo and then yarn install

To put up new status.
  1. `yarn start`
  2. Update `src/status-upates.js`
  3. `yarn deploy`

*Note: Create React App Uses a service worker so if it didn't update after deploy, it's probably your cache*

## URL
We were not able get https running but if that becomes necessary https://morebetterlabs.github.io will suffice. To enact this change
- Remove CNAME record for status.ruzuku.com from Rackspace
- Go into settings for this repo and remove custom url