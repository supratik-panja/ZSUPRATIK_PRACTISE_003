/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZSUPRATIK_PRACTISE_003_NAMESPACE/ZSUPRATIK_PRACTISE_003/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});