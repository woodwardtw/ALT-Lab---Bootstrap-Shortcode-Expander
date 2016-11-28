//from http://stackoverflow.com/questions/29987154/expand-specific-accordion-from-url
 jQuery(document).ready(function() {
        if(window.location.hash != null && window.location.hash != ""){
        	console.log(location.hash);
        jQuery('.collapse').removeClass('in');
        jQuery(window.location.hash + '.collapse').collapse('show');
    	}
   });