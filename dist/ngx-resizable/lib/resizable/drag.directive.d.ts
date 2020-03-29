import { EventEmitter } from '@angular/core';
export declare class DragDirective {
    DragStart: EventEmitter<{}>;
    Drag: EventEmitter<{}>;
    DragEnd: EventEmitter<{}>;
    private dragging;
    onMousedown(event: any): void;
    onMouseup(event: any): void;
    onMousemove(event: MouseEvent): void;
}
