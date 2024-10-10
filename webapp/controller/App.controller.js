sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/routing/History",
        "sap/ui/model/odata/v2/ODataModel"
    ],
    function(BaseController, History, ODataModel) {
      "use strict";
  
      return BaseController.extend("toya.controller.App", {
        onInit: function() {

        },

        onNavigateToCustomerData: function() {
          this.getOwnerComponent().getRouter().navTo("ZadanieToya");
        }
      });
    }
  );
  