'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/desciple/HelpEth/pages/campaigns/requests/index.js?entry';


var RequestIndex = function (_Component) {
	(0, _inherits3.default)(RequestIndex, _Component);

	function RequestIndex() {
		(0, _classCallCheck3.default)(this, RequestIndex);

		return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(RequestIndex, [{
		key: 'renderRow',
		value: function renderRow() {
			var _this2 = this;

			return this.props.requests.map(function (request, index) {
				return _react2.default.createElement(_RequestRow2.default, {
					key: index,
					id: index,
					request: request,
					address: _this2.props.address,
					approversCount: _this2.props.approversCount,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 29
					}
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var Header = _semanticUiReact.Table.Header,
			    Row = _semanticUiReact.Table.Row,
			    HeaderCell = _semanticUiReact.Table.HeaderCell,
			    Body = _semanticUiReact.Table.Body;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, _react2.default.createElement('div', { style: { marginTop: 50, textAlign: 'center', color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, _react2.default.createElement(Header, { as: 'h1', icon: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, 'Requests')), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { animated: true, floated: 'right', color: 'teal', style: { marginBottom: 10 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, 'Add Request'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, _react2.default.createElement(_semanticUiReact.Icon, { name: 'add circle', __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}))))), _react2.default.createElement(_semanticUiReact.Table, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, _react2.default.createElement(Header, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, _react2.default.createElement(Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, _react2.default.createElement(HeaderCell, { style: { color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, 'ID'), _react2.default.createElement(HeaderCell, { style: { color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}, 'Description'), _react2.default.createElement(HeaderCell, { style: { color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			}, 'Amount'), _react2.default.createElement(HeaderCell, { style: { color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			}, 'Recipient'), _react2.default.createElement(HeaderCell, { style: { color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, 'Approval Count'), _react2.default.createElement(HeaderCell, { style: { color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			}, 'Approve'), _react2.default.createElement(HeaderCell, { style: { color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, 'Finalize'))), _react2.default.createElement(Body, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}, this.renderRow())), _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}, _react2.default.createElement('p', { style: { color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}, 'Found ', this.props.requestCount, ' requests.')), _react2.default.createElement(_semanticUiReact.Message, { warning: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			}, _react2.default.createElement('ul', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 81
				}
			}, _react2.default.createElement('li', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 82
				}
			}, 'This is the table of requests for a given sponsorship/donation.'), _react2.default.createElement('li', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 83
				}
			}, 'If you are a sponsor/donor, \'Approve\' a request if you feel it is worth it.'), _react2.default.createElement('li', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			}, 'If you are a Need Initiator here, you can \'Finalize\' a request, once it reaches a majority of approvals.'))));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var address, campaign, requestCount, approversCount, requests;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								address = props.query.address;
								campaign = (0, _campaign2.default)(address);
								_context.next = 4;
								return campaign.methods.getRequestsCount().call();

							case 4:
								requestCount = _context.sent;
								_context.next = 7;
								return campaign.methods.approversCount().call();

							case 7:
								approversCount = _context.sent;
								_context.next = 10;
								return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
									return campaign.methods.requests(index).call();
								}));

							case 10:
								requests = _context.sent;
								return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

							case 12:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIlRhYmxlIiwiSWNvbiIsIk1lc3NhZ2UiLCJMaW5rIiwiQ2FtcGFpZ24iLCJSZXF1ZXN0Um93IiwiUmVxdWVzdEluZGV4IiwicHJvcHMiLCJyZXF1ZXN0cyIsIm1hcCIsInJlcXVlc3QiLCJpbmRleCIsImFkZHJlc3MiLCJhcHByb3ZlcnNDb3VudCIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwibWFyZ2luVG9wIiwidGV4dEFsaWduIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJyZW5kZXJSb3ciLCJyZXF1ZXN0Q291bnQiLCJxdWVyeSIsImNhbXBhaWduIiwibWV0aG9kcyIsImdldFJlcXVlc3RzQ291bnQiLCJjYWxsIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQU8sQUFBTSxBQUFLOztBQUMxQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWdCOzs7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7OEJBa0JNO2dCQUNWOztlQUFPLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDbEQ7MkJBQ0MsQUFBQztVQUFELEFBQ00sQUFDTDtTQUZELEFBRUssQUFDSjtjQUhELEFBR1ksQUFDWDtjQUFTLE9BQUEsQUFBSyxNQUpmLEFBSXFCLEFBQ3BCO3FCQUFnQixPQUFBLEFBQUssTUFMdEIsQUFLNEI7O2dCQUw1QjtrQkFERCxBQUNDLEFBUUQ7QUFSQztBQUNDLEtBREQ7QUFGRixBQUFPLEFBV1As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QUE7QUFBQTtBQUFBLE1BRkQsQUFFQyxBQUNBLGtHQUFBLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BdkNKLEFBQ0MsQUFrQ0MsQUFDQyxBQUdDLEFBS0o7Ozs7O3dHLEFBaEY0Qjs7Ozs7WUFDckI7QSxrQkFBVSxNLEFBQU0sTSxBQUFoQixBQUNEO0EsbUJBQVcsd0IsQUFBQSxBQUFTOztlQUNDLFNBQUEsQUFBUyxRQUFULEFBQWlCLG1CQUFqQixBQUFvQyxBOztZQUF6RDtBOztlQUN1QixTQUFBLEFBQVMsUUFBVCxBQUFpQixpQixBQUFqQixBQUFrQzs7WUFBekQ7QTs7aUNBRWlCLEFBQVEsVUFDeEIsU0FBTixBQUFNLEFBQVMsZUFBZixBQUNFLE9BREYsQUFFRSxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUN6QjtnQkFBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixTQUFqQixBQUEwQixPQUFqQyxBQUFPLEFBQWlDLEFBQ3hDO0EsQUFMcUIsQUFDdEIsU0FBQSxDQURzQjs7WUFBakI7QTt5Q0FRQyxFQUFDLFNBQUQsU0FBUyxVQUFULFVBQWtCLGNBQWxCLGNBQStCLGdCQUEvQixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZmtCLEEsQUFvRjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2Rlc2NpcGxlL0hlbHBFdGgifQ==