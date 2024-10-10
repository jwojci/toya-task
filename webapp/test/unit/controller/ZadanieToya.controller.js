/*global QUnit*/

sap.ui.define([
	"toya/controller/ZadanieToya.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ZadanieToya Controller");

	QUnit.test("I should test the ZadanieToya controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
