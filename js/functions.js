;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		$doc.on('focusin', '.field, textarea', function() {
			if(this.title==this.value) {
				this.value = '';
				this.className = "subscribe-field field inputtext"
			}
			
		}).on('focusout', '.field, textarea', function(){
			if(this.value=='') {
				this.value = this.title;
				this.className = "subscribe-field field"
			}
		});
	});
})(jQuery, window, document);