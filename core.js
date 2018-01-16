
function add() {
	
	var red = new fabric.Rect({
      top: 100, left: 0, width: 80, height: 50, fill: 'blue', opacity:'0.15', stroke: 'black', strokeWidth: 1  });
    canvas.add(red);
	
canvas.setBackgroundColor({source: image.src, repeat: 'repeat'}, function () {
  canvas.renderAll();
  proceed();
});


  }
  
  
  
function addImg(){
    fabric.Image.fromURL(myImg, function(oImg) {
        var l = 100;
        var t = 100;                
            oImg.scale(0.2);
        oImg.set({'left':l});
                  oImg.set({'top':t});
            canvas.add(oImg);
        });
}


function addImg1(){
    fabric.Image.fromURL(myImg1, function(oImg) {
        var l = 100;
        var t = 100;                
            oImg.scale(0.2);
        oImg.set({'left':l});
                  oImg.set({'top':t});
            canvas.add(oImg);
        });
}

function addImg2(){
    fabric.Image.fromURL(myImg2, function(oImg) {
        var l = 100;
        var t = 100;                
            oImg.scale(0.2);
        oImg.set({'left':l});
                  oImg.set({'top':t});
            canvas.add(oImg);
        });
}

function addImg3(){
    fabric.Image.fromURL(myImg3, function(oImg) {
        var l = 100;
        var t = 100;                
            oImg.scale(0.2);
        oImg.set({'left':l});
                  oImg.set({'top':t});
            canvas.add(oImg);
        });
}

function addImg4(){
    fabric.Image.fromURL(myImg4, function(oImg) {
        var l = 100;
        var t = 100;                
            oImg.scale(0.2);
        oImg.set({'left':l});
                  oImg.set({'top':t});
            canvas.add(oImg);
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

  var myImg1 = 'http://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Smiling_grande.png?v=1513251031';
  var myImg2 = 'https://lh3.googleusercontent.com/WJXZNFAkSh7Q3Y6an5ZMM6HfU9zP3zQU_R-DZDkbembg9cHkxLgkq37OuXDwZRH9z8Q=w170';
  var myImg3 = 'http://www.hey.fr/tools/emoji/ios_emoji_face_throwing_a_kiss.png';
  var myImg4 = 'http://www.clker.com/cliparts/r/x/4/4/i/a/red-glossy-heart.svg';
  var myImg= 'https://www.easypeasypatches.com/wp-content/uploads/2016/08/cache_240_240_0_100_80_16777215_emoji-cool.png';

    var addmore = $('addmore');
	addmore.onclick = add;
	   
	var addcross = $('addcross');
	addcross.onclick = addc;
	
	var addi=$('addImage');
	addi.onclick =addImg;
	
	var addi1=$('addImage1');
	addi1.onclick =addImg1;
	var addi2=$('addImage2');
	addi2.onclick =addImg2;
	var addi3=$('addImage3');
	addi3.onclick =addImg3;
	var addi4=$('addImage4');
	addi4.onclick =addImg4;
	



canvas.on('mouse:over', function(e) {
    e.target.set('fill', 'red');
    canvas.renderAll();
  });

  canvas.on('mouse:out', function(e) {
    e.target.set('fill', 'blue');
    canvas.renderAll();
  });
  
/*
canvas.on('mouse:wheel', function(e) {
    window.location.replace("http://google.com");

    });
	*/
	
	



