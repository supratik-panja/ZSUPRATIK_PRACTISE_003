/*global QUnit*/

sap.ui.define([
	"ZSUPRATIK_PRACTISE_003_NAMESPACE/ZSUPRATIK_PRACTISE_003/controller/App.controller"
], function (Controller) {
	"use strict";

	QUnit.module("App Controller");

	QUnit.test("I should test the App controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});