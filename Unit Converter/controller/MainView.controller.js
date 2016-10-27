sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("zunit.converter.controller.MainView", {
		
		onKeyValue: function(oevt){
			
			var oSource = oevt.getSource();
			this.calculateByte(oSource.getValue(), oSource.data("key"));
		},
		
		calculateByte: function(dByte, sType){
			var sizes = ['byte', 'kbyte', 'mbyte', 'gbyte']; //, 'tbyte'];
			var oByte = {};
			var nSeq = sizes.indexOf(sType);
			var oModel = this.getView().getModel("screen");
			var oData = oModel.getData();
			
			/* Calculate Bytes */
			var myfunc = function(sItem, nIndex){
				if(nIndex === nSeq) return;
				var nPow = nSeq - nIndex;
				var dResult = dByte * Math.pow(1024, nPow);
				oData[sItem] = [dResult,null];
			}
			sizes.forEach(myfunc);
			
			/* Refresh Model */
			oModel.refresh();
		},
		
		decreaseByte: function(dNum){
			
		},
		
		handleUploadPress: function (oEvent) {
		    var url = "";
		    var oFileUploader = this.getView().byId("fileUploader1");
		    oFileUploader.addHeaderParameter(new sap.ui.unified.FileUploaderParameter({
		        name: "slug",
		        value: oFileUploader.getValue()
		    }));

		    oFileUploader.addHeaderParameter(new sap.ui.unified.FileUploaderParameter({
		        name: "x-csrf-token",
		        value: oController.oModel.getSecurityToken()
		    }));

		    oFileUploader.addHeaderParameter(new sap.ui.unified.FileUploaderParameter({
		        name: "sendXHR",
		        value: true
		    }));
		    oFileUploader.setUploadUrl(url);
		}
		
	});
});