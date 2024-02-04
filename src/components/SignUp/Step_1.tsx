import Button from "@/components/Common/Button";
import Input from "@/components/Common/Input";
import Label from "@/components/Common/Label";
import { SginUpStep1 } from "@/types/account.type";
import { InputGroup, InputItem } from "@/types/input.type";
import { useEffect } from "react";
import { FieldValues, UseFormReturn, useForm, useWatch } from "react-hook-form";
type Props = {
  next: (data: SginUpStep1) => void;
};
const Step_2 = ({ next }: Props) => {
  const signupInputs: InputGroup[] = [
    {
      id: "email",
      labelText: "電子信箱",
      input: [
        {
          id: "email",
          type: "email",
          placeholder: "hello@exsample.com",
          defaultValue: "",
          rules: {
            required: {
              value: true,
              message: "電子信箱為必填欄位",
            },
            pattern: {
              value: /^\S+@\S+$/i,
              message: "電子信箱格式錯誤",
            },
          },
        },
      ],
    },
    {
      id: "password",
      labelText: "密碼",
      input: [
        {
          id: "password",
          type: "password",
          placeholder: "請輸入密碼",
          defaultValue: "",
          // 英數, 8以上
          rules: {
            required: {
              value: true,
              message: "密碼為必填欄位",
            },
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              message: "密碼長度應至少8 碼以上，並且混合英文字母、數字",
            },
          },
        },
      ],
    },
    {
      id: "confirm",
      labelText: "確認密碼",
      input: [
        {
          id: "confirm",
          type: "password",
          placeholder: "請再輸入一次密碼",
          defaultValue: "",
          // 英數, 8以上
          rules: {
            required: {
              value: true,
              message: "密碼為必填欄位",
            },
            validate: (value) =>
              value === watchForm.password || "確認密碼與密碼不同",
          },
        },
      ],
    },
  ];
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  }: UseFormReturn = useForm({
    mode: "onChange",
  });
  const onSubmit = (data: FieldValues) => {
    const { email, password } = data;
    next({ email, password });
  };
  const watchForm = useWatch({
    control,
  });
  useEffect(() => {}, [errors]);
  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-[40px]">
          {signupInputs.map((group) => {
            return (
              <div key={group.id} className="mb-[20px]">
                <Label id={group.id} labelText={group.labelText}></Label>
                {group.input.map((input) => {
                  return (
                    <Input
                      key={input.id}
                      type={input.type}
                      id={input.id}
                      name={input.id}
                      register={register}
                      rules={input.rules}
                      placeholder={(input as InputItem).placeholder}
                      error={errors[input.id]?.message?.toString()}
                      defaultValue={input.defaultValue}
                      inputClass="!w-full"
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
        <Button
          title="下一步"
          buttonStyle="primary"
          defaultClass="w-full h-[56px] mb-[40px]"
          buttonType="submit"
          disabled={
            Object.keys(errors).length !== 0 ||
            ["email", "password", "confirm"].some(
              (item: keyof typeof watchForm) => !watchForm[item]
            )
          }
        />
      </form>
    </>
  );
};
export default Step_2;
