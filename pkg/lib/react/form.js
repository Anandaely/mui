/**
 * MUI React form module
 * @module react/form
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = undefined;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

/**
 * Form constructor
 * @class
 */

var Form = (function (_React$Component) {
  babelHelpers.inherits(Form, _React$Component);

  function Form() {
    babelHelpers.classCallCheck(this, Form);
    return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Form).apply(this, arguments));
  }

  babelHelpers.createClass(Form, [{
    key: 'render',
    value: function render() {
      var cls = undefined;

      // inline form
      if (this.props.isInline) cls = 'mui-form--inline';

      return _react2.default.createElement(
        'form',
        { className: cls },
        this.props.children
      );
    }
  }]);
  return Form;
})(_react2.default.Component);

/** Define module API */

Form.propTypes = {
  isInline: _react2.default.PropTypes.bool
};
Form.defaultProps = {
  isInline: false
};
exports.Form = Form;