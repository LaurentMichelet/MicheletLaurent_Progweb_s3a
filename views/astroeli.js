  //Je définis mes variable de l'objet lune,terre, et du teta.
      var lune2;
      var terre;
      var T=3;
      var a = 190; //a est le grand axe
      var b = 140; //b est le petit axe
      var c = Math.sqrt(Math.pow(a, 2)-Math.pow(b, 2)) //c distance foyer au centre de l'ellipse
      var x0 = c+200 // coordonnées de l'astre attracteur
      var y0 = 200
      //Je crée ma fonction de rotation de l'objet.
      function elliptique () {
      lune2 = document.getElementById("lune2") ;
      var x = 400+a*Math.cos(T);
      var y = 300+b*Math.sin(T);
      var r = Math.sqrt(Math.pow(x-x0, 2)+Math.pow(y-y0, 2))
      lune2.setAttribute("cx",x) ; //Je positionne l'objet sur l'orbite grâce aux
      lune2.setAttribute("cy",y) ; //fonctions mathématiques cosinus et sinus
      //J'anime mon objet au cours du temps.
      T=T+0.0035
      }
      setInterval(elliptique,1); //Je définis une vitesse de rotation.*
      function excentricite() {
      terre = document.getElementById("terre") ;
      terre.setAttribute("cx",x0);
      }
      excentricite()
