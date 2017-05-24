//Je définis mes variable de l'objet lune, et du teta.
          var lune;
          var T=3;
          //Je crée ma fonction de rotation de l'objet.
          function rotation () {
                  lune = document.getElementById("lune") ;
          		lune.setAttribute("cx",400+100*Math.cos(T)) ; //Je positionne l'objet sur l'orbite grâce aux fonctions mathématiques cosinus et sinus
          		lune.setAttribute("cy",300+100*Math.sin(T)) ;
          		//J'anime au cours du temps mon objet.
          		T=T+0.0035
          		}
          setInterval(rotation,1); //Je définis une vitesse de rotation.
