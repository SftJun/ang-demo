// 导入模块库中的模
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
//通过引导根模块来启动应用
platformBrowserDynamic().bootstrapModule(AppModule);
