import signUp from "@/assets/images/desktop/register.png";
import logo_white from "@/assets/images/logo_white.svg";
import Button from "@/components/Common/Button";
import Input from "@/components/Common/Input";
import Label from "@/components/Common/Label";
import { InputSetting } from "@/types/input.type";
import axios from "axios";
import clsx from "clsx";
import { useEffect } from "react";
import { FieldValues, UseFormReturn, useForm, useWatch } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const loginInput: InputSetting[] = [
    {
      id: "email",
      labelText: "電子信箱",
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
    {
      id: "password",
      labelText: "密碼",
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
  ];
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
  }: UseFormReturn = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: FieldValues) => {
    const { email, password } = data;
    axios
      .post("https://freyja-t9uu.onrender.com/api/v1/user/login", {
        email,
        password,
      })
      .then(() => {
        alert("成功登入");
      })
      .catch((err) => {
        setError("email", {
          type: "custom",
          message: err.response.data.message,
        });
      });
  };
  const watchForm = useWatch({
    control,
  });
  useEffect(() => {}, [errors]);

  return (
    <>
      <div className="relative">
        <header className="absolute w-full top-0 px-[80px] py-[16px] md:py-[24px] bg-neutral_bg">
          <img
            src={logo_white}
            className="w-[109px] h-[40px] md:w-[196px] md:h-[72px]"
          />
        </header>
        <div className="lg:grid lg:grid-cols-2">
          <img
            src={signUp}
            className={clsx(
              "hidden lg:block",
              "min-h-[900px] max-h-[1087px]",
              "object-cover"
            )}
          />
          <div
            className={clsx(
              "md:min-w-[500px] w-full min-h-screen h-full",
              "flex justify-center items-center",
              "px-[20px]"
            )}
          >
            <div className="w-full max-w-[416px] text-neutral_0 py-[80px] md:py-[120px]">
              <p className="title text-primary_100">享樂酒店，誠摯歡迎</p>
              <h2 className="h1 mb-[40px]">立即開始旅程</h2>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                {loginInput.map((input) => {
                  return (
                    <div key={input.id} className="mb-[20px]">
                      <Label id={input.id} labelText={input.labelText}></Label>
                      <Input
                        type={input.type}
                        id={input.id}
                        name={input.id}
                        register={register}
                        rules={input.rules}
                        placeholder={input.placeholder}
                        error={errors[input.id]?.message?.toString()}
                        defaultValue={input.defaultValue}
                        inputClass="!w-full"
                      />
                    </div>
                  );
                })}
                <div className="flex items-center justify-between mb-[40px]">
                  <div className="flex items-center">
                    <Input
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      inputClass="w-[24px] !h-[24px] mb-0"
                      register={register}
                      defaultValue={false}
                    />
                    <Label
                      id="rememberMe"
                      labelText="記住帳號"
                      className="mb-0 ml-[8px]"
                    ></Label>
                  </div>
                  <Button
                    title="忘記密碼?"
                    buttonStyle="ghost"
                    defaultClass="underline !text-primary_100 hover:!text-neutral_0"
                  />
                </div>
                <Button
                  title="會員登入"
                  buttonStyle="primary"
                  defaultClass="w-full h-[56px] mb-[40px]"
                  buttonType="submit"
                  disabled={
                    Object.keys(errors).length !== 0 ||
                    ["email", "password"].some(
                      (item: keyof typeof watchForm) => !watchForm[item]
                    )
                  }
                />
                <span className="flex">
                  沒有會員嗎？
                  <Button
                    title=""
                    buttonStyle="ghost"
                    defaultClass="underline !text-primary_100 hover:!text-neutral_0"
                  >
                    <Link to="/sign_up" className="w-full h-full">
                      前往註冊
                    </Link>
                  </Button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
