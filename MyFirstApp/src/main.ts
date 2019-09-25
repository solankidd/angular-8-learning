import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// 1. this will bootstrap app by AppModule
// 2. go to app.module.ts file
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
