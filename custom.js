
function App() {
	var self = this;

	this.debug = true;
	this.$body = $('body');
	this.$loader = $('#loader');

	// Initializer

	this.init = function() {

		$loader.one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function() {
		
			$loader.slideUp('slow', function() {

				console.log('done');

			});
	
		});

	}
}


$(document).ready(function() {

	var Juan = Juan || new App();
	// Juan.init();

});