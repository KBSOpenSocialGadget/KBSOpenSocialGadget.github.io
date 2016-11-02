sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";
 
	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createScreenModel: function(){
			var oData = { "byte": [0,null], "kbyte": [0,null], "mbyte": [0,null], "gbyte": [0,null] };
			var oModel = new JSONModel(oData);
			return oModel;
		}
	};
});
