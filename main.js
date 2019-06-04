$(document).ready(function(){
	console.log("test")
	$('#button-level-1').click(function() {
		ga('send', 'event', 'button', 'click', 'button-level-1');
	});
	$('#button-level-2').click(function() {
		ga('send', 'event', 'button', 'click', 'button-level-2');
	});
	$('#button-level-3').click(function() {
		ga('send', 'event', 'button', 'click', 'button-level-3');
	});
});
