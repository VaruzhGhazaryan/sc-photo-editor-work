import { AfterViewInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { fabric } from 'fabric';
import { HelpersService } from './helpers';
import { Mode, ComputedStyle } from './types';
export declare class ScPhotoEditorComponent implements AfterViewInit, OnChanges {
    private helpers;
    private _mode$;
    private _source$;
    private mode$;
    private source$;
    editorWidth: number;
    exportWidth: number;
    aspectRatio: number;
    source: string;
    mode: Mode;
    changed: EventEmitter<{}>;
    minScaleLevel: number;
    maxScaleLevel: number;
    canvas: fabric.Canvas;
    currentScaleLevel: number;
    canvasSource: fabric.Image;
    computedStyle: ComputedStyle;
    private originalSource;
    private previewCanvas;
    constructor(helpers: HelpersService);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    initWorkspace(): void;
    setSource(source: any): void;
    setMode(mode: Mode): void;
    switchToMode(mode: Mode): void;
    private prepareCanvasImage;
    private getOrientation;
    private disableImageCorners;
    private getMinScaleLevel;
    private sourceMoveListener;
    private sourceMoveEndListener;
    private preparePreviewCanvas;
    private resetPreviewCanvas;
    private updatePreviewCanvas;
    private getComputedStyle;
    setScale(scale: number): void;
    initCropper(): void;
    initBlur(): void;
}
