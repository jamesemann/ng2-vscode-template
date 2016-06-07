"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./components/app/app.component');
var http_1 = require('@angular/http');
/** add other components here if you want to use them directly in the HTML markup */
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map