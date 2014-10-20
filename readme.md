Active
======
__jQuery utility plugin to make a collection of elements active to window resize events__

Usage
-----
```
$(function() {
	$('.link').active(function() {
		// reset stuff
		// do stuff
	});
});
```

Advanced
--------
```
$(function() {
    $('body').active({
        ns:'dave',
        delay:1000,
        callback:function() {
            // Use the namespace, ns, to remove the resize handling
            $(window).off('resize.dave');
        }
    });
});
```
