const routes = require('next-routes')();

//routing rule i.e.for this url, go to this page
routes
  .add('/campaigns/new', '/campaigns/new')        // '/new' must be above 'show'
  .add('/campaigns/:address', '/campaigns/show')        //":address" means a variable address
  .add('/campaigns/:address/requests', '/campaigns/requests/index')//'/index' may or may not be above 'new'
  .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
