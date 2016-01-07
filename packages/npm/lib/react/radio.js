var babelHelpers = require('./babel-helpers.js');
/**
 * MUI React radio module
 * @module react/radio
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = undefined;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var PropTypes = _react2.default.PropTypes;

/**
 * Radio constructor
 * @class
 */

var Radio = (function (_React$Component) {
  babelHelpers.inherits(Radio, _React$Component);

  function Radio() {
    babelHelpers.classCallCheck(this, Radio);
    return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Radio).apply(this, arguments));
  }

  babelHelpers.createClass(Radio, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'mui-radio' },
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement('input', {
            type: 'radio',
            name: this.props.name,
            value: this.props.value,
            defaultChecked: this.props.isChecked,
            disabled: this.props.isDisabled
          }),
          this.props.label
        )
      );
    }
  }]);
  return Radio;
})(_react2.default.Component);

/** Define module API */

Radio.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool
};
Radio.defaultProps = {
  name: null,
  label: null,
  value: null,
  isChecked: false,
  isDisabled: false
};
exports.Radio = Radio;