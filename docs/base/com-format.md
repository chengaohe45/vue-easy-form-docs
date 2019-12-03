# 组件写法
通用写法
``` js
...
// attrName为某个属性的索引，如: label, title, component
`attrName`: {         // 若是一个对象，可写成一个Object
  name: "el-button", // 组件名  
  // 组件属性
  props: { // 支持es语法或函数语法
    disabled: "es: {{$item}}.status ? true : false",
    size: "mini",
  },
  text: "新建",   // 支持es语法；组件的文本。 如<el-button>新建</el-button>
  value: "",    // 组件的值，这个不支持es语法，因为其会与v-model实行双向绑定
  actions: {    // 组件的行为，多个时可写数组
    trigger: "click",
    handler: function() {}
  }
}
...
```
- `name`: 组件名；类型：字符串或一个组件对象
- `props`: 组件属性；类型：对象
- `text`: 组件文本；类型：字符串
- `value`: 组件的值（与v-model实行双向绑定）；类型：任何
- `actions`: 组件事件；类型：对象或数组

::: warning 注意
- 这个是通用配置，是否必填要看各个`可组件化属性`的需要；
- 对于`可组件化属性`，它们可能有自己独特的配置，具体配置见`可组件化属性详解`栏。
<!-- - `value`和`actions`设置：除了项组件（[component](./component.md)），其余的`可组件化属性`（如：[label](./label.md#标准-组件化-写法)、[desc](./desc.md#标准-组件化-写法)）暂不支持。 -->
:::