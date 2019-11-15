# Form 表单

简单的表单组件。

## 基础用法

基础的表单组件。

:::demo

```html
<m-form labelWidth="80" labelPosition="top">
  <m-form-item label="实例名称">
    <m-input />
  </m-form-item>
  <m-form-item label="地址">
    <m-input />
  </m-form-item>
</m-form>
```

:::

## 表单标签居左对齐

表单标签默认居右对齐，也可以设置居左对齐。

:::demo 通过设置`labelAlign`来设置标签的对齐方式。

```html
<m-form labelPosition="left">
  <m-form-item label="实例名称" required>
    <m-input />
  </m-form-item>
  <m-form-item label="地址">
    <m-input />
  </m-form-item>
</m-form>
```

:::

## 表单验证

:::demo

```html
<template>
  <m-form
    ref="formValidate"
    :model="formValidate"
    :rules="ruleValidate"
    :label-width="80"
  >
    <m-form-item label="Name" prop="name">
      <m-input
        v-model="formValidate.name"
        placeholder="Enter your name"
      ></m-input>
    </m-form-item>
    <m-form-item label="E-mail" prop="mail">
      <m-input
        v-model="formValidate.mail"
        placeholder="Enter your e-mail"
      ></m-input>
    </m-form-item>
    <!-- <m-form-item label="City" prop="city">
      <select v-model="formValidate.city" placeholder="Select your city">
        <option value="beijing">New York</option>
        <option value="shanghai">London</option>
        <option value="shenzhen">Sydney</option>
      </select>
    </m-form-item> -->
    <!-- <m-form-item label="Date">
            <Row>
                <Col span="11">
                    <m-form-item prop="date">
                        <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                    </m-form-item>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                    <m-form-item prop="time">
                        <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                    </m-form-item>
                </Col>
            </Row>
        </m-form-item>
        <m-form-item label="Gender" prop="gender">
            <RadioGroup v-model="formValidate.gender">
                <Radio label="male">Male</Radio>
                <Radio label="female">Female</Radio>
            </RadioGroup>
        </m-form-item>
        <m-form-item label="Hobby" prop="interest">
            <CheckboxGroup v-model="formValidate.interest">
                <Checkbox label="Eat"></Checkbox>
                <Checkbox label="Sleep"></Checkbox>
                <Checkbox label="Run"></Checkbox>
                <Checkbox label="Movie"></Checkbox>
            </CheckboxGroup>
        </m-form-item> -->
    <m-form-item label="Desc" prop="desc">
      <m-input
        v-model="formValidate.desc"
        type="textarea"
        :autosize="{minRows: 2,maxRows: 5}"
        placeholder="Enter something..."
      ></m-input>
    </m-form-item>
    <m-form-item>
      <m-button type="primary" @click="handleSubmit('formValidate')">
        Submit
      </m-button>
      <m-button @click="handleReset('formValidate')" style="margin-left: 8px">
        Reset
      </m-button>
    </m-form-item>
  </m-form>
</template>
<script>
  export default {
    data() {
      return {
        formValidate: {
          name: "",
          mail: "",
          // city: "",
          // gender: "",
          // interest: [],
          // date: "",
          // time: "",
          desc: ""
        },
        ruleValidate: {
          name: [
            {
              required: true,
              message: "The name cannot be empty",
              trigger: "blur"
            }
          ],
          mail: [
            {
              required: true,
              message: "Mailbox cannot be empty",
              trigger: "blur"
            },
            {
              type: "email",
              message: "Incorrect email format",
              trigger: "blur"
            }
          ],
          // city: [
          //   {
          //     required: true,
          //     message: "Please select the city",
          //     trigger: "change"
          //   }
          // ],
          // gender: [
          //   {
          //     required: true,
          //     message: "Please select gender",
          //     trigger: "change"
          //   }
          // ],
          // interest: [
          //   {
          //     required: true,
          //     type: "array",
          //     min: 1,
          //     message: "Choose at least one hobby",
          //     trigger: "change"
          //   },
          //   {
          //     type: "array",
          //     max: 2,
          //     message: "Choose two hobbies at best",
          //     trigger: "change"
          //   }
          // ],
          // date: [
          //   {
          //     required: true,
          //     type: "date",
          //     message: "Please select the date",
          //     trigger: "change"
          //   }
          // ],
          // time: [
          //   {
          //     required: true,
          //     type: "string",
          //     message: "Please select time",
          //     trigger: "change"
          //   }
          // ],
          desc: [
            {
              required: true,
              message: "Please enter a personal introduction",
              trigger: "blur"
            },
            {
              type: "string",
              min: 20,
              message: "Introduce no less than 20 words",
              trigger: "blur"
            }
          ]
        }
      };
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate(valid => {
          if (valid) {
            this.$Message.success("Success!");
          } else {
            this.$Message.error("Fail!");
          }
        });
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      }
    }
  };
</script>
```

:::

## MForm Attributes

| 参数          | 说明         | 类型   | 可选值             | 默认值 |
| ------------- | ------------ | ------ | ------------------ | ------ |
| labelWidth    | 标签大小     | string | -                  | -      |
| labelPosition | 标签对齐方式 | string | left / right / top | right  |
| model         | 表单数据     | object | -                  | -      |
| rules         | 表单验证规则 | object | -                  | -      |

## MForm Slots

| name | 说明       |
| ---- | ---------- |
| ——   | 表单的内容 |

## MForm-Item Attributes

| 参数       | 说明     | 类型    | 可选值 | 默认值 |
| ---------- | -------- | ------- | ------ | ------ |
| label      | 标签     | string  | —      | —      |
| required   | 是否必须 | boolean | —      | false  |
| prop       | 表单验证 | string  | -      | -      |
| labelWidth | 标签大小 | string  | -      | -      |

## MForm-Item Slots

| name | 说明         |
| ---- | ------------ |
| ——   | 表单项的内容 |
