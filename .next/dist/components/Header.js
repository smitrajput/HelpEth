'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/desciple/HelpEth/components/Header.js';

exports.default = function () {
  //<Menu.Item>CrowdCoin</Menu.Item>     since styling of Link and Menu.Item conflict
  // className="item" gives the 'hover' effect and 'right-click' functionality to the link
  return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '10px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'Home')), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'Create Need'))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIkxpbmsiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVMsQUFBWSxBQUVyQjs7Ozs7O2tCQUFlLFlBQU0sQUFDbkI7QUFDQTtBQUNBO3lCQUNFLEFBQUMsdUNBQUssT0FBTyxFQUFFLFdBQWYsQUFBYSxBQUFhO2dCQUExQjtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtnQkFBYjtrQkFBQTtBQUFBO0tBRkosQUFDRSxBQUNFLEFBR0YsMEJBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssVUFBWCxBQUFvQjtnQkFBcEI7a0JBQUEsQUFFRTtBQUZGO3FCQUVFLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO2dCQUFiO2tCQUFBO0FBQUE7S0FUUixBQUNFLEFBS0UsQUFFRSxBQUNFLEFBS1Q7QUFqQkQiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2Rlc2NpcGxlL0hlbHBFdGgifQ==