sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    // 'sap/m/MessageToast',
    'sap/m/Button',
    'sap/m/Dialog',
    // 'sap/m/List',
    // 'sap/m/StandardListItem',
    'sap/m/Table',
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (
    Controller,
    // MessageToast,
    Button,
    Dialog,
    // List,
    // StandardListItem,
    Table
  ) {
    'use strict'

    return Controller.extend('project1.controller.View1', {
      onInit: function () {},
      onClick: function () {
        if (!this.oDialog) {
          this.oDialog = new Dialog({
            title: 'Table',
            content: new Table({
              id: 'mainViewTbl',
              columns: [
                new sap.m.Column({
                  header: [new sap.m.Label({ text: '{i18n>workOrderNo}' })],
                }),
                new sap.m.Column({
                  header: [new sap.m.Label({ text: '{i18n>orderNo}' })],
                }),
                new sap.m.Column({
                  header: [new sap.m.Label({ text: '{i18n>location}' })],
                }),
                new sap.m.Column({
                  header: [new sap.m.Label({ text: '{i18n>lineEnterDate}' })],
                }),
                new sap.m.Column({
                  header: [new sap.m.Label({ text: '{i18n>operation}' })],
                }),
              ],

              items: [
                new sap.m.ColumnListItem({
                  cells: [
                    new sap.m.Text({ text: '1' }),
                    new sap.m.Text({ text: '2' }),
                    new sap.m.Text({ text: '3' }),
                    new sap.m.Text({ text: '4' }),
                    new sap.m.Text({ text: '5' }),
                  ],
                }),
                new sap.m.ColumnListItem({
                  cells: [
                    new sap.m.Text({ text: '6' }),
                    new sap.m.Text({ text: '7' }),
                    new sap.m.Text({ text: '8' }),
                    new sap.m.Text({ text: '9' }),
                    new sap.m.Text({ text: '10' }),
                  ],
                }),
              ],
            }),

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
