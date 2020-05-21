sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./NavigationJourney"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "ZSUPRATIK_PRACTISE_003_NAMESPACE.ZSUPRATIK_PRACTISE_003.view.",
		autoWait: true
	});
});