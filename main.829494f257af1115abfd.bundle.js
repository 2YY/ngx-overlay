(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{353:function(module,exports){function webpackEmptyAsyncContext(req){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=function(){return[]},webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,module.exports=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id=353},372:function(module,exports,__webpack_require__){__webpack_require__(373),__webpack_require__(518),module.exports=__webpack_require__(519)},437:function(module,exports){},519:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(369);module._StorybookPreserveDecorators=!0,Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(739)],module)}.call(this,__webpack_require__(520)(module))},739:function(module,exports,__webpack_require__){var map={"./stories/dialog.stories.ts":740};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=739},740:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"BasicUsage",(function(){return BasicUsage}));var _a,tslib_es6=__webpack_require__(0),core=__webpack_require__(1),overlay=__webpack_require__(75),v4=__webpack_require__(743);let ngx_overlay_service_NgxOverlayService=class NgxOverlayService{constructor(overlay){this.overlay=overlay,this.slots=[]}addOverlaySlot(config){const overlayRef=this.overlay.create(config),hide=()=>overlayRef.detach(),result={id:Object(v4.a)(),overlayRef:overlayRef,backdropClickSubscription:overlayRef.backdropClick().subscribe(hide),detachmentSubscription:overlayRef.detachments().subscribe(hide),isShown:!1};return this.slots.push(result),result.id}removeOverlaySlot(overlaySlotId){const slot=this.findSlot(overlaySlotId);slot&&(slot.backdropClickSubscription.unsubscribe(),this.slots=this.slots.filter(v=>v!==slot))}subscribeBackdropClick(overlaySlotId,callback){const slot=this.findSlot(overlaySlotId);return slot?slot.overlayRef.backdropClick().subscribe(callback):null}subscribeDetachment(overlaySlotId,callback){const slot=this.findSlot(overlaySlotId);return slot?slot.overlayRef.detachments().subscribe(callback):null}show(portal,overlaySlotId){const slot=this.findSlot(overlaySlotId);slot&&!slot.isShown&&(slot.overlayRef.attach(portal),slot.isShown=!0)}hide(overlaySlotId){const slot=this.findSlot(overlaySlotId);slot&&slot.isShown&&(slot.overlayRef.detach(),slot.isShown=!1)}isShown(overlaySlotId){const slot=this.findSlot(overlaySlotId);return slot?slot.isShown:null}findSlot(overlaySlotId){return this.slots.find(v=>v.id===overlaySlotId)}};ngx_overlay_service_NgxOverlayService=Object(tslib_es6.b)([Object(core.Injectable)({providedIn:"root"}),Object(tslib_es6.d)("design:paramtypes",["function"==typeof(_a=void 0!==overlay.a&&overlay.a)?_a:Object])],ngx_overlay_service_NgxOverlayService);var dialog_stories_a,_b,_c,_d,portal=__webpack_require__(108),testing=__webpack_require__(371),http=__webpack_require__(370);let OverlayBodyExampleComponent=class OverlayBodyExampleComponent{};OverlayBodyExampleComponent=Object(tslib_es6.b)([Object(core.Component)({selector:"lib-overlay-body",template:"<p>Hello World</p>",styles:["p {background:white; color:black; padding:30px; border-radius:8px;}"]})],OverlayBodyExampleComponent);let OverlayBodyExampleModule=class OverlayBodyExampleModule{};OverlayBodyExampleModule=Object(tslib_es6.b)([Object(core.NgModule)({declarations:[OverlayBodyExampleComponent],exports:[OverlayBodyExampleComponent]})],OverlayBodyExampleModule);let dialog_stories_OverlaySandboxComponent=class OverlaySandboxComponent{constructor(overlayService,scrollStrategyOptions,overlayPositionBuilder){this.overlayService=overlayService,this.scrollStrategyOptions=scrollStrategyOptions,this.overlayPositionBuilder=overlayPositionBuilder,this.overlayBodyPortal=new portal.a(OverlayBodyExampleComponent)}ngOnDestroy(){this.overlaySlotFixedCenterId&&this.overlayService.removeOverlaySlot(this.overlaySlotFixedCenterId),this.overlaySlotTooltipId&&this.overlayService.removeOverlaySlot(this.overlaySlotTooltipId)}showOverlay(){this.hideOverlay(),this.overlaySlotFixedCenterId||(this.overlaySlotFixedCenterId=this.overlayService.addOverlaySlot({hasBackdrop:!0,width:"62%",height:"62%",positionStrategy:this.overlayPositionBuilder.global().centerHorizontally().centerVertically(),scrollStrategy:this.scrollStrategyOptions.block()})),this.overlayService.show(this.overlayBodyPortal,this.overlaySlotFixedCenterId)}hideOverlay(){this.overlaySlotFixedCenterId&&this.overlayService.isShown(this.overlaySlotFixedCenterId)&&this.overlayService.hide(this.overlaySlotFixedCenterId)}showTooltip(){this.hideTooltip(),this.overlaySlotTooltipId||(this.overlaySlotTooltipId=this.overlayService.addOverlaySlot({hasBackdrop:!1,positionStrategy:this.overlayPositionBuilder.flexibleConnectedTo(this.btnRef).withPositions([{offsetX:0,offsetY:0,originX:"center",originY:"bottom",overlayX:"center",overlayY:"top"}])})),this.overlayService.show(this.overlayBodyPortal,this.overlaySlotTooltipId)}hideTooltip(){this.overlaySlotTooltipId&&this.overlayService.isShown(this.overlaySlotTooltipId)&&this.overlayService.hide(this.overlaySlotTooltipId)}};Object(tslib_es6.b)([Object(core.ViewChild)("btn"),Object(tslib_es6.d)("design:type","function"==typeof(dialog_stories_a=void 0!==core.ElementRef&&core.ElementRef)?dialog_stories_a:Object)],dialog_stories_OverlaySandboxComponent.prototype,"btnRef",void 0),dialog_stories_OverlaySandboxComponent=Object(tslib_es6.b)([Object(core.Component)({selector:"lib-overlay-sandbox",template:["<ng-container>","<p><button #btn ",'(click)="showOverlay()" ','(mouseenter)="showTooltip()" ','(mouseleave)="hideTooltip()"',">Show Overlay</button></p>","</ng-container>"].join(""),styles:["button {cursor:pointer;}"]}),Object(tslib_es6.d)("design:paramtypes",["function"==typeof(_b=void 0!==ngx_overlay_service_NgxOverlayService&&ngx_overlay_service_NgxOverlayService)?_b:Object,"function"==typeof(_c=void 0!==overlay.d&&overlay.d)?_c:Object,"function"==typeof(_d=void 0!==overlay.c&&overlay.c)?_d:Object])],dialog_stories_OverlaySandboxComponent);let OverlaySandboxModule=class OverlaySandboxModule{};OverlaySandboxModule=Object(tslib_es6.b)([Object(core.NgModule)({declarations:[dialog_stories_OverlaySandboxComponent],imports:[OverlayBodyExampleModule],exports:[dialog_stories_OverlaySandboxComponent]})],OverlaySandboxModule);__webpack_exports__.default={title:"Overlay"};const BasicUsage=()=>({component:dialog_stories_OverlaySandboxComponent,props:{},moduleMetadata:{imports:[testing.a,http.a,overlay.b,portal.c,OverlayBodyExampleModule,OverlaySandboxModule],entryComponents:[OverlayBodyExampleComponent]}})}},[[372,1,2]]]);
//# sourceMappingURL=main.829494f257af1115abfd.bundle.js.map