"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TemplateComponent = (function () {
    function TemplateComponent(el) {
        this.el = el;
    }
    TemplateComponent.prototype.recalculateDimensionsAndSetMode = function () {
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
    };
    TemplateComponent.prototype.onResize = function (event) {
        this.recalculateDimensionsAndSetMode();
    };
    TemplateComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function (_) {
            _this.recalculateDimensionsAndSetMode();
        });
    };
    // template method, implemented by subtypes 
    TemplateComponent.prototype.modeChanged = function () { };
    TemplateComponent = __decorate([
        core_1.Component({
            selector: 'template-component',
            templateUrl: 'app/components/template.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], TemplateComponent);
    return TemplateComponent;
}());
exports.TemplateComponent = TemplateComponent;
//# sourceMappingURL=template.component.js.map