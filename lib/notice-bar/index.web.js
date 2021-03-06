'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _Marquee = require('./Marquee');

var _Marquee2 = _interopRequireDefault(_Marquee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var NoticeBar = function (_React$Component) {
    (0, _inherits3['default'])(NoticeBar, _React$Component);

    function NoticeBar(props) {
        (0, _classCallCheck3['default'])(this, NoticeBar);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (NoticeBar.__proto__ || Object.getPrototypeOf(NoticeBar)).call(this, props));

        _this.onClick = function () {
            var _this$props = _this.props,
                mode = _this$props.mode,
                onClick = _this$props.onClick;

            if (onClick) {
                onClick();
            }
            if (mode === 'closable') {
                _this.setState({
                    show: false
                });
            }
        };
        _this.state = {
            show: true
        };
        return _this;
    }

    (0, _createClass3['default'])(NoticeBar, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                mode = _a.mode,
                icon = _a.icon,
                onClick = _a.onClick,
                children = _a.children,
                className = _a.className,
                prefixCls = _a.prefixCls,
                marqueeProps = _a.marqueeProps,
                restProps = __rest(_a, ["mode", "icon", "onClick", "children", "className", "prefixCls", "marqueeProps"]);
            var extraProps = {};
            var operationDom = null;
            if (mode === 'closable') {
                operationDom = _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-operation', onClick: this.onClick, role: 'button', 'aria-label': 'close' },
                    _react2['default'].createElement(_icon2['default'], { type: 'cross', size: 'md' })
                );
            } else {
                if (mode === 'link') {
                    operationDom = _react2['default'].createElement(
                        'div',
                        { className: prefixCls + '-operation', role: 'button', 'aria-label': 'go to detail' },
                        _react2['default'].createElement(_icon2['default'], { type: 'right', size: 'md' })
                    );
                }
                extraProps.onClick = onClick;
            }
            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls, true), (0, _defineProperty3['default'])(_classNames, className, !!className), _classNames));
            var marquee = (0, _extends3['default'])({ loop: false, leading: 500, trailing: 800, fps: 40, style: {} }, marqueeProps);
            return this.state.show ? _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({ className: wrapCls }, restProps, extraProps, { role: 'alert' }),
                icon ? _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-icon', 'aria-hidden': 'true' },
                    ' ',
                    icon,
                    ' '
                ) : null,
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-content' },
                    _react2['default'].createElement(_Marquee2['default'], (0, _extends3['default'])({ prefixCls: prefixCls, text: children }, marquee))
                ),
                operationDom
            ) : null;
        }
    }]);
    return NoticeBar;
}(_react2['default'].Component);

exports['default'] = NoticeBar;

NoticeBar.defaultProps = {
    prefixCls: 'am-notice-bar',
    mode: '',
    icon: _react2['default'].createElement(_icon2['default'], { type: require('./style/assets/trips.svg'), size: 'xxs' }),
    onClick: function onClick() {}
};
module.exports = exports['default'];