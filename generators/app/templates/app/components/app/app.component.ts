import { Component, ViewEncapsulation } from '@angular/core';
import { TestComponent } from "../test/test.component";

@Component({
  selector: 'my-app',
  template: '<test-component></test-component>',
  styleUrls: ['app/components/app/app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [TestComponent]
})

export class AppComponent { }
