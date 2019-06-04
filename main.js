$(document).ready(function(){
	$('#button-level-1').click(function() {
		gtag('event', 'click', {
		  'event_category': 'button',
		  'event_label': 'button-level-1'
		});
	});

	$('#button-level-2').click(function() {
		gtag('event', 'click', {
		  'event_category': 'button',
		  'event_label': 'button-level-2'
		});
	});

	$('#button-level-3').click(function() {
		gtag('event', 'click', {
		  'event_category': 'button',
		  'event_label': 'button-level-3'
		});
	});

	$('#mc-embedded-subscribe').click(function() {
		gtag('event', 'click', {
		  'event_category': 'button',
		  'event_label': 'subscribed'
		});
	});

	$('#sign-in-button').click(function() {
		gtag('event', 'click', {
		  'event_category': 'button',
		  'event_label': 'sign-in'
		});
	});

	$('#orwashers-link').click(function() {
		gtag('event', 'click', {
		  'event_category': 'link',
		  'event_label': 'orwashers'
		});
	});

});
