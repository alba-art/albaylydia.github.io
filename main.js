    mi_imagen1=new Image
    mi_imagen1.src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Contra_los_transg%C3%A9nicos_-_Madrid_-_20080830.jpg/1024px-Contra_los_transg%C3%A9nicos_-_Madrid_-_20080830.jpg"
    mi_imagen2=new Image
    mi_imagen2.src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Transformation_with_Agrobacterium.JPG/330px-Transformation_with_Agrobacterium.JPG"
var i=1;
function cambia_imagen() {                      
   if (i == 1)
      {
      document.images['prueba'].src=mi_imagen2.src
      i=2;
      }
   else
      {
      document.images['prueba'].src=mi_imagen1.src;
      i=1;
      }
   }
   var catEl = document.getElementById("cat");
  
  var startTime = new Date().getTime();
  var walkTheCat = function() {
      var currTime = new Date().getTime();
      var secondsElapsed = ((currTime - startTime)/1000);
   var newLeft= secondsElapsed*30 + "px";
    catEl.style.left= newLeft;
    window.requestAnimationFrame(walkTheCat);
  };
  walkTheCat();
