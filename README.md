# ruzukustatus
Public facing page to display Ruzuku's system stability

This utilizes gh-pages along with create-react-app in github and publishes to a separate public repository (morebetterlabs.github.io).

#HOW TO USE:
clone repo and then yarn install

- To put up new status.
  1. yarn start
  2. Update src/status-upates.js
  3. yarn deploy

*Note: Create React App Uses a service worker so if it didn't update after deploy, it's probably your cache*