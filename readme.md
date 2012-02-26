jQuery clueTip Plugin
---------------------

License
========

Dual licensed under the MIT and GPL licenses:

* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html

Copyright Karl Swedberg

Requirements
============

* jQuery v1.3+

Description
===========
Displays a highly customizable tooltip when the user interacts with the matched element. As of clueTip version 1.1, this plugin is [ThemeRoller Ready][1].

### Important clueTip 1.2 Change  ###

Version 1.2 of the clueTip plugin changes the HTML structure of the tooltip. It uses classes instead of IDs for the elements within the clueTip. This allows multiple tooltips to be visible at the same time (one per call to the .cluetip() method) if the `multiple` option is set to `true`.

The plugin may not work as expected if you update jquery.cluetip.js to version 1.2+ and you don't also update the jquery.cluetip.css stylesheet.

If you have a lot invested in the old clueTip's structure with the IDs, you can get it back by:

1. adding the jquery.compat.cluetip.js file immediately after jquery.cluetip.js, AND
2. replacing jquery.cluetip.css with jquery.compat.cluetip.css.

### Options ###

The clueTip plugin allows for (too?) many options. For a complete list, check out the [plugin's home page][2]

### Content via ajax ###

By default, the clueTip plugin loads a page indicated by the "rel" attribute via ajax and displays its contents. However, *the attribute to be used for both the body and the heading of the clueTip is user-configurable*.
If a "title" attribute is specified, its value is used as the clueTip's heading.

### Content from HTML element ###

Optionally, the clueTip's body can display content from an element on the same page.

Just indicate the element's id (e.g. "#some-id") in the rel attribute.

### Content from title attribute ####

Optionally, the clueTip's body can display content from the title attribute, when a delimiter is indicated.

* The string before the first instance of the delimiter is set as the clueTip's heading.
* All subsequent strings are wrapped in separate DIVs and placed in the clueTip's body.

Examples
========

This is the most basic clueTip. It displays a 275px-wide clueTip on mouseover of the element with an ID of "tip." On mouseout of the element, the clueTip is hidden.

    $('#tip).cluetip();

The following displays a clueTip on mouseover of all `<a>` elements with class="clue". The hovered element gets a class of "highlight" added to it (so that it can be styled appropriately. This may be useful for non-anchor elements in older browsers such as IE6.). The clueTip is "sticky," which means that it will not be hidden until the user either clicks on its "close" text/graphic or displays another clueTip. The "close" text/graphic is set to display at the bottom of the clueTip (default is top) and display an image rather than the default "Close" text. Moreover, the body of the clueTip is truncated to the first 60 characters, which are followed by an ellipsis (...). Finally, the clueTip retrieves the content with a `POST` request rather than the default `GET`.

    $('a.clue').cluetip({
      hoverClass: 'highlight',
      sticky: true,
      closePosition: 'bottom',
      closeText: '<img src="cross.png" alt="close" />',
      truncate: 60,
      ajaxSettings: {
        type: 'POST'
      }
    });

You can programmatically hide (close) a clueTip by triggering the "hideCluetip" custom event. On a touch-enabled device, for example, you could hide any visible clueTips when the user touches anywhere in the body except on a link or on the clueTip itself:

    $('body').bind('touchstart', function(event) {
     event = event.originalEvent;
     var tgt = event.touches[0] && event.touches[0].target,
         $tgt = $(tgt);

     if (tgt.nodeName !== 'A' && !$tgt.closest('div.cluetip').length ) {
       $(document).trigger('hideCluetip');
     }
    });

More examples can be found at [http://plugins.learningjquery.com/cluetip/demo/](http://plugins.learningjquery.com/cluetip/demo/)


Credits
=======

* Originally inspired by Cody Lindley's jTip (http://www.codylindley.com)
* Huge thanks to Jonathan Chaffer, Glen Lipka, Shelane Enos, Hector Santos, Torben Schreiter, Dan G. Switzer, Jörn Zaefferer, and the many others who helped report and fix bugs and suggest features.

[1]: http://jqueryui.com/themeroller/
[2]: http://plugins.learningjquery.com/cluetip/