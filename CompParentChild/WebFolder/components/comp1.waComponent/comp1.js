
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'comp1';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var call2PlacesButton = {};	// @button
	var callComp3Button = {};	// @button
	// @endregion// @endlock
	
	// eventHandlers// @lock

	call2PlacesButton.click = function call2PlacesButton_click (event)// @startlock
	{// @endlock
		$(document).trigger('call2Places',[1,2,3]);
	};// @lock

	callComp3Button.click = function callComp3Button_click (event)// @startlock
	{// @endlock
		$(document).trigger('comp1_to_comp3');
	};// @lock
	$(document).on('callComp1', function(event){
		$$(getHtmlId('compText')).setValue('My value changed: ' + new Date());
	});
	$$(getHtmlId('comp2Widget')).loadComponent('/components/comp2.waComponent');
	// @region eventManager// @startlock
	WAF.addListener(this.id + "_call2PlacesButton", "click", call2PlacesButton.click, "WAF");
	WAF.addListener(this.id + "_callComp3Button", "click", callComp3Button.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
