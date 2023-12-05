import React from "react";
import { FieldWrapper, IFieldWrapperProps } from "@ecom-zform/react";
import { Form as ArcoForm, FormItemProps } from "@arco-design/web-react";
import { get } from "lodash";

function FieldDecorator(props: any) {
  // console.log("FieldDecorator: ", props);

  const { children, error, ...rest } = props;

  return (
    <ArcoForm.Item
      validateStatus={get(
        {
          success: undefined,
          error: "error",
          warning: "warning",
        },
        error?.status
      )}
      help={
        error?.status === "error" && error?.help ? error?.help[0] : undefined
      }
      {...rest}
    >
      {children}
    </ArcoForm.Item>
  );
}

export function FormItem(
  props: React.PropsWithChildren<IFieldWrapperProps<any>> & FormItemProps
) {
  // console.log("FormItem: ", props);

  const { ...rest } = props;

  return <FieldWrapper decorator={FieldDecorator} {...rest}></FieldWrapper>;
}
