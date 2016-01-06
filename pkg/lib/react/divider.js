var babelHelpers = require('./babel-helpers.js');
/**
 * MUI React divider module
 * @module react/divider
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = undefined;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

/**
 * Divider constructor
 * @class
 */

var Divider = (function (_React$Component) {
  babelHelpers.inherits(Divider, _React$Component);

  function Divider() {
    babelHelpers.classCallCheck(this, Divider);
    return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Divider).apply(this, arguments));
  }

  babelHelpers.createClass(Divider, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'mui-divider' });
    }
  }]);
  return Divider;
})(_react2.default.Component);

/** Define module API */

exports.Divider = Divider;