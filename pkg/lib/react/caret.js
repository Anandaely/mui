var babelHelpers = require('./babel-helpers.js');
/**
 * MUI React Caret Module
 * @module react/caret
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Caret = undefined;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

/**
 * Caret constructor
 * @class
 */

var Caret = (function (_React$Component) {
  babelHelpers.inherits(Caret, _React$Component);

  function Caret() {
    babelHelpers.classCallCheck(this, Caret);
    return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Caret).apply(this, arguments));
  }

  babelHelpers.createClass(Caret, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('span', { className: 'mui-caret' });
    }
  }]);
  return Caret;
})(_react2.default.Component);

/** Define module API */

exports.Caret = Caret;