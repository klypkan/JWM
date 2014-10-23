//     JWM.js 1.1
//     For all details and documentation:
//     https://github.com/klypkan/JWM

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory($);
    }
}(function ($) {
    $.fn.initWidget = function (options) {
        var options = options || { attrPrefix: 'data-jwd' };
        var attrPrefix = options.attrPrefix, dataWidgetEl = null, widget = null, widgetOptionsAttr = null, widgetOptions = null, widgetOptionsFunc = null;
        return this.each(function () {
            dataWidgetEl = $(this);
            widget = dataWidgetEl.attr(attrPrefix);
            widgetOptionsAttr = dataWidgetEl.attr(attrPrefix + '-options');
            if (widgetOptionsAttr) {
                widgetOptions = {};
                var attrItems = widgetOptionsAttr.split(',');
                var nameValItems = null;
                for (var i = 0, attrItemsLenght = attrItems.length; i < attrItemsLenght; i++) {
                    nameValItems = attrItems[i].split(':');
                    widgetOptions[nameValItems[0].trim()] = nameValItems[1].trim();
                }
                dataWidgetEl[widget](widgetOptions);
            }
            else {
                widgetOptionsFunc = dataWidgetEl.attr(attrPrefix + '-func');
                if (widgetOptionsFunc) {
                    dataWidgetEl[widget](window[widgetOptionsFunc]());
                }
                else {
                    dataWidgetEl[widget]();
                }
            }
        });
    };
}));
