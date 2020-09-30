(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{353:function(module,exports){function webpackEmptyAsyncContext(req){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=function(){return[]},webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,module.exports=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id=353},372:function(module,exports,__webpack_require__){__webpack_require__(373),__webpack_require__(518),module.exports=__webpack_require__(519)},437:function(module,exports){},519:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(369);module._StorybookPreserveDecorators=!0,Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(739)],module)}.call(this,__webpack_require__(520)(module))},739:function(module,exports,__webpack_require__){var map={"./stories/dialog.stories.ts":740};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=739},740:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"BasicUsage",(function(){return BasicUsage}));var _a,tslib_es6=__webpack_require__(0),core=__webpack_require__(1),overlay=__webpack_require__(75),v4=__webpack_require__(743);let ngx_dialog_service_NgxDialogService=class NgxDialogService{constructor(overlay){this.overlay=overlay,this.slots=[]}addDialogSlot(config){const overlayRef=this.overlay.create(config),hide=()=>overlayRef.detach(),result={id:Object(v4.a)(),overlayRef:overlayRef,backdropClickSubscription:overlayRef.backdropClick().subscribe(hide),detachmentSubscription:overlayRef.detachments().subscribe(hide),isShown:!1};return this.slots.push(result),result.id}removeDialogSlot(dialogSlotId){const slot=this.findSlot(dialogSlotId);slot&&(slot.backdropClickSubscription.unsubscribe(),this.slots=this.slots.filter(v=>v!==slot))}subscribeBackdropClick(dialogSlotId,callback){const slot=this.findSlot(dialogSlotId);return slot?slot.overlayRef.backdropClick().subscribe(callback):null}subscribeDetachment(dialogSlotId,callback){const slot=this.findSlot(dialogSlotId);return slot?slot.overlayRef.detachments().subscribe(callback):null}show(portal,dialogSlotId){const slot=this.findSlot(dialogSlotId);slot&&!slot.isShown&&(slot.overlayRef.attach(portal),slot.isShown=!0)}hide(dialogSlotId){const slot=this.findSlot(dialogSlotId);slot&&slot.isShown&&(slot.overlayRef.detach(),slot.isShown=!1)}isShown(dialogSlotId){const slot=this.findSlot(dialogSlotId);return slot?slot.isShown:null}findSlot(dialogSlotId){return this.slots.find(v=>v.id===dialogSlotId)}};ngx_dialog_service_NgxDialogService=Object(tslib_es6.b)([Object(core.Injectable)({providedIn:"root"}),Object(tslib_es6.d)("design:paramtypes",["function"==typeof(_a=void 0!==overlay.a&&overlay.a)?_a:Object])],ngx_dialog_service_NgxDialogService);var dialog_stories_a,_b,_c,_d,portal=__webpack_require__(108),testing=__webpack_require__(371),http=__webpack_require__(370);let DialogBodyExampleComponent=class DialogBodyExampleComponent{};DialogBodyExampleComponent=Object(tslib_es6.b)([Object(core.Component)({selector:"lib-dialog-body",template:"<p>Hello World</p>",styles:["p {background:white; color:black; padding:30px; border-radius:8px;}"]})],DialogBodyExampleComponent);let DialogBodyExampleModule=class DialogBodyExampleModule{};DialogBodyExampleModule=Object(tslib_es6.b)([Object(core.NgModule)({declarations:[DialogBodyExampleComponent],exports:[DialogBodyExampleComponent]})],DialogBodyExampleModule);let dialog_stories_DialogSandboxComponent=class DialogSandboxComponent{constructor(dialogService,scrollStrategyOptions,overlayPositionBuilder){this.dialogService=dialogService,this.scrollStrategyOptions=scrollStrategyOptions,this.overlayPositionBuilder=overlayPositionBuilder,this.dialogBodyPortal=new portal.a(DialogBodyExampleComponent)}ngOnDestroy(){this.dialogSlotFixedCenterId&&this.dialogService.removeDialogSlot(this.dialogSlotFixedCenterId),this.dialogSlotTooltipId&&this.dialogService.removeDialogSlot(this.dialogSlotTooltipId)}showDialog(){this.hideDialog(),this.dialogSlotFixedCenterId||(this.dialogSlotFixedCenterId=this.dialogService.addDialogSlot({hasBackdrop:!0,width:"62%",height:"62%",positionStrategy:this.overlayPositionBuilder.global().centerHorizontally().centerVertically(),scrollStrategy:this.scrollStrategyOptions.block()})),this.dialogService.show(this.dialogBodyPortal,this.dialogSlotFixedCenterId)}hideDialog(){this.dialogSlotFixedCenterId&&this.dialogService.isShown(this.dialogSlotFixedCenterId)&&this.dialogService.hide(this.dialogSlotFixedCenterId)}showTooltip(){this.hideTooltip(),this.dialogSlotTooltipId||(this.dialogSlotTooltipId=this.dialogService.addDialogSlot({hasBackdrop:!1,positionStrategy:this.overlayPositionBuilder.flexibleConnectedTo(this.btnRef).withPositions([{offsetX:0,offsetY:0,originX:"center",originY:"bottom",overlayX:"center",overlayY:"top"}])})),this.dialogService.show(this.dialogBodyPortal,this.dialogSlotTooltipId)}hideTooltip(){this.dialogSlotTooltipId&&this.dialogService.isShown(this.dialogSlotTooltipId)&&this.dialogService.hide(this.dialogSlotTooltipId)}};Object(tslib_es6.b)([Object(core.ViewChild)("btn"),Object(tslib_es6.d)("design:type","function"==typeof(dialog_stories_a=void 0!==core.ElementRef&&core.ElementRef)?dialog_stories_a:Object)],dialog_stories_DialogSandboxComponent.prototype,"btnRef",void 0),dialog_stories_DialogSandboxComponent=Object(tslib_es6.b)([Object(core.Component)({selector:"lib-dialog-sandbox",template:["<ng-container>","<p><button #btn ",'(click)="showDialog()" ','(mouseenter)="showTooltip()" ','(mouseleave)="hideTooltip()"',">Show Dialog</button></p>","</ng-container>"].join(""),styles:["button {cursor:pointer;}"]}),Object(tslib_es6.d)("design:paramtypes",["function"==typeof(_b=void 0!==ngx_dialog_service_NgxDialogService&&ngx_dialog_service_NgxDialogService)?_b:Object,"function"==typeof(_c=void 0!==overlay.d&&overlay.d)?_c:Object,"function"==typeof(_d=void 0!==overlay.c&&overlay.c)?_d:Object])],dialog_stories_DialogSandboxComponent);let DialogSandboxModule=class DialogSandboxModule{};DialogSandboxModule=Object(tslib_es6.b)([Object(core.NgModule)({declarations:[dialog_stories_DialogSandboxComponent],imports:[DialogBodyExampleModule],exports:[dialog_stories_DialogSandboxComponent]})],DialogSandboxModule);__webpack_exports__.default={title:"Dialog"};const BasicUsage=()=>({component:dialog_stories_DialogSandboxComponent,props:{},moduleMetadata:{imports:[testing.a,http.a,overlay.b,portal.c,DialogBodyExampleModule,DialogSandboxModule],entryComponents:[DialogBodyExampleComponent]}})}},[[372,1,2]]]);
//# sourceMappingURL=main.140854deffabb65548bb.bundle.js.map