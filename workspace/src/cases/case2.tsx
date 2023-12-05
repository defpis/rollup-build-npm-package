import { useCreateForm } from "@ecom-zform/react";

import { Form, FormItem, FormList } from "pkg04";

import { Form as ArcoForm, Button, Input, Grid } from "@arco-design/web-react";
import { IconDelete, IconPlus } from "@arco-design/web-react/icon";

export function Case2(props: any) {
  const form1 = useCreateForm<{
    users: Array<{
      username: string;
      password: string;
    }>;
  }>({ initialValue: { users: [{ username: "", password: "" }] } });

  const [form2] = ArcoForm.useForm();

  return (
    <>
      <div className="split-view">
        <Form>
          <FormList form={form1.na("users")}>
            {(fields) => {
              return (
                <>
                  {fields.map((field) => {
                    return (
                      <>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 10,
                          }}
                        >
                          <div style={{ flex: 1 }}>
                            <Grid.Row>
                              <Grid.Col span={12}>
                                <FormItem
                                  label="用户名"
                                  form={field.form.n("username")}
                                >
                                  <Input></Input>
                                </FormItem>
                              </Grid.Col>
                              <Grid.Col span={12}>
                                <FormItem
                                  label="密码"
                                  form={field.form.n("password")}
                                >
                                  <Input></Input>
                                </FormItem>
                              </Grid.Col>
                            </Grid.Row>
                          </div>
                          <div>
                            <Button
                              icon={<IconDelete />}
                              shape="circle"
                              status="danger"
                              disabled={fields.length === 1}
                              onClick={() => field.options.remove()}
                            ></Button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                  <div style={{ textAlign: "center" }}>
                    <Button
                      type="default"
                      shape="circle"
                      icon={<IconPlus />}
                      onClick={() =>
                        form1.na("users").push({
                          username: "",
                          password: "",
                        })
                      }
                    ></Button>
                  </div>
                </>
              );
            }}
          </FormList>
        </Form>
        <ArcoForm
          form={form2}
          initialValues={{ users: [{ username: "", password: "" }] }}
        >
          <ArcoForm.List field="users">
            {(fields, { add, remove }) => {
              return (
                <>
                  {fields.map((field, index) => {
                    return (
                      <>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 10,
                          }}
                        >
                          <div style={{ flex: 1 }}>
                            <Grid.Row>
                              <Grid.Col span={12}>
                                <ArcoForm.Item
                                  label="用户名"
                                  field={field.field + ".username"}
                                >
                                  <Input></Input>
                                </ArcoForm.Item>
                              </Grid.Col>
                              <Grid.Col span={12}>
                                <ArcoForm.Item
                                  label="密码"
                                  field={field.field + ".password"}
                                >
                                  <Input></Input>
                                </ArcoForm.Item>
                              </Grid.Col>
                            </Grid.Row>
                          </div>
                          <div>
                            <Button
                              icon={<IconDelete />}
                              shape="circle"
                              status="danger"
                              disabled={fields.length === 1}
                              onClick={() => remove(index)}
                            ></Button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                  <div style={{ textAlign: "center" }}>
                    <Button
                      type="default"
                      shape="circle"
                      icon={<IconPlus />}
                      onClick={() => add()}
                    ></Button>
                  </div>
                </>
              );
            }}
          </ArcoForm.List>
        </ArcoForm>
      </div>
    </>
  );
}
