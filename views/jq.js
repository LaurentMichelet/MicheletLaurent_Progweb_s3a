$(document).ready( function(){

	$( "#req_get").click(function(){
	/*	$.get('index.php?prenom=Laurent&nom=Michelet', function(data) {
			console.log(data);
		});*/

		$.get(
			'index.php',
			{
				"prenom" : "Laurent",
				"nom" : "Michelet"
			},
			function(data) {
				console.log(data);
			}
		);
	});



});