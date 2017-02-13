// 组件负责控制屏幕上的一小块区域，我们称之为视图
import { Component } from '@angular/core';

@Component({// 装饰器
  // moduleid 为与模块相关的URL提供基地址
  selector: 'my-app',// CSS 选择器，它告诉Angular在父级HTML中查找<my-app>标签，创建并插入该组件
  // templateUrl 组件HTML模板的模块相对地址
  //  providers:[HeroService ] 组件所需服务的依赖注入提供商数组，告诉Angular 该组件的构造函数需要一个HeroService 服务
  //  这样组件就可以从服务中获得数据
  template: `<h1>Hello {{name}}</h1>`,
  /**
   * template
   * 通过组件自带的模板来定义组件视图，模板以HTML形式存在，告诉Angular如何渲染组件 => 原生组件
   * 同时还可以使用其它元素（Angular的模板语法），=> 自定义组件
   */
  /**
   *  {{name}} 这是插值表达式，在这个标签中显示name的值
   *  [properties] = "val" 属性绑定
   *  (click) =　"val" 事件绑定
   *   [(ngModel)] = "val" 双向数据绑定
   *  在双身数据绑定中，数据属性值通过属性绑定从组件流到输入框；用户的修改通过事件绑定流回组件，把属性值设置为最新的值
   */
})
export class AppComponent  { // 组件:组件是一个带模板的指令,组件是最大的消费者,组件的任务就是提供用户体验
  name = 'Angular'; //属性
}
// @Component装饰器 实际上就是一个 @Directive装饰器