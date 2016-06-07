import { bootstrap }    from '@angular/platform-browser-dynamic';

import { provide }    from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { XHRBackend } from '@angular/http';

/** add other components here if you want to use them directly in the HTML markup */

bootstrap(AppComponent,
    [HTTP_PROVIDERS]);
