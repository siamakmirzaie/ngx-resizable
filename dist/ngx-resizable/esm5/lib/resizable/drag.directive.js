/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, HostListener } from '@angular/core';
var DragDirective = /** @class */ (function () {
    function DragDirective() {
        this.DragStart = new EventEmitter();
        this.Drag = new EventEmitter();
        this.DragEnd = new EventEmitter();
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
        { type: Directive, args: [{
                    selector: '[rszDragHandle]'
                },] }
    ];
    DragDirective.propDecorators = {
        DragStart: [{ type: Output }],
        Drag: [{ type: Output }],
        DragEnd: [{ type: Output }],
        onMousedown: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
        onMouseup: [{ type: HostListener, args: ['document:mouseup', ['$event'],] }],
        onMousemove: [{ type: HostListener, args: ['document:mousemove', ['$event'],] }]
    };
    return DragDirective;
}());
export { DragDirective };
if (false) {
    /** @type {?} */
    DragDirective.prototype.DragStart;
    /** @type {?} */
    DragDirective.prototype.Drag;
    /** @type {?} */
    DragDirective.prototype.DragEnd;
    /**
     * @type {?}
     * @private
     */
    DragDirective.prototype.dragging;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AM2RnZW5vbWVzL25neC1yZXNpemFibGUvIiwic291cmNlcyI6WyJsaWIvcmVzaXphYmxlL2RyYWcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlFO0lBQUE7UUFLWSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvQixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBc0IzQixDQUFDOzs7OztJQW5CQyxtQ0FBVzs7OztJQURYLFVBQ1ksS0FBSztRQUNmLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUMvQztJQUNILENBQUM7Ozs7O0lBRUQsaUNBQVM7Ozs7SUFEVCxVQUNVLEtBQUs7UUFDYixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsbUNBQVc7Ozs7SUFEWCxVQUNZLEtBQWlCO1FBQzNCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7Z0JBOUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1Qjs7OzRCQUdFLE1BQU07dUJBQ04sTUFBTTswQkFDTixNQUFNOzhCQUlOLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBT3BDLFlBQVksU0FBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs4QkFPM0MsWUFBWSxTQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDOztJQU1oRCxvQkFBQztDQUFBLEFBL0JELElBK0JDO1NBNUJZLGFBQWE7OztJQUV4QixrQ0FBeUM7O0lBQ3pDLDZCQUFvQzs7SUFDcEMsZ0NBQXVDOzs7OztJQUV2QyxpQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3JzekRyYWdIYW5kbGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhZ0RpcmVjdGl2ZSB7XHJcblxyXG4gIEBPdXRwdXQoKSBEcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIERyYWcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIERyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHByaXZhdGUgZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcclxuICBvbk1vdXNlZG93bihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LndoaWNoID09PSAxKSB7XHJcbiAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLkRyYWdTdGFydC5lbWl0KHsgb3JpZ2luYWxFdmVudDogZXZlbnQgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNldXAnLCBbJyRldmVudCddKVxyXG4gIG9uTW91c2V1cChldmVudCkge1xyXG4gICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcclxuICAgICAgdGhpcy5EcmFnRW5kLmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudCB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2Vtb3ZlJywgWyckZXZlbnQnXSlcclxuICBvbk1vdXNlbW92ZShldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcclxuICAgICAgdGhpcy5EcmFnLmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudCB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19