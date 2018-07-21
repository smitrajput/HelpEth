'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Step 1 of To-do's for the Campaign List Page
//This file is executed twice 1. Next.js server 2. Browser

/*const web3 = new Web3(window.web3.currentProvider);    //window is defined in the browser and not on the
                                                       //node.js(next.js) server where next.js is running
*/

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //typeof window returns type of 'window' i.e object and
  //We are in the browser and metamask is running.                            //typeof window.web3 checks if web3 has been injected by metamask
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  //We are on the server *OR* the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider( //creating our own provider using infura
  'https://rinkeby.infura.io/0wKA21HKGFAbkwrcXEg0');
  web3 = new _web2.default(provider);
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEE7Ozs7OztBQUFrQztBQUNBOztBQUVsQzs7OztBQUlBLElBQUksWUFBSjs7QUFFQSxJQUFHLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLE9BQU8sQUFBZCxTQUF1QixBQUEzRCxhQUF3RSxBQUFNO0FBQzVFO0FBQ0E7U0FBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNEO0FBSEQsT0FHTyxBQUNMO0FBQ0E7TUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsY0FBeUMsQUFDeEQ7QUFEZSxBQUFqQixBQUdBO1NBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNEO0FBQ0Q7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2Rlc2NpcGxlL0hlbHBFdGgifQ==