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
    
  }
}


function download() {
}
