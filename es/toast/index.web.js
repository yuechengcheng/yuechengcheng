import _defineProperty from 'babel-runtime/helpers/defineProperty';
import React from 'react';
import Notification from 'rc-notification';
import Icon from '../icon';
import classnames from 'classnames';
var messageInstance = void 0;
var prefixCls = 'am-toast';
function getMessageInstance(mask) {
    var _classnames;

    if (messageInstance) {
        messageInstance.destroy();
        messageInstance = null;
    }
    messageInstance = Notification.newInstance({
        prefixCls: prefixCls,
        style: {},
        transitionName: 'am-fade',
        className: classnames((_classnames = {}, _defineProperty(_classnames, prefixCls + '-mask', mask), _defineProperty(_classnames, prefixCls + '-nomask', !mask), _classnames))
    });
    return messageInstance;
}
function notice(content, type) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    var _onClose = arguments[3];
    var mask = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

    var iconType = {
        info: '',
        success: require('./style/assets/success.svg'),
        fail: require('./style/assets/fail.svg'),
        offline: require('./style/assets/dislike.svg'),
        loading: 'loading'
    }[type];
    var instance = getMessageInstance(mask);
    instance.notice({
        duration: duration,
        style: {},
        content: !!iconType ? React.createElement(
            'div',
            { className: prefixCls + '-text ' + prefixCls + '-text-icon', role: 'alert', 'aria-live': 'assertive' },
            React.createElement(Icon, { type: iconType, size: 'lg' }),
            React.createElement(
                'div',
                { className: prefixCls + '-text-info' },
                content
            )
        ) : React.createElement(
            'div',
            { className: prefixCls + '-text', role: 'alert', 'aria-live': 'assertive' },
            React.createElement(
                'div',
                null,
                content
            )
        ),
        onClose: function onClose() {
            if (_onClose) {
                _onClose();
            }
            instance.destroy();
            instance = null;
            messageInstance = null;
        }
    });
}
export default {
    SHORT: 3,
    LONG: 8,
    show: function show(content, duration, mask) {
        return notice(content, 'info', duration, function () {}, mask);
    },
    info: function info(content, duration, onClose, mask) {
        return notice(content, 'info', duration, onClose, mask);
    },
    success: function success(content, duration, onClose, mask) {
        return notice(content, 'success', duration, onClose, mask);
    },
    fail: function fail(content, duration, onClose, mask) {
        return notice(content, 'fail', duration, onClose, mask);
    },
    offline: function offline(content, duration, onClose, mask) {
        return notice(content, 'offline', duration, onClose, mask);
    },
    loading: function loading(content, duration, onClose, mask) {
        return notice(content, 'loading', duration, onClose, mask);
    },
    hide: function hide() {
        if (messageInstance) {
            messageInstance.destroy();
            messageInstance = null;
        }
    }
};