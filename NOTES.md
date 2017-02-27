* TODO:
  * Only able to like others' tweets (DONE)
  * fix server crash when login does not match (fix throw err)
  * registration validations needed (cannot have existing HANDLE only)
  * password confirmation on registration form
  * fix cookies issue in user route (sending both JSON and cookie but only need one)
  * fix error handling (user does not exist, password incorrect)
  * fix finding user upon login (search uses findOne but may return first result that is still not an identical match)
  * implement SASS (CSS is not DRY at all right now)
  * POSITIONING IS NOT OKAY
  * implement responsive design
  * REFACTOR code

* Important Considerations:
  * Callbacks in each route to verify user
  * Callbacks to handle errors
  * Make code DRY using functions in backend
  * Make code DRY using functions for ajax requests

* Key Concepts in this Project:
  * Ajax
  * jQuery
  * Express
  * MongoDB
  * JSON
  * SASS and CSS
  * Responsive design
  * Modularity
  * Callbacks

* Troubles During Project:
  * Adding elements to DOM
  * Server and client interactions
  * Understanding how DB works asynchronously (routes that use DB must be inside SCOPE of db connection)
  * Callbacks
  * Manipulating data from DB (insert, find, update)
  * Context during DOM manipulation
  * Different Ajax methods and usage of promises
  * Error handling (unresolved)
