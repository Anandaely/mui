/**
 * MUI React tabs module
 * @module react/tabs
 */
/* jshint quotmark:false */
// jscs:disable validateQuoteMarks

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.Tab = undefined;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _util = require('../js/lib/util');

var util = babelHelpers.interopRequireWildcard(_util);

var PropTypes = _react2.default.PropTypes,
    tabsBarClass = 'mui-tabs__bar',
    tabsBarJustifiedClass = 'mui-tabs__bar--justified',
    tabsPaneClass = 'mui-tabs__pane',
    isActiveClass = 'mui--is-active';

/**
 * Tabs constructor
 * @class
 */

var Tabs = (function (_React$Component) {
  babelHelpers.inherits(Tabs, _React$Component);

  function Tabs(props) {
    babelHelpers.classCallCheck(this, Tabs);

    var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this, props));

    _this.state = { currentSelectedIndex: props.initialSelectedIndex };
    return _this;
  }

  babelHelpers.createClass(Tabs, [{
    key: 'onClick',
    value: function onClick(i, tab, ev) {
      if (i !== this.state.currentSelectedIndex) {
        this.setState({ currentSelectedIndex: i });

        // onActive callback
        if (tab.props.onActive) tab.props.onActive(tab);

        // onChange callback
        if (this.props.onChange) {
          this.props.onChange(i, tab.props.value, tab, ev);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var tabEls = [],
          paneEls = [],
          children = this.props.children,
          m = children.length,
          selectedIndex = this.state.currentSelectedIndex % m,
          isActive = undefined,
          item = undefined,
          cls = undefined,
          i = undefined;

      for (i = 0; i < m; i++) {
        item = children[i];

        // only accept MUITab elements
        if (item.type !== Tab) util.raiseError('Expecting MUITab React Element');

        isActive = i === selectedIndex ? true : false;

        // tab element
        tabEls.push(_react2.default.createElement(
          'li',
          { key: i, className: isActive ? isActiveClass : '' },
          _react2.default.createElement(
            'a',
            { onClick: this.onClick.bind(this, i, item) },
            item.props.label
          )
        ));

        // pane element
        cls = tabsPaneClass + ' ';
        if (isActive) cls += isActiveClass;

        paneEls.push(_react2.default.createElement(
          'div',
          { key: i, className: cls },
          item.props.children
        ));
      }

      cls = tabsBarClass;
      if (this.props.isJustified) cls += ' ' + tabsBarJustifiedClass;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          { className: cls },
          tabEls
        ),
        paneEls
      );
    }
  }]);
  return Tabs;
})(_react2.default.Component);

/**
 * Tab constructor
 * @class
 */

Tabs.propTypes = {
  initialSelectedIndex: PropTypes.number,
  isJustified: PropTypes.bool,
  onChange: PropTypes.func
};
Tabs.defaultProps = {
  initialSelectedIndex: 0,
  isJustified: false,
  onChange: null
};

var Tab = (function (_React$Component2) {
  babelHelpers.inherits(Tab, _React$Component2);

  function Tab() {
    babelHelpers.classCallCheck(this, Tab);
    return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Tab).apply(this, arguments));
  }

  babelHelpers.createClass(Tab, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return Tab;
})(_react2.default.Component);

/** Define module API */

Tab.propTypes = {
  value: PropTypes.any,
  label: PropTypes.string,
  onActive: PropTypes.func
};
Tab.defaultProps = {
  value: null,
  label: '',
  onActive: null
};
exports.Tab = Tab;
exports.Tabs = Tabs;