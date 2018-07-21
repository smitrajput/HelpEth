'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/desciple/HelpEth/pages/campaigns/requests/new.js?entry';


var RequestNew = function (_Component) {
	(0, _inherits3.default)(RequestNew, _Component);

	function RequestNew() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, RequestNew);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: '',
			description: '',
			recipient: '',
			loading: false,
			errorMessage: ''
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var campaign, _this$state, description, value, recipient, accounts;

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();

								campaign = (0, _campaign2.default)(_this.props.address);
								_this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

								_this.setState({ loading: true, errprMessage: '' });

								_context.prev = 4;
								_context.next = 7;
								return _web2.default.eth.getAccounts();

							case 7:
								accounts = _context.sent;
								_context.next = 10;
								return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });

							case 10:

								_routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
								_context.next = 16;
								break;

							case 13:
								_context.prev = 13;
								_context.t0 = _context['catch'](4);

								_this.setState({ errorMessage: _context.t0.message });

							case 16:

								_this.setState({ loading: false });

							case 17:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[4, 13]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(RequestNew, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, _react2.default.createElement('p', { style: { color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, 'Back'))), _react2.default.createElement('div', { style: { marginTop: 30, textAlign: 'center', color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, _react2.default.createElement(_semanticUiReact.Icon, { name: 'users', circular: true, color: 'teal', __source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}), 'Add Requests')), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, _react2.default.createElement('label', { style: { color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.description,
				onChange: function onChange(event) {
					return _this3.setState({ description: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, _react2.default.createElement('label', { style: { color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.value,
				onChange: function onChange(event) {
					return _this3.setState({ value: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 81
				}
			}, _react2.default.createElement('label', { style: { color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 82
				}
			}, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.recipient,
				onChange: function onChange(event) {
					return _this3.setState({ recipient: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 83
				}
			})), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 88
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', loading: this.state.loading, __source: {
					fileName: _jsxFileName,
					lineNumber: 89
				}
			}, 'Create!')), _react2.default.createElement(_semanticUiReact.Message, { info: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 92
				}
			}, _react2.default.createElement(_semanticUiReact.Message.Header, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 93
				}
			}, 'Notes before these filling Form...'), _react2.default.createElement('ul', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 94
				}
			}, _react2.default.createElement('li', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 95
				}
			}, 'This form will add your requests in the table of requirements.'), _react2.default.createElement('li', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 96
				}
			}, 'Please provide a proper Description which help your friends to provide fund for the purpose.'), _react2.default.createElement('li', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 97
				}
			}, 'Enter the value in Ether'), _react2.default.createElement('li', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 98
				}
			}, '*Recipient will be the address of the seller from which you need stuff.'), _react2.default.createElement('li', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 99
				}
			}, 'Receipent will provide you the stuff for your project.'))));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
				var address;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								address = props.query.address;
								return _context2.abrupt('return', { address: address });

							case 2:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getInitialProps(_x2) {
				return _ref3.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiSGVhZGVyIiwiSWNvbiIsIkNhbXBhaWduIiwid2ViMyIsIkxpbmsiLCJSb3V0ZXIiLCJMYXlvdXQiLCJSZXF1ZXN0TmV3Iiwic3RhdGUiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwicmVjaXBpZW50IiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJlcnJwck1lc3NhZ2UiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJ0YXJnZXQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBSyxBQUFPLEFBQVEsQUFBTSxBQUFPOztBQUN6QyxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBSyxBQUFhOztBQUMxQixBQUFPLEFBQVk7Ozs7Ozs7OztJQUViLEE7Ozs7Ozs7Ozs7Ozs7OztrTixBQUNMO1VBQVEsQUFDQSxBQUNQO2dCQUZPLEFBRUssQUFDWjtjQUhPLEFBR0csQUFDVjtZQUpPLEFBSUUsQUFDVDtpQkFMTyxBQUtNLEE7QUFMTixBQUNQLFcsQUFhQTt3RkFBVyxpQkFBQSxBQUFNLE9BQU47OERBQUE7O2tFQUFBO2VBQUE7dUNBQUE7WUFDVjtjQUFBLEFBQU0sQUFFQTs7QUFISSxtQkFHTyx3QkFBUyxN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