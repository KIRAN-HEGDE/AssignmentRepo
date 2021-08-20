sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment, JSONModel, Filter) {
        "use strict";
 
        return Controller.extend("assignmentrepo.controller.View1", {
            onInit: function () {
                $.get("model/game.json").then((oModel)=>{
                    this.getView().setModel(new JSONModel(oModel),"games");
                });
            }
        });
    });