function add() {
	
	var red = new fabric.Rect({
      top: 100, left: 0, width: 80, height: 50, fill: 'blue', opacity:'0.15', stroke: 'black', strokeWidth: 1  });
    canvas.add(red);
	
canvas.setBackgroundColor({source: image.src, repeat: 'repeat'}, function () {
  canvas.renderAll();
  proceed();
});


  }

var image;
var fn;
function loadImage(input) {
  if (input.files) {
    var fr = new FileReader();
    fr.onload = function(e) {
      image = document.getElementById("iovu-image");
      image.src = e.target.result;
    }
    fr.readAsDataURL(input.files[0]);
	swal({
  title: "Good job!",
  text: "Photo upload",
  icon: "success"
});
	
   
	
  }
}



  
function addc(){	
  fabric.Object.prototype.transparentCorners = false;

  var Cross = fabric.util.createClass(fabric.Object, {
    objectCaching: false,
    initialize: function(options) {
      this.callSuper('initialize', options);
      this.animDirection = 'up';

      this.width = 100;
      this.height = 100;

      this.w1 = this.h2 = 100;
      this.h1 = this.w2 = 30;
    },

    animateWidthHeight: function() {
      var interval = 2;

      if (this.h2 >= 30 && this.h2 <= 100) {
        var actualInterval = (this.animDirection === 'up' ? interval : -interval);
        this.h2 += actualInterval;
        this.w1 += actualInterval;
      }

      if (this.h2 >= 100) {
        this.animDirection = 'down';
        this.h2 -= interval;
        this.w1 -= interval;
      }
      if (this.h2 <= 30) {
        this.animDirection = 'up';
        this.h2 += interval;
        this.w1 += interval;
      }
    },

    _render: function(ctx) {
      ctx.fillRect(-this.w1 / 2, -this.h1 / 2, this.w1, this.h1);
      ctx.fillRect(-this.w2 / 2, -this.h2 / 2, this.w2, this.h2);
    }
  });

  canvas.add(
    new Cross({ top: 100, left: 100 })
  );
  
  canvas.setBackgroundColor({source: image.src, repeat: 'repeat'}, function () {
  canvas.renderAll();
  proceed();
});

 
};

  var $ = function(id){return document.getElementById(id)};

  var canvas = this.__canvas = new fabric.Canvas('c');
  

    var addmore = $('addmore');

      addmore.onclick = add;
	  
	  
	var addcross = $('addcross');
	addcross.onclick = addc;
	


canvas.on('mouse:over', function(e) {
    e.target.set('fill', 'red');
    canvas.renderAll();
  });

  canvas.on('mouse:out', function(e) {
    e.target.set('fill', 'blue');
    canvas.renderAll();
  });
  


