function pageLoaded(){
	document.body.addEventListener("click", select);
}

function select(event){

  console.log(event)
  var classes = event.target.classList;

  if (classes.contains('selected')) {
    classes .remove('selected');
  }

  else {
    classes.add('selected');
  }
}

