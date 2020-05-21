sap.ui.define([],
function() {
	return {
		delivery : function (sMeasure,sWeight) {
			var sResult = "",
				oResource = this.getView().getModel("i18n").getResourceBundle();
			if(sMeasure === "G"){
				sWeight = sWeight / 1000;
			}
			if(sWeight < .5){
				sResult = oResource.getText("mail");
			} else if(sWeight > .5 && sWeight < 10) {
				sResult = oResource.getText("percel");
			} else {
				sResult = oResource.getText("career");
			}
			return sResult;
		}
	};
});