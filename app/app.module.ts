import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({// 是一个装饰器函数，它接收一个用来描述模块属性的元数据对象
  imports:      [ BrowserModule ],// 本模块声明的组件模板需要的类所在的其它模块
  declarations: [ AppComponent ],//声明本模块中拥有的视图类{组件、指令、管道}
  bootstrap:    [ AppComponent ]// 指定应用的主视图（根组件），它是所有其它视图的宿主，只要有根模块才能设置bootstrap属性
  // export 属于declarations的子集，可用于其它模块的组件模板,注：根模块不需要导出任何东西，因为其它组件不需要导入根模块
  // providers 服务的创建者，并加入到全局服务列表中，可用于应用的任何部分
})
export class AppModule { }
