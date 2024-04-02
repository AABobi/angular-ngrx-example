import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//$ npm install @ngrx/store-devtools
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
