sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/MessageToast',
	"ZSUPRATIK_PRACTISE_003_NAMESPACE/ZSUPRATIK_PRACTISE_003/utils/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, MessageToast, formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("ZSUPRATIK_PRACTISE_003_NAMESPACE.ZSUPRATIK_PRACTISE_003.controller.App", {
		formatter: formatter,

		onInit: function () {

		},
		onPress: function () {
			var oResource = this.getView().getModel("i18n").getResourceBundle();
			var sInput = this.getView().byId("iinput").getValue();
			var sMsg = oResource.getText("sayHello");
			MessageToast.show(sMsg + " " + sInput, {
				duration: 1000
			});
		},
		onFilterInvoices: function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductID", FilterOperator.Contains, sQuery));
			}
			
			// filter binding
			var oList = this.getView().byId("productList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
		onItemSelected: function (oEvent) {
			var oSelectedItem = oEvent.getSource();
			var oContext = oSelectedItem.getBindingContext();
			var sPath = oContext.getPath();
			var oProductDetailPanel = this.byId("productDetailsPanel");

			oProductDetailPanel.bindElement({
				path: sPath
			});
			this.byId("productDetailsPanel").setVisible(true);
		}

	});
});