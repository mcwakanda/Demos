﻿
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var local1Event = {};	// @dataSource
	var local1Combo = {};	// @combobox
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	local1Event.onCurrentElementChange = function local1Event_onCurrentElementChange (event)// @startlock
	{// @endlock
		console.log("local1Event.onCurrentElementChange");
		console.log("example1 value is " + $$("local1Combo").getValue());
	};// @lock

	local1Event.onBeforeCurrentElementChange = function local1Event_onBeforeCurrentElementChange (event)// @startlock
	{// @endlock
		console.log("local1Event.onBeforeCurrentElementChange");
	};// @lock

	local1Combo.change = function local1Combo_change (event)// @startlock
	{// @endlock
		//alert("Do something with the value: " + $$("local1Combo").getValue());
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		local1 = [
			{label: "item1", value: "item1v"},
			{label: "item2", value: "item2v"},
			{label: "item3", value: "item3v"}
		];
		sources.local1.sync(); //When you change the value of a local datasource, sync() is required to update UI
		sources.local1.selectNext();
		sources.local1.selectByKey("item1");
		//Note: you must select the checkbox "key" for this to work properly.
		//the selection in code without knowing the position - painful problem.
		//Must iterate through and find in array. (underscore)
		//BUG: local array select(0) or selectByKey('firstitem') does not work on page first loaded.
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("local1", "onCurrentElementChange", local1Event.onCurrentElementChange, "WAF");
	WAF.addListener("local1", "onBeforeCurrentElementChange", local1Event.onBeforeCurrentElementChange, "WAF");
	WAF.addListener("local1Combo", "change", local1Combo.change, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
