
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var local1Combo = {};	// @combobox
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	local1Combo.change = function local1Combo_change (event)// @startlock
	{// @endlock
		alert("Do something with the value: " + $$("local1Combo").getValue());
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		local1 = [
			{label: "item1", value: "item1v"},
			{label: "item2", value: "item2v"},
			{label: "item3", value: "item3v"}
		];
		sources.local1.sync(); //When you change the value of a local datasource, sync() is required to update UI
//		sources.local1.selectByKey("item1");	
		//BUG: local array datasource selectByKey() does not work, result is that you can't choose
		//the selection in code without knowing the position - painful problem.
		//Must iterate through and find in array. (underscore)
		//BUG: local array select(0) does not work. select(1) chooses second element fine. WAK8 only
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("local1Combo", "change", local1Combo.change, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
