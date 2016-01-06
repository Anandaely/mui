var babelHelpers = require('./babel-helpers.js');
/**
 * MUI React Appbar Module
 * @module react/appbar
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Appbar = undefined;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

/**
 * Appbar constructor
 * @class
 */

var Appbar = (function (_React$Component) {
  babelHelpers.inherits(Appbar, _React$Component);

  function Appbar() {
    babelHelpers.classCallCheck(this, Appbar);
    return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Appbar).apply(this, arguments));
  }

  babelHelpers.createClass(Appbar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'mui-appbar' },
        this.props.children
      );
    }
  }]);
  return Appbar;
})(_react2.default.Component);

/** Define module API */

exports.Appbar = Appbar;