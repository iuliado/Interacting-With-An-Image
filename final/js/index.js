$(function() {
  var $modal = $('.modal').modal('hide').on('shown.bs.modal', function(e) {
    $('textarea', this).focus();
  }).on('hide.bs.modal', function(e) {
    var $this = $(this),
    		callback = $this.data('ddnAnnotate');
    
    if (typeof callback === 'function') callback($this);
  }).on('hidden.bs.modal', function(e) {
    $('textarea', this).val('');
  });

  var annotate = function($element, x, y) {
    if (!$element.is(".glyphicon-comment")) {
      var style = "position:absolute;"
      + "top:" + (y / $element.outerHeight() * 100) + "%;"
      + "left:" + (x / $element.outerWidth() * 100) + "%;";

      $modal.data('ddnAnnotate', function($modal) {
        var text = $('textarea', $modal).val(),
        		i = $('<i class="glyphicon glyphicon-comment" style="' + style + '"></i>');

        if (text) i.appendTo($element.parent()).on("click.ddn-annotate", function(e) {
          annotate($(this), 0, 0);
        }).tooltip({
          placement: 'right', 
          title: text
        }).data('originalTitle', text);
      }).modal('show');
    }
    else {
      var text = $('textarea', $modal).val($element.data('originalTitle'));
      
      $modal.data('ddnAnnotate', function($modal) {
        var text = $('textarea', $modal).val();
        
        if (text) $element.data('originalTitle', text).tooltip('destroy').tooltip({
          placement: 'right', 
          title: text
        });
      }).modal('show');
    }
  };
      
  $(".ddn-annotate-area").on("click.ddn-annotate", "*", function(e) {
    var $this = $(this),
        offsetX = 0,
        offsetY = 0;

    e.stopImmediatePropagation();

    if (e.offsetX === undefined || e.offsetY === undefined) {
      offsetX = e.pageX - $this.offset().left;
      offsetY = e.pageY - $this.offset().top;
    }
    else {
      offsetX = e.offsetX;
      offsetY = e.offsetY;
    }

    annotate($this, offsetX, offsetY);
  });
});