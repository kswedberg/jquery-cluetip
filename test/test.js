module('ajax requests', {
  setup: function() {
    this.rHeading = /^\s*(Heading)/;
    this.rContent = /^\s*(Content)/;
    this.opts = {
      attribute: 'href'
    };
  }
});

asyncTest('title + contents ', function() {
  var rHeading = this.rHeading,
      successTest = function() {
        var content = (rHeading).exec( $('#cluetip').find('.cluetip-inner').text() );
        equal( content && content[1], 'Heading', 'Heading is in .cluetip-inner' );
        start();
      };

  this.opts.ajaxSettings = {
    success: function(data, textStatus, $cluetip, $cluetipInner) {
      setTimeout(successTest, 0);
    }
  };

  $('#ajax1').cluetip(this.opts).trigger('mouseenter');

});

asyncTest('separate title and content', function() {

  var rHeading = this.rHeading,
      rContent = this.rContent,
      successTest = function() {
        var title = (rHeading).exec( $('#cluetip').find('.cluetip-title').text() ),
            content = (rContent).exec( $('#cluetip').find('.cluetip-inner').text() );
        equal( title && title[1], 'Heading', 'Heading is in .cluetip-title' );
        equal( content && content[1], 'Content', 'Content is in .cluetip-inner');
        start();
      };

  var opts = $.extend(this.opts, {
    ajaxProcess: function(data) {
      var $data = $('<div>' + data + '</div>');
      return {
        title: $data.find('h2').html(),
        content: $data.find('div').html()
      };
    },

    ajaxSettings: {
      success: function(data, textStatus, $cluetip, $cluetipInner) {
        setTimeout(successTest, 0);
      }
    }
  });

  $('#ajax1').cluetip(opts).trigger('mouseenter');

});