(function($) {

	'use strict';

	$.fn.active = function(o) {

		var els = this,
			timeoutID,
			delay,
			ns,
			callback
		;

		if ($.type(o) === 'function') {
			o = {callback: o};
		}

		delay = o.delay || 100;
		ns = o.ns ? '.' + o.ns : '';
		callback = o.callback || function() {};

		// Buffer the calls to prevent a potential overflow of calls
		$(window).on('resize' + ns, function() {
			clearTimeout(timeoutID);
			timeoutID = setTimeout(function() {
				callback.call(els);
			}, delay);
		});

        // and run immediately
		return callback.call(els);

	};

}(jQuery));
