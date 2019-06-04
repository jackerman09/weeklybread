$(document).ready(function(){
	console.log("page loaded")
	$('#button-level-1').click(function() {
		gtag('event', 'click', {
		  'event_category': 'button',
		  'event_label': 'button-level-1'
		});
		console.log('click 1')
	});
	$('#button-level-2').click(function() {
		gtag('event', 'click', {
		  'event_category': 'button',
		  'event_label': 'button-level-2'
		});
		console.log('click 2')
	});
	$('#button-level-3').click(function() {
		gtag('event', 'click', {
		  'event_category': 'button',
		  'event_label': 'button-level-3'
		});
		console.log('click 3')
	});
	$('#mc-embedded-subscribe').click(function() {
		gtag('event', 'click', {
		  'event_category': 'button',
		  'event_label': 'subscribed'
		});
		console.log('subscribed')
	});
});
