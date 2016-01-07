var babelHelpers = require('./babel-helpers.js');
/**
 * MUI React dropdowns module
 * @module react/dropdowns
 */
/* jshint quotmark:false */
// jscs:disable validateQuoteMarks

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownItem = exports.Dropdown = undefined;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _button = require('./button.jsx');

var _caret = require('./caret.jsx');

var _jqLite = require('../js/lib/jqLite');

var jqLite = babelHelpers.interopRequireWildcard(_jqLite);

var _util = require('../js/lib/util');

var util = babelHelpers.interopRequireWildcard(_util);

var PropTypes = _react2.default.PropTypes,
    dropdownClass = 'mui-dropdown',
    menuClass = 'mui-dropdown__menu',
    openClass = 'mui--is-open',
    rightClass = 'mui-dropdown__menu--right';

/**
 * Dropdown constructor
 * @class
 */

var Dropdown = (function (_React$Component) {
  babelHelpers.inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    babelHelpers.classCallCheck(this, Dropdown);

    var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, props));

    _this.state = {
      opened: false,
      menuTop: 0
    };

    var cb = util.callback;
    _this.onClickCB = cb(_this, 'onClick');
    _this.onOutsideClickCB = cb(_this, 'onOutsideClick');
    return _this;
  }

  babelHelpers.createClass(Dropdown, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('click', this.onOutsideClickCB);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.onOutsideClickCB);
    }
  }, {
    key: 'onClick',
    value: function onClick(ev) {
      // only left clicks
      if (ev.button !== 0) return;

      // exit if toggle button is disabled
      if (this.props.isDisabled) return;

      if (!ev.defaultPrevented) this.toggle();
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      // exit if no menu element
      if (!this.props.children) {
        return util.raiseError('Dropdown menu element not found');
      }

      if (this.state.opened) this.close();else this.open();
    }
  }, {
    key: 'open',
    value: function open() {
      // position menu element below toggle button
      var wrapperRect = this.refs.wrapperEl.getBoundingClientRect(),
          toggleRect = undefined;

      toggleRect = this.refs.button.refs.buttonEl.getBoundingClientRect();

      this.setState({
        opened: true,
        menuTop: toggleRect.top - wrapperRect.top + toggleRect.height
      });
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({ opened: false });
    }
  }, {
    key: 'select',
    value: function select() {
      if (this.props.onClick) this.props.onClick(this, ev);
    }
  }, {
    key: 'onOutsideClick',
    value: function onOutsideClick(ev) {
      var isClickInside = this.refs.wrapperEl.contains(ev.target);
      if (!isClickInside) this.close();
    }
  }, {
    key: 'render',
    value: function render() {
      var buttonEl = undefined,
          menuEl = undefined;

      buttonEl = _react2.default.createElement(
        _button.Button,
        {
          ref: 'button',
          onClick: this.onClickCB,
          color: this.props.color,
          variant: this.props.variant,
          size: this.props.size,
          isDisabled: this.props.isDisabled
        },
        this.props.label,
        _react2.default.createElement(_caret.Caret, null)
      );

      if (this.state.opened) {
        var cs = {};

        cs[menuClass] = true;
        cs[openClass] = this.state.opened;
        cs[rightClass] = this.props.alignMenu === 'right';
        cs = util.classNames(cs);

        menuEl = _react2.default.createElement(
          'ul',
          {
            ref: 'menuEl',
            className: cs,
            style: { top: this.state.menuTop },
            onClick: this.selectCB
          },
          this.props.children
        );
      }

      return _react2.default.createElement(
        'div',
        { ref: 'wrapperEl', className: dropdownClass },
        buttonEl,
        menuEl
      );
    }
  }]);
  return Dropdown;
})(_react2.default.Component);

/**
 * DropdownItem constructor
 * @class
 */

Dropdown.propTypes = {
  color: PropTypes.oneOf(['default', 'primary', 'danger', 'dark', 'accent']),
  variant: PropTypes.oneOf(['default', 'flat', 'raised', 'fab']),
  size: PropTypes.oneOf(['default', 'small', 'large']),
  label: PropTypes.string,
  alignMenu: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool
};
Dropdown.defaultProps = {
  color: 'default',
  variant: 'default',
  size: 'default',
  label: '',
  alignMenu: 'left',
  onClick: null,
  isDisabled: false
};

var DropdownItem = (function (_React$Component2) {
  babelHelpers.inherits(DropdownItem, _React$Component2);

  function DropdownItem(props) {
    babelHelpers.classCallCheck(this, DropdownItem);

    var _this2 = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(DropdownItem).call(this, props));

    _this2.onClickCB = util.callback(_this2, 'onClick');
    return _this2;
  }

  babelHelpers.createClass(DropdownItem, [{
    key: 'onClick',
    value: function onClick(ev) {
      if (this.props.onClick) this.props.onClick(this, ev);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: this.props.link, onClick: this.onClickCB },
          this.props.children
        )
      );
    }
  }]);
  return DropdownItem;
})(_react2.default.Component);

/** Define module API */

DropdownItem.propTypes = {
  link: PropTypes.string,
  onClick: PropTypes.func
};
DropdownItem.defaultProps = {
  link: null,
  onClick: null
};
exports.Dropdown = Dropdown;
exports.DropdownItem = DropdownItem;