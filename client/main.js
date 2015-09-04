requirejs.config({
    'baseUrl': ''
});

$.fn.redraw = function(){
  $(this).each(function(){
    var redraw = this.offsetHeight;
  });
};

requirejs(['app/index']);