(function($) {
  // Back-compat file for clueTip 1.2
  // This modifies the $.fn.cluetip object to make the plugin work the way it did before clueTip version 1.2
  $.extend(true, $.fn.cluetip, {
    backCompat: true,
    template: ['<div id="cluetip">',
      '<div id="cluetip-outer" class="cluetip-outer">',
        '<h3 id="cluetip-title" class="cluetip-title ui-widget-header ui-cluetip-header"></h3>',
        '<div id="cluetip-inner" class="cluetip-inner ui-widget-content ui-cluetip-content"></div>',
      '</div>',
      '<div id="cluetip-extra"></div>',
      '<div id="cluetip-arrows" class="cluetip-arrows"></div>',
    '</div>'].join('')
  });
})(jQuery);
