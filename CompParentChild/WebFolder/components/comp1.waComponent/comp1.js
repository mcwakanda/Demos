
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'comp1';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var functionIn2 = {};	// @button
	// @endregion// @endlock
	
	// eventHandlers// @lock

	functionIn2.click = function functionIn2_click (event)// @startlock
	{// @endlock
		dispatchEvent(APP.getEvent('myEvent1'));
	};// @lock
	$$(getHtmlId('comp2Widget')).loadComponent('/components/comp2.waComponent');
	// @region eventManager// @startlock
	WAF.addListener(this.id + "_functionIn2", "click", functionIn2.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
