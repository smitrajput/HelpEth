'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/desciple/HelpEth/components/Layout.js'; //anything contained in it, will be placed in the <head> tag of all the pages

exports.default = function (props) {
  //functional components get called using props
  return _react2.default.createElement(_semanticUiReact.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), props.children);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZGVyIiwiSGVhZCIsIkNvbnRhaW5lciIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBLEFBQVA7Ozs7QUFDQSxBQUFTLEFBRVQ7Ozs7a0VBSG9DOztrQkFHckIsVUFBQSxBQUFDLE9BQVUsQUFBWTtBQUNwQzt5QkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLDZDQUNRLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO2dCQUE1QjtrQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFO3VCQUVGLEFBQUM7O2dCQUFEO2tCQUpGLEFBSUUsQUFDQztBQUREO0FBQUEsWUFMSixBQUNFLEFBS1MsQUFHWjtBQVZEIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9kZXNjaXBsZS9IZWxwRXRoIn0=