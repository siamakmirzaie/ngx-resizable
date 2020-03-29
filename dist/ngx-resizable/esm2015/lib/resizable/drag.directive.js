/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, HostListener } from '@angular/core';
export class DragDirective {
    constructor() {
        this.DragStart = new EventEmitter();
        this.Drag = new EventEmitter();
        this.DragEnd = new EventEmitter();
        this.dragging = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousedown(event) {
        if (event.which === 1) {
            this.dragging = true;
            this.DragStart.emit({ originalEvent: event });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseup(event) {
        if (this.dragging) {
            this.DragEnd.emit({ originalEvent: event });
        }
        this.dragging = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousemove(event) {
        if (this.dragging) {
            this.Drag.emit({ originalEvent: event });
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AM2RnZW5vbWVzL25neC1yZXNpemFibGUvIiwic291cmNlcyI6WyJsaWIvcmVzaXphYmxlL2RyYWcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzlFLE1BQU0sT0FBTyxhQUFhO0lBSDFCO1FBS1ksY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0IsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFL0IsYUFBUSxHQUFHLEtBQUssQ0FBQztJQXNCM0IsQ0FBQzs7Ozs7SUFuQkMsV0FBVyxDQUFDLEtBQUs7UUFDZixJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxLQUFLO1FBQ2IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxLQUFpQjtRQUMzQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs7O3dCQUdFLE1BQU07bUJBQ04sTUFBTTtzQkFDTixNQUFNOzBCQUlOLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBT3BDLFlBQVksU0FBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzswQkFPM0MsWUFBWSxTQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBcEI5QyxrQ0FBeUM7O0lBQ3pDLDZCQUFvQzs7SUFDcEMsZ0NBQXVDOzs7OztJQUV2QyxpQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3JzekRyYWdIYW5kbGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhZ0RpcmVjdGl2ZSB7XHJcblxyXG4gIEBPdXRwdXQoKSBEcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIERyYWcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIERyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHByaXZhdGUgZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcclxuICBvbk1vdXNlZG93bihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LndoaWNoID09PSAxKSB7XHJcbiAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLkRyYWdTdGFydC5lbWl0KHsgb3JpZ2luYWxFdmVudDogZXZlbnQgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNldXAnLCBbJyRldmVudCddKVxyXG4gIG9uTW91c2V1cChldmVudCkge1xyXG4gICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcclxuICAgICAgdGhpcy5EcmFnRW5kLmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudCB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2Vtb3ZlJywgWyckZXZlbnQnXSlcclxuICBvbk1vdXNlbW92ZShldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcclxuICAgICAgdGhpcy5EcmFnLmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudCB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19