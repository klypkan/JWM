//     JWM.js 1.0
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
    $(function () {
        var jwdAttr = 'data-jwd', dataWidgetEl = null, widget = null, widgetOptionsAttr = null, widgetOptions = null, widgetOptionsFunc = null;
        $('[' + jwdAttr + ']').each(function (index) {
            dataWidgetEl = $(this);
            widget = dataWidgetEl.attr(jwdAttr);
            widgetOptionsAttr = dataWidgetEl.attr(jwdAttr + '-options');
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
                widgetOptionsFunc = dataWidgetEl.attr(jwdAttr + '-func');
                if (widgetOptionsFunc) {
                    dataWidgetEl[widget](window[widgetOptionsFunc]());
                }
                else {
                    dataWidgetEl[widget]();
                }
            }
        });
    });
}));
