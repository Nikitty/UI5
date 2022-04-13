sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/m/Button', 'sap/m/Dialog', 'sap/m/Table'],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, Button, Dialog, Table) {
    'use strict'

    return Controller.extend('project1.controller.View1', {
      onInit: function () {},
      onClick: function () {
        if (!this.oDialog) {
          this.oDialog = new Dialog({
            title: 'Table',
            // content: ,

            beginButton: new Button({
              text: 'OK',
              press: function () {
                this.oDialog.close()
              }.bind(this),
            }),

            endButton: new Button({
              text: 'Close',
              press: function () {
                this.oDialog.close()
              }.bind(this),
            }),
          })

          this.getView().addDependent(this.oDialog)
        }

        this.oDialog.open()
      },
    })
  }
)
