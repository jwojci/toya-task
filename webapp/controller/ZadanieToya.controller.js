sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
],
function (Controller, Filter, FilterOperator, Sorter) {
    "use strict";

    return Controller.extend("toya.controller.ZadanieToya", {
        onInit: function () {
            this.sortOrderCompanyName = "Ascending";
        },

        onSortCompanyName: function () {
            let oTable = this.getView().byId("customerTable");
            let oBinding = oTable.getBinding("items");

            this.sortOrderCompanyName = this.sortOrderCompanyName === "Ascending" ? "Descending" : "Ascending";
            oBinding.sort(new Sorter("CompanyName", this.sortOrderCompanyName === "Descending"));

            let oButton = this.getView().byId("sortCompanyButton");

            oButton.setIcon(this.sortOrderCompanyName === "Ascending" ? "sap-icon://sort-ascending" : "sap-icon://sort-descending");
        },

        onSearch: function (oEvent) {
            let sQuery = oEvent.getParameter("query");

            let oTable = this.getView().byId("customerTable");
            let oBinding = oTable.getBinding("items");

            let aFilters = [];
            if (sQuery) {
                aFilters.push(new Filter("City", FilterOperator.Contains, sQuery));
            }

            oBinding.filter(aFilters);
        }
    });
});
