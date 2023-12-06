import { useCreateForm } from "@ecom-zform/react";

import { Form, FormItem } from "pkg04";
// const { Form, FormItem } = require("pkg04");

import { Input, Form as ArcoForm } from "@arco-design/web-react";

export function Case1(props: any) {
  const form1 = useCreateForm<{
    username: string;
    password: string;
  }>({ initialValue: { username: "", password: "" } });

  const [form2] = ArcoForm.useForm();

  return (
    <>
      <div className="split-view">
        <Form>
          <FormItem label="用户名" form={form1.n("username")} required>
            <Input></Input>
          </FormItem>
          <FormItem
            label="密码"
            form={form1.n("password")}
            rules={[{ required: true }]}
            help="请输入密码"
          >
            <Input></Input>
          </FormItem>
        </Form>
        <ArcoForm form={form2}>
          <ArcoForm.Item label="用户名" field={"username"} required>
            <Input></Input>
          </ArcoForm.Item>
          <ArcoForm.Item
            label="密码"
            field={"password"}
            rules={[{ required: true }]}
            help="请输入密码"
          >
            <Input></Input>
          </ArcoForm.Item>
        </ArcoForm>
      </div>
    </>
  );
}
