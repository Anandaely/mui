/**
 * MUI React grid module
 * @module react/grid
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = undefined;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _util = require('../js/lib/util');

var util = babelHelpers.interopRequireWildcard(_util);

var breakpoints = ['xs', 'sm', 'md', 'lg'];

/**
 * Row constructor
 * @class
 */

var Row = (function (_React$Component) {
  babelHelpers.inherits(Row, _React$Component);

  function Row() {
    babelHelpers.classCallCheck(this, Row);
    return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Row).apply(this, arguments));
  }

  babelHelpers.createClass(Row, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'mui-row' },
        this.props.children
      );
    }
  }]);
  return Row;
})(_react2.default.Component);

/**
 * Col constructor
 * @class
 */

var Col = (function (_React$Component2) {
  babelHelpers.inherits(Col, _React$Component2);

  function Col() {
    babelHelpers.classCallCheck(this, Col);
    return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Col).apply(this, arguments));
  }

  babelHelpers.createClass(Col, [{
    key: 'defaultProps',
    value: function defaultProps() {
      var props = {},
          i = undefined,
          v = undefined;

      // add {breakpoint}, {breakpoint}-offset to props
      for (i = breakpoints.length - 1; i > -1; i--) {
        v = breakpoints[i];
        props[v] = null;
        props[v + '-offset'] = null;
      }

      return props;
    }
  }, {
    key: 'render',
    value: function render() {
      var cls = {},
          i = undefined,
          bk = undefined,
          val = undefined,
          baseCls = undefined;

      // add mui-col classes
      for (i = breakpoints.length - 1; i > -1; i--) {
        bk = breakpoints[i];
        baseCls = 'mui-col-' + bk;

        // add mui-col-{bk}-{val}
        val = this.props[bk];
        if (val) cls[baseCls + '-' + val] = true;

        // add mui-col-{bk}-offset-{val}
        val = this.props[bk + '-offset'];
        if (val) cls[baseCls + '-offset-' + val] = true;
      }

      cls = util.classNames(cls);

      return _react2.default.createElement(
        'div',
        { className: cls },
        this.props.children
      );
    }
  }]);
  return Col;
})(_react2.default.Component);

/** Define module API */

exports.Row = Row;
exports.Col = Col;