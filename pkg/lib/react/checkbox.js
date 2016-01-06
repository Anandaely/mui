/**
 * MUI React checkbox module
 * @module react/checkbox
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = undefined;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var PropTypes = _react2.default.PropTypes;

/**
 * Checkbox constructor
 * @class
 */

var Checkbox = (function (_React$Component) {
  babelHelpers.inherits(Checkbox, _React$Component);

  function Checkbox() {
    babelHelpers.classCallCheck(this, Checkbox);
    return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).apply(this, arguments));
  }

  babelHelpers.createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'mui-checkbox' },
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement('input', {
            type: 'checkbox',
            value: this.props.value,
            disabled: this.props.isDisabled
          }),
          this.props.label
        )
      );
    }
  }]);
  return Checkbox;
})(_react2.default.Component);

/** Define module API */

Checkbox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  isDisabled: PropTypes.bool
};
Checkbox.defaultProps = {
  label: null,
  value: null,
  isDisabled: false
};
exports.Checkbox = Checkbox;