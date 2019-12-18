# 描述/desc

字段：`desc`<br/>
值类型有：
- `string`： 描述的内容；支持[动态解析](./com-standard.md)
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
        // name: "默认小花"
      },
      formSchema: {

        // 写法一
        name: {
          label: "广告名称",
          component: "el-input",
          value: "首页位置",
          desc: "一般的描述方法"  // 也可以直接写动态解析，如es语句
        },

        isJson: {
          label: "传输格式",
          component: "el-switch",
          value: true
        },

        // 写法二
        data: {
          label: "传输数据",
          component: "el-input",
          value: "",
          desc: {
            // hidden: false,   // 控制desc是否隐藏，支持动态解析
            text: "es: {{$root}}.isJson ? 'JSON格式' : 'XML格式'" // es语句
          }
        },

        // 写法三：组件写法
        note: {
          label: "备注",
          component: "el-input",
          value: "",
          desc: {
            hidden: "es: !{{$root}}.isJson", // es语句, 控制desc是否隐藏
            name: desc, // 自定义组件
            props: {}
          }
        }
      }
    };
  }
```

