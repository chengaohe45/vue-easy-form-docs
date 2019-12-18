# 项组件/component

字段：`component`<br/>
值类型有：
- `string`： 全局组件名
- `object`： 一个对象，见[组件写法](./com-format.md)

## 实例
```html
<es-form ref="form" :schema="formSchema" v-model="formValue"></es-form>
```

## 写法

```js
data() {
    return {
      formValue: {
      },
      formSchema: {

        // 写法一
        advName: {
          label: "广告名称",
          component: "el-input",  // 全局组件名；不写的话，采用系统默认的
          value: "首页位置"
        },
        
        // 写法二：组件写法
        target: {
          label: "投放目标",
          component: {
            name: "el-input",
            props: {
              placeholder: "请输入投放目标"
            },
            text: "新建",  // 一般用于文本显示：如<el-button>新建</el-button>
            align: "left",      // left, center, right
            ref: "testRef",   // 索引值，可以通过 form.getRef('testRef')取出
            flex: "full",      // 这个一般用于分组
            // actions: [],       // 见下面
            // value: "首页位置"   // 组件的默认值
          },
          value: "中年人"   // 组件的默认值也可写在这里，优先级高于component.value
        }

      }
    };
  }
```

### flex值
- `''`： 默认为没有设置，component的长度根据自身情况自动取值
- `full`： 项中有多少点多少。此值一般用于component
- `self`： label的文本占多宽就多宽。此值一般用于label

### value值
- 通常在编写项（如：advName）时，component直接写成组件名，所以value写在外面（跟component同级）也是可以的
- 写在外面的value只有在`项组件`中有效，且优先级高于component.value

::: warning 注意
由于`项组件隐藏`是没有任何的意义，所以`component.hidden`这个属性设置是不存在的；这个跟其它可组件化的属性（如：[项标签label](./label.md)、[描述desc](./desc.md)、[帮助help](./help.md)、[单元unit](./unit.md)、[标题title](./title.md)）不同。
:::


## 项组件事件
字段：component.actions；配置格式见[组件写法->组件事件](./com-format.md#组件事件)

### 事件示例
```js
data() {
    return {
      formValue: {
        // name: "默认小花"
      },
      formSchema: {
        isGood: {
          label: "",    // 占位置，但不显示文字
          component: {
            name: "el-checkbox",
            text: "是否好人",
            actions: {
              trigger: "change",
              // options => {value, event, pathKey, index, idxChain,target}
              handler: function(options) {
                console.log("this对象: ", this);
                console.log('options: ', options);
              }
            }
          },
          value: true,
          col: 12
        },
        desc: {
          label: "es: {{$root}}.isGood ? '好人描述' : '描述'",
          component: {
            name: "el-input",
            props: {
              placeholder: "es: {{$root}}.isGood ? '好人描述要讲多点' : '一般描述啦'"
            },
            ref: "desc"
          },
          value: ""
        }
      },
    };
  }
```
函数handler返回的参数options包含的信息有：
- `value`： 当前项组件的值，表单的值可以通过this取出
- `event`： 事件本身所携带的信息, 如keyup.native,可以从这里提取键值；若是$emit事件，则value等于event
- `target`： 当前项组件(若是`数组事件`，这个为`null`)
- `pathKey`： 需要检查的组件的路径
- `idxChain`： 需要检查的组件所要数组所组成的id 如: 1,2
- `index`：组件处于数组的子节点(非孙子)时的索引，其余的返回-1
> 注：[数组事件](./array.html#数组事件)是没有target信息的
