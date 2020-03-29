/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, ElementRef, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { NgxResizeableWindowRef } from '../window.service';
const ɵ0 = window;
export class ResizableComponent {
    /**
     * @param {?} regionElement
     * @param {?} windowRef
     */
    constructor(regionElement, windowRef) {
        this.regionElement = regionElement;
        this.windowRef = windowRef;
        this.resizable = true;
        this.noTransition = false;
        this.rFlex = false;
        this.resizeStart = new EventEmitter();
        this.resizing = new EventEmitter();
        this.resizeEnd = new EventEmitter();
        this.vx = 1;
        this.vy = 1;
        this.info = {};
        this.nativeElement = this.regionElement.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.rFlex) {
            this.resizable = false;
        } // Added to permit use of component for all cells
        this.flexBasis = 'flexBasis' in this.nativeElement.style ? 'flexBasis' :
            'webkitFlexBasis' in this.nativeElement.style ? 'webkitFlexBasis' :
                'msFlexPreferredSize' in this.nativeElement.style ? 'msFlexPreferredSize' : 'flexBasis';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.style = this.windowRef.nativeWindow.getComputedStyle(this.nativeElement);
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    updateInfo(e) {
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
    }
    /**
     * @param {?} e
     * @param {?} direction
     * @return {?}
     */
    dragStart(e, direction) {
        /** @type {?} */
        const mouseEvent = e.originalEvent;
        this.dragDir = direction;
        this.axis = (this.dragDir === 'left' || this.dragDir === 'right') ? 'x' : 'y';
        this.start = (this.axis === 'x' ? mouseEvent.clientX : mouseEvent.clientY);
        this.w = parseInt(this.style.getPropertyValue('width'), 10);
        this.h = parseInt(this.style.getPropertyValue('height'), 10);
        this.resizeStart.emit({ info: this.info });
        // prevent transition while dragging
        this.noTransition = true;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    dragEnd(e) {
        /** @type {?} */
        const mouseEvent = e.originalEvent;
        this.updateInfo(mouseEvent);
        this.resizeEnd.emit({ info: this.info });
        this.noTransition = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    dragging(e) {
        /** @type {?} */
        const mouseEvent = e.originalEvent;
        /** @type {?} */
        const offset = (this.axis === 'x') ? this.start - mouseEvent.clientX : this.start - mouseEvent.clientY;
        /** @type {?} */
        let operand = 1;
        switch (this.dragDir) {
            case 'top':
                operand = -1;
            /* falls through */
            case 'bottom':
                /** @type {?} */
                const height = (this.h - offset * this.vy * operand) + 'px';
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
                const width = (this.w - offset * this.vx * operand) + 'px';
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
    }
}
ResizableComponent.decorators = [
    { type: Component, args: [{
                selector: 'rsz-layout',
                template: "<ng-content></ng-content>\r\n\r\n<div *ngFor='let direction of directions'\r\n     [class]=\"'rg-' + direction\"\r\n     rszDragHandle\r\n     (DragStart)=\"dragStart($event, direction);\"\r\n     (DragEnd)=\"dragEnd($event)\"\r\n     (Drag)=\"dragging($event)\">\r\n    <span></span>\r\n</div>",
                providers: [{ provide: 'Window', useValue: ɵ0 }],
                encapsulation: ViewEncapsulation.None,
                styles: [".content{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column nowrap}.resizable-row{-webkit-box-flex:1;flex:1;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap}.resizable-row.resizable{-webkit-box-flex:0;flex:0 0 360px}.cell{box-sizing:border-box;background:#fff;border:4px solid #f0f0f0;-webkit-box-flex:1;flex:1;min-height:60px}.cell.resizable{-webkit-box-flex:0;flex:0 0 360px}.resizable{position:relative}.resizable.no-transition{-webkit-transition:none!important;transition:none!important}.rg-none{display:none}.rg-bottom,.rg-left,.rg-right,.rg-top{display:block;width:8px;height:8px;line-height:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:0 0;position:absolute;z-index:1}.rg-bottom span,.rg-left span,.rg-right span,.rg-top span{position:absolute;box-sizing:border-box;display:block;border:1px solid #ccc}.rg-left span,.rg-right span{border-width:0 1px;top:50%;margin:-10px 0 0 2px;height:20px;width:4px}.rg-bottom span,.rg-top span{border-width:1px 0;left:50%;margin:2px 0 0 -10px;width:20px;height:4px}.rg-top{cursor:row-resize;width:100%;top:0;left:0;margin-top:-4px}.rg-right{cursor:col-resize;height:100%;right:0;top:0;margin-right:-8px}.rg-bottom{cursor:row-resize;width:100%;bottom:0;left:0;margin-bottom:-4px}.rg-left{cursor:col-resize;height:100%;left:0;top:0;margin-left:-8px}.content.cols{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap}.content.cols .resizable-row{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column nowrap}.content.cols .cell{min-width:60px}.content.cols .rg-top{margin-top:-8px}.content.cols .rg-right{margin-right:-4px}.content.cols .rg-bottom{margin-bottom:-8px}.content.cols .rg-left{margin-left:-4px}"]
            }] }
];
/** @nocollapse */
ResizableComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgxResizeableWindowRef }
];
ResizableComponent.propDecorators = {
    resizable: [{ type: HostBinding, args: ['class.resizable',] }],
    noTransition: [{ type: HostBinding, args: ['class.no-transition',] }],
    width: [{ type: HostBinding, args: ['style.width',] }],
    height: [{ type: HostBinding, args: ['style.height',] }],
    flexBasis: [{ type: HostBinding, args: ['style.flex-basis',] }],
    directions: [{ type: Input }],
    rFlex: [{ type: Input }],
    resizeStart: [{ type: Output }],
    resizing: [{ type: Output }],
    resizeEnd: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ResizableComponent.prototype.resizable;
    /** @type {?} */
    ResizableComponent.prototype.noTransition;
    /** @type {?} */
    ResizableComponent.prototype.width;
    /** @type {?} */
    ResizableComponent.prototype.height;
    /** @type {?} */
    ResizableComponent.prototype.flexBasis;
    /** @type {?} */
    ResizableComponent.prototype.directions;
    /** @type {?} */
    ResizableComponent.prototype.rFlex;
    /** @type {?} */
    ResizableComponent.prototype.resizeStart;
    /** @type {?} */
    ResizableComponent.prototype.resizing;
    /** @type {?} */
    ResizableComponent.prototype.resizeEnd;
    /**
     * @type {?}
     * @private
     */
    ResizableComponent.prototype.nativeElement;
    /**
     * @type {?}
     * @private
     */
    ResizableComponent.prototype.style;
    /**
     * @type {?}
     * @private
     */
    ResizableComponent.prototype.w;
    /**
     * @type {?}
     * @private
     */
    ResizableComponent.prototype.h;
    /**
     * @type {?}
     * @private
     */
    ResizableComponent.prototype.vx;
    /**
     * @type {?}
     * @private
     */
    ResizableComponent.prototype.vy;
    /**
     * @type {?}
     * @private
     */
    ResizableComponent.prototype.start;
    /**
     * @type {?}
     * @private
     */
    ResizableComponent.prototype.dragDir;
    /**
     * @type {?}
     * @private
     */
    ResizableComponent.prototype.axis;
    /**
     * @type {?}
     * @private
     */
    ResizableComponent.prototype.info;
    /**
     * @type {?}
     * @private
     */
    ResizableComponent.prototype.regionElement;
    /**
     * @type {?}
     * @private
     */
    ResizableComponent.prototype.windowRef;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0AzZGdlbm9tZXMvbmd4LXJlc2l6YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9yZXNpemFibGUvcmVzaXphYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxXQUFXLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUMxSSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztXQU1iLE1BQU07QUFHcEQsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFpQzdCLFlBQW9CLGFBQXlCLEVBQVUsU0FBaUM7UUFBcEUsa0JBQWEsR0FBYixhQUFhLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUF3QjtRQS9CeEQsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNiLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBTWhELFVBQUssR0FBRyxLQUFLLENBQUM7UUFFYixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFTakMsT0FBRSxHQUFHLENBQUMsQ0FBQztRQUNQLE9BQUUsR0FBRyxDQUFDLENBQUM7UUFRUCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBR2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQUUsQ0FBQyxpREFBaUQ7UUFDOUYsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLElB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LDJDQUFpQzs7Ozs7SUFBRSx1Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSG9zdEJpbmRpbmcsIElucHV0LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4UmVzaXplYWJsZVdpbmRvd1JlZiB9IGZyb20gJy4uL3dpbmRvdy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncnN6LWxheW91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdyZXNpemFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydyZXNpemFibGUuY29tcG9uZW50LnNjc3MnXSxcclxuICBwcm92aWRlcnM6IFsgeyBwcm92aWRlOiAnV2luZG93JywgdXNlVmFsdWU6IHdpbmRvdyB9IF0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVzaXphYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5yZXNpemFibGUnKSByZXNpemFibGUgPSB0cnVlO1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3Mubm8tdHJhbnNpdGlvbicpIG5vVHJhbnNpdGlvbiA9IGZhbHNlO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKSB3aWR0aDtcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpIGhlaWdodDtcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmZsZXgtYmFzaXMnKSBmbGV4QmFzaXM7XHJcblxyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbnM7XHJcbiAgQElucHV0KCkgckZsZXggPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpIHJlc2l6ZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZXNpemluZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVzaXplRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwcml2YXRlIG5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgc3R5bGU7XHJcblxyXG4gIHByaXZhdGUgdztcclxuICBwcml2YXRlIGg7XHJcblxyXG4gIHByaXZhdGUgdnggPSAxO1xyXG4gIHByaXZhdGUgdnkgPSAxO1xyXG5cclxuICBwcml2YXRlIHN0YXJ0O1xyXG5cclxuICBwcml2YXRlIGRyYWdEaXI7XHJcblxyXG4gIHByaXZhdGUgYXhpcztcclxuXHJcbiAgcHJpdmF0ZSBpbmZvID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVnaW9uRWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSB3aW5kb3dSZWY6IE5neFJlc2l6ZWFibGVXaW5kb3dSZWYpIHtcclxuICAgIHRoaXMubmF0aXZlRWxlbWVudCA9IHRoaXMucmVnaW9uRWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuckZsZXgpIHsgdGhpcy5yZXNpemFibGUgPSBmYWxzZTsgfSAvLyBBZGRlZCB0byBwZXJtaXQgdXNlIG9mIGNvbXBvbmVudCBmb3IgYWxsIGNlbGxzXHJcbiAgICB0aGlzLmZsZXhCYXNpcyA9ICdmbGV4QmFzaXMnIGluIHRoaXMubmF0aXZlRWxlbWVudC5zdHlsZSA/ICdmbGV4QmFzaXMnIDpcclxuICAgICAgJ3dlYmtpdEZsZXhCYXNpcycgaW4gdGhpcy5uYXRpdmVFbGVtZW50LnN0eWxlID8gJ3dlYmtpdEZsZXhCYXNpcycgOlxyXG4gICAgICAnbXNGbGV4UHJlZmVycmVkU2l6ZScgaW4gdGhpcy5uYXRpdmVFbGVtZW50LnN0eWxlID8gJ21zRmxleFByZWZlcnJlZFNpemUnIDogJ2ZsZXhCYXNpcyc7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnN0eWxlID0gdGhpcy53aW5kb3dSZWYubmF0aXZlV2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5uYXRpdmVFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlSW5mbyhlKSB7XHJcbiAgICB0aGlzLmluZm9bJ3dpZHRoJ10gPSBmYWxzZTsgdGhpcy5pbmZvWydoZWlnaHQnXSA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuYXhpcyA9PT0gJ3gnKSB7XHJcbiAgICAgIHRoaXMuaW5mb1snd2lkdGgnXSA9IHBhcnNlSW50KHRoaXMubmF0aXZlRWxlbWVudC5zdHlsZVt0aGlzLnJGbGV4ID8gdGhpcy5mbGV4QmFzaXMgOiAnd2lkdGgnXSwgMTApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbmZvWydoZWlnaHQnXSA9IHBhcnNlSW50KHRoaXMubmF0aXZlRWxlbWVudC5zdHlsZVt0aGlzLnJGbGV4ID8gdGhpcy5mbGV4QmFzaXMgOiAnaGVpZ2h0J10sIDEwKTtcclxuICAgIH1cclxuICAgIHRoaXMuaW5mb1snaWQnXSA9IHRoaXMubmF0aXZlRWxlbWVudC5pZDtcclxuICAgIHRoaXMuaW5mb1snZXZ0J10gPSBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRyYWdTdGFydChlLCBkaXJlY3Rpb24pIHtcclxuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBlLm9yaWdpbmFsRXZlbnQ7XHJcblxyXG4gICAgdGhpcy5kcmFnRGlyID0gZGlyZWN0aW9uO1xyXG4gICAgdGhpcy5heGlzID0gKHRoaXMuZHJhZ0RpciA9PT0gJ2xlZnQnIHx8IHRoaXMuZHJhZ0RpciA9PT0gJ3JpZ2h0JykgPyAneCcgOiAneSc7XHJcbiAgICB0aGlzLnN0YXJ0ID0gKHRoaXMuYXhpcyA9PT0gJ3gnID8gbW91c2VFdmVudC5jbGllbnRYIDogbW91c2VFdmVudC5jbGllbnRZKTtcclxuICAgIHRoaXMudyA9IHBhcnNlSW50KHRoaXMuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKSwgMTApO1xyXG4gICAgdGhpcy5oID0gcGFyc2VJbnQodGhpcy5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKSwgMTApO1xyXG5cclxuICAgIHRoaXMucmVzaXplU3RhcnQuZW1pdCh7IGluZm86IHRoaXMuaW5mbyB9KTtcclxuXHJcbiAgICAvLyBwcmV2ZW50IHRyYW5zaXRpb24gd2hpbGUgZHJhZ2dpbmdcclxuICAgIHRoaXMubm9UcmFuc2l0aW9uID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcmFnRW5kKGUpIHtcclxuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBlLm9yaWdpbmFsRXZlbnQ7XHJcblxyXG4gICAgdGhpcy51cGRhdGVJbmZvKG1vdXNlRXZlbnQpO1xyXG4gICAgdGhpcy5yZXNpemVFbmQuZW1pdCh7IGluZm86IHRoaXMuaW5mbyB9KTtcclxuICAgIHRoaXMubm9UcmFuc2l0aW9uID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJhZ2dpbmcoZSkge1xyXG4gICAgY29uc3QgbW91c2VFdmVudCA9IGUub3JpZ2luYWxFdmVudDtcclxuICAgIGNvbnN0IG9mZnNldCA9ICh0aGlzLmF4aXMgPT09ICd4JykgPyB0aGlzLnN0YXJ0IC0gbW91c2VFdmVudC5jbGllbnRYIDogdGhpcy5zdGFydCAtIG1vdXNlRXZlbnQuY2xpZW50WTtcclxuXHJcbiAgICBsZXQgb3BlcmFuZCA9IDE7XHJcbiAgICBzd2l0Y2ggKHRoaXMuZHJhZ0Rpcikge1xyXG4gICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgIG9wZXJhbmQgPSAtMTtcclxuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXHJcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gKHRoaXMuaCAtIG9mZnNldCAqIHRoaXMudnkgKiBvcGVyYW5kKSArICdweCc7XHJcbiAgICAgICAgaWYgKHRoaXMuckZsZXgpIHtcclxuICAgICAgICAgIHRoaXMuZmxleEJhc2lzID0gaGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgIG9wZXJhbmQgPSAtMTtcclxuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXHJcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICBjb25zdCB3aWR0aCA9ICh0aGlzLncgLSBvZmZzZXQgKiB0aGlzLnZ4ICogb3BlcmFuZCkgKyAncHgnO1xyXG4gICAgICAgIGlmICh0aGlzLnJGbGV4KSB7XHJcbiAgICAgICAgICB0aGlzLmZsZXhCYXNpcyA9IHdpZHRoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVJbmZvKG1vdXNlRXZlbnQpO1xyXG4gICAgdGhpcy5yZXNpemluZy5lbWl0KHsgaW5mbzogdGhpcy5pbmZvIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=