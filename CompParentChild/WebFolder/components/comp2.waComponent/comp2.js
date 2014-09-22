
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'comp2';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var callComp1Button = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	callComp1Button.click = function callComp1Button_click (event)// @startlock
	{// @endlock
		$(document).trigger('callComp1');
	};// @lock
	$(document).on('call2Places', function(event, arg1, arg2, arg3){
		$$(getHtmlId('compText')).setValue("my incoming data: " + arg1 + arg2 + arg3);
	});
	
	$$(getHtmlId('comp3Widget')).loadComponent('/components/comp3.waComponent');

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_callComp1Button", "click", callComp1Button.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
