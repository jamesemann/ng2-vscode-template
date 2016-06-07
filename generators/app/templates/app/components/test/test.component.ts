import {
    Component,
    Input,
    AfterViewInit,
    ViewEncapsulation,
    ElementRef
} from '@angular/core';

import { TestService } from '../../services/test/test.service';
import { TemplateComponent } from '../template/template.component';

@Component({
    selector: 'test-component',
    templateUrl: 'app/components/test/test.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['app/components/test/test.component.css'],
    providers: [TestService]
})

export class TestComponent extends TemplateComponent implements AfterViewInit {
    private data: number[];

    constructor(private testService: TestService, el: ElementRef) {
        super(el);

        this.data = testService.getSomeData();
    }

    ngAfterViewInit() {
        super.ngAfterViewInit();
    }

    modeChanged() {
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
            })

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
            })
            ;

        // EXIT
        circle.exit()
            .transition()
            .style("fill-opacity", 1e-6)
            .remove();
    }
}