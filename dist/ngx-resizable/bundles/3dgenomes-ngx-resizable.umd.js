(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@3dgenomes/ngx-resizable', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global['3dgenomes'] = global['3dgenomes'] || {}, global['3dgenomes']['ngx-resizable'] = {}), global.ng.core, global.ng.common));
}(this, function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxResizableService = /** @class */ (function () {
        function NgxResizableService() {
        }
        NgxResizableService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgxResizableService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgxResizableService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgxResizableService_Factory() { return new NgxResizableService(); }, token: NgxResizableService, providedIn: "root" });
        return NgxResizableService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function getWindow() {
        return window;
    }
    var NgxResizeableWindowRef = /** @class */ (function () {
        function NgxResizeableWindowRef() {
        }
        Object.defineProperty(NgxResizeableWindowRef.prototype, "nativeWindow", {
            get: /**
             * @return {?}
             */
            function () {
                return getWindow();
            },
            enumerable: true,
            configurable: true
        });
        NgxResizeableWindowRef.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ NgxResizeableWindowRef.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgxResizeableWindowRef_Factory() { return new NgxResizeableWindowRef(); }, token: NgxResizeableWindowRef, providedIn: "root" });
        return NgxResizeableWindowRef;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = window;
    var ResizableComponent = /** @class */ (function () {
        function ResizableComponent(regionElement, windowRef) {
            this.regionElement = regionElement;
            this.windowRef = windowRef;
            this.resizable = true;
            this.noTransition = false;
            this.rFlex = false;
            this.resizeStart = new core.EventEmitter();
            this.resizing = new core.EventEmitter();
            this.resizeEnd = new core.EventEmitter();
            this.vx = 1;
            this.vy = 1;
            this.info = {};
            this.nativeElement = this.regionElement.nativeElement;
        }
        /**
         * @return {?}
         */
        ResizableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (!this.rFlex) {
                this.resizable = false;
            } // Added to permit use of component for all cells
            this.flexBasis = 'flexBasis' in this.nativeElement.style ? 'flexBasis' :
                'webkitFlexBasis' in this.nativeElement.style ? 'webkitFlexBasis' :
                    'msFlexPreferredSize' in this.nativeElement.style ? 'msFlexPreferredSize' : 'flexBasis';
        };
        /**
         * @return {?}
         */
        ResizableComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.style = this.windowRef.nativeWindow.getComputedStyle(this.nativeElement);
        };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        ResizableComponent.prototype.updateInfo = /**
         * @private
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this.info['width'] = false;
            this.info['height'] = false;
            if (this.axis === 'x') {
                this.info['width'] = parseInt(this.nativeElement.style[this.rFlex ? this.flexBasis : 'width'], 10);
            }
            else {
                this.info['height'] = parseInt(this.nativeElement.style[this.rFlex ? this.flexBasis : 'height'], 10);
            }
            this.info['id'] = this.nativeElement.id;
            this.info['evt'] = e;
        };
        /**
         * @param {?} e
         * @param {?} direction
         * @return {?}
         */
        ResizableComponent.prototype.dragStart = /**
         * @param {?} e
         * @param {?} direction
         * @return {?}
         */
        function (e, direction) {
            /** @type {?} */
            var mouseEvent = e.originalEvent;
            this.dragDir = direction;
            this.axis = (this.dragDir === 'left' || this.dragDir === 'right') ? 'x' : 'y';
            this.start = (this.axis === 'x' ? mouseEvent.clientX : mouseEvent.clientY);
            this.w = parseInt(this.style.getPropertyValue('width'), 10);
            this.h = parseInt(this.style.getPropertyValue('height'), 10);
            this.resizeStart.emit({ info: this.info });
            // prevent transition while dragging
            this.noTransition = true;
        };
        /**
         * @param {?} e
         * @return {?}
         */
        ResizableComponent.prototype.dragEnd = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            /** @type {?} */
            var mouseEvent = e.originalEvent;
            this.updateInfo(mouseEvent);
            this.resizeEnd.emit({ info: this.info });
            this.noTransition = false;
        };
        /**
         * @param {?} e
         * @return {?}
         */
        ResizableComponent.prototype.dragging = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            /** @type {?} */
            var mouseEvent = e.originalEvent;
            /** @type {?} */
            var offset = (this.axis === 'x') ? this.start - mouseEvent.clientX : this.start - mouseEvent.clientY;
            /** @type {?} */
            var operand = 1;
            switch (this.dragDir) {
                case 'top':
                    operand = -1;
                /* falls through */
                case 'bottom':
                    /** @type {?} */
                    var height = (this.h - offset * this.vy * operand) + 'px';
                    if (this.rFlex) {
                        this.flexBasis = height;
                    }
                    else {
                        this.height = height;
                    }
                    break;
                case 'left':
                    operand = -1;
                /* falls through */
                case 'right':
                    /** @type {?} */
                    var width = (this.w - offset * this.vx * operand) + 'px';
                    if (this.rFlex) {
                        this.flexBasis = width;
                    }
                    else {
                        this.width = width;
                    }
                    break;
            }
            this.updateInfo(mouseEvent);
            this.resizing.emit({ info: this.info });
        };
        ResizableComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'rsz-layout',
                        template: "<ng-content></ng-content>\r\n\r\n<div *ngFor='let direction of directions'\r\n     [class]=\"'rg-' + direction\"\r\n     rszDragHandle\r\n     (DragStart)=\"dragStart($event, direction);\"\r\n     (DragEnd)=\"dragEnd($event)\"\r\n     (Drag)=\"dragging($event)\">\r\n    <span></span>\r\n</div>",
                        providers: [{ provide: 'Window', useValue: ɵ0 }],
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".content{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column nowrap}.resizable-row{-webkit-box-flex:1;flex:1;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap}.resizable-row.resizable{-webkit-box-flex:0;flex:0 0 360px}.cell{box-sizing:border-box;background:#fff;border:4px solid #f0f0f0;-webkit-box-flex:1;flex:1;min-height:60px}.cell.resizable{-webkit-box-flex:0;flex:0 0 360px}.resizable{position:relative}.resizable.no-transition{-webkit-transition:none!important;transition:none!important}.rg-none{display:none}.rg-bottom,.rg-left,.rg-right,.rg-top{display:block;width:8px;height:8px;line-height:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:0 0;position:absolute;z-index:1}.rg-bottom span,.rg-left span,.rg-right span,.rg-top span{position:absolute;box-sizing:border-box;display:block;border:1px solid #ccc}.rg-left span,.rg-right span{border-width:0 1px;top:50%;margin:-10px 0 0 2px;height:20px;width:4px}.rg-bottom span,.rg-top span{border-width:1px 0;left:50%;margin:2px 0 0 -10px;width:20px;height:4px}.rg-top{cursor:row-resize;width:100%;top:0;left:0;margin-top:-4px}.rg-right{cursor:col-resize;height:100%;right:0;top:0;margin-right:-8px}.rg-bottom{cursor:row-resize;width:100%;bottom:0;left:0;margin-bottom:-4px}.rg-left{cursor:col-resize;height:100%;left:0;top:0;margin-left:-8px}.content.cols{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap}.content.cols .resizable-row{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column nowrap}.content.cols .cell{min-width:60px}.content.cols .rg-top{margin-top:-8px}.content.cols .rg-right{margin-right:-4px}.content.cols .rg-bottom{margin-bottom:-8px}.content.cols .rg-left{margin-left:-4px}"]
                    }] }
        ];
        /** @nocollapse */
        ResizableComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: NgxResizeableWindowRef }
        ]; };
        ResizableComponent.propDecorators = {
            resizable: [{ type: core.HostBinding, args: ['class.resizable',] }],
            noTransition: [{ type: core.HostBinding, args: ['class.no-transition',] }],
            width: [{ type: core.HostBinding, args: ['style.width',] }],
            height: [{ type: core.HostBinding, args: ['style.height',] }],
            flexBasis: [{ type: core.HostBinding, args: ['style.flex-basis',] }],
            directions: [{ type: core.Input }],
            rFlex: [{ type: core.Input }],
            resizeStart: [{ type: core.Output }],
            resizing: [{ type: core.Output }],
            resizeEnd: [{ type: core.Output }]
        };
        return ResizableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DragDirective = /** @class */ (function () {
        function DragDirective() {
            this.DragStart = new core.EventEmitter();
            this.Drag = new core.EventEmitter();
            this.DragEnd = new core.EventEmitter();
            this.dragging = false;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        DragDirective.prototype.onMousedown = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.which === 1) {
                this.dragging = true;
                this.DragStart.emit({ originalEvent: event });
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        DragDirective.prototype.onMouseup = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.dragging) {
                this.DragEnd.emit({ originalEvent: event });
            }
            this.dragging = false;
        };
        /**
         * @param {?} event
         * @return {?}
         */
        DragDirective.prototype.onMousemove = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.dragging) {
                this.Drag.emit({ originalEvent: event });
            }
        };
        DragDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[rszDragHandle]'
                    },] }
        ];
        DragDirective.propDecorators = {
            DragStart: [{ type: core.Output }],
            Drag: [{ type: core.Output }],
            DragEnd: [{ type: core.Output }],
            onMousedown: [{ type: core.HostListener, args: ['mousedown', ['$event'],] }],
            onMouseup: [{ type: core.HostListener, args: ['document:mouseup', ['$event'],] }],
            onMousemove: [{ type: core.HostListener, args: ['document:mousemove', ['$event'],] }]
        };
        return DragDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxResizableModule = /** @class */ (function () {
        function NgxResizableModule() {
        }
        NgxResizableModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            ResizableComponent,
                            DragDirective
                        ],
                        exports: [
                            ResizableComponent,
                            DragDirective
                        ]
                    },] }
        ];
        return NgxResizableModule;
    }());

    exports.NgxResizableModule = NgxResizableModule;
    exports.NgxResizableService = NgxResizableService;
    exports.ResizableComponent = ResizableComponent;
    exports.ɵa = NgxResizeableWindowRef;
    exports.ɵb = DragDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=3dgenomes-ngx-resizable.umd.js.map
