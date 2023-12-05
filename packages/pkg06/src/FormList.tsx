import React from "react";
import { IFormListProps, useFormList } from "@ecom-zform/react";

export function FormList<ArrayItem>({
  form,
  children,
}: IFormListProps<ArrayItem>) {
  const formList = useFormList(form);

  return (
    <>
      {children(
        formList.map((fc, i) => ({
          form: fc,
          options: {
            moveTo: (toIndex: number) => {
              form.move(i, toIndex);
            },
            remove: () => {
              form.remove(i);
            },
          },
          key: fc.uuid,
        }))
      )}
    </>
  );
}
