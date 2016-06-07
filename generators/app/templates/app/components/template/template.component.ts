import {
    Component,
    Input,
    AfterViewInit,
    AfterViewChecked,
    ViewEncapsulation,
    ElementRef
} from '@angular/core';

@Component({
    selector: 'template-component',
    templateUrl: 'app/components/template.component.html'
})

export class TemplateComponent implements AfterViewInit {
    width: number;
    height: number;
    mode: string;
    lastModeChange: string;

    constructor(protected el: ElementRef) {}

    recalculateDimensionsAndSetMode() {
        var el = this.el.nativeElement.getElementsByClassName('view')[0];
        var rect = el.getBoundingClientRect();
        this.width = rect.width;
        this.height = rect.height;

        var adjustedMode = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');

        if (this.mode != adjustedMode) {
            this.mode = adjustedMode;
            var time = new Date();
            this.lastModeChange = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
            this.modeChanged();
        }
    }

    onResize(event) {
        this.recalculateDimensionsAndSetMode();
    }

    ngAfterViewInit() {
        setTimeout(_ => {
            this.recalculateDimensionsAndSetMode();
        });
    }

    // template method, implemented by subtypes 
    modeChanged() {}
}