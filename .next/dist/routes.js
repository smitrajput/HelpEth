'use strict';

var routes = require('next-routes')();

//routing rule i.e.for this url, go to this page
routes.add('/campaigns/new', '/campaigns/new') // '/new' must be above 'show'
.add('/campaigns/:address', '/campaigns/show') //":address" means a variable address
.add('/campaigns/:address/requests', '/campaigns/requests/index') //'/index' may or may not be above 'new'
.add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQTtBQUNBLE9BQ0csQUFESCxJQUNPLEFBRFAsa0JBQ3lCLEFBRHpCLGtCQUNrRCxBQURsRDtDQUVHLEFBRkgsSUFFTyxBQUZQLHVCQUU4QixBQUY5QixtQkFFd0QsQUFGeEQ7Q0FHRyxBQUhILElBR08sQUFIUCxnQ0FHdUMsQUFIdkMsNkJBR21FLEFBSG5FO0NBSUcsQUFKSCxJQUlPLEFBSlAsb0NBSTJDLEFBSjNDOztBQU1BLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZGVzY2lwbGUvSGVscEV0aCJ9