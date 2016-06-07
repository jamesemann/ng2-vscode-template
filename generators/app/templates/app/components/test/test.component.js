"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var test_service_1 = require('../../services/test/test.service');
var template_component_1 = require('../template/template.component');
var TestComponent = (function (_super) {
    __extends(TestComponent, _super);
    function TestComponent(testService, el) {
        _super.call(this, el);
        this.testService = testService;
        this.data = testService.getSomeData();
    }
    TestComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
    };
    TestComponent.prototype.modeChanged = function () {
        var data = [];
        if (this.mode == "smartphone") {
            data = _.take(this.data, 10);
        }
        else if (this.mode == "tablet") {
            data = _.take(this.data, 40);
        }
        else {
            data = _.take(this.data, 100);
        }
        var svg = d3.select("svg");
        // DATA JOIN
        var circle = svg.selectAll("rect")
            .data(data, function (d) {
            return d;
        });
        // UPDATE
        circle.transition()
            .delay(function (d, i) {
            return i * 10;
        })
            .attr("y", function (d, i) {
            return 500 - d;
        })
            .attr("height", function (d, i) {
            return (d);
        })
            .attr("x", function (d, i) {
            return (i * 20);
        });
        // ENTER
        circle.enter().append("rect")
            .transition()
            .attr("y", function (d, i) {
            return 500 - d;
        })
            .attr("height", function (d, i) {
            return (d);
        })
            .attr("x", function (d, i) {
            return (i * 20);
        })
            .transition()
            .attr("width", function (d, i) {
            return 18;
        });
        // EXIT
        circle.exit()
            .transition()
            .style("fill-opacity", 1e-6)
            .remove();
    };
    TestComponent = __decorate([
        core_1.Component({
            selector: 'test-component',
            templateUrl: 'app/components/test/test.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['app/components/test/test.component.css'],
            providers: [test_service_1.TestService]
        }), 
        __metadata('design:paramtypes', [test_service_1.TestService, core_1.ElementRef])
    ], TestComponent);
    return TestComponent;
}(template_component_1.TemplateComponent));
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map