
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'comp3';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	// @endregion// @endlock

	// eventHandlers// @lock
	$(document).on('comp1_to_comp3', function(event){
		alert('comp3 just recieved the message!');
	});
	
	$(document).on('call2Places', function(event, arg1, arg2, arg3){
		$$(getHtmlId('compText')).setValue("incoming data: " + arg1 + arg2 + arg3);
	});
	// @region eventManager// @startlock
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
