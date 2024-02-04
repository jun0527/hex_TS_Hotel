import Button from "@/components/Common/Button";
import Input from "@/components/Common/Input";
import Label from "@/components/Common/Label";
import Select from "@/components/Common/Select";
import { zipcode } from "@/data/zipcode";
import { SginUpStep2 } from "@/types/account.type";
import { InputGroup, InputItem, SelectItem } from "@/types/input.type";
import { useEffect, useState } from "react";
import { FieldValues, UseFormReturn, useForm, useWatch } from "react-hook-form";
import { Link } from "react-router-dom";
type Props = {
  simbut: (data: SginUpStep2) => void;
};
const Step_2 = ({ simbut }: Props) => {
  const allDataName = [
    "address_city",
    "address_detail",
    "address_district",
    "birthday_date",
    "birthday_month",
    "birthday_year",
    "isAgree",
    "phone",
    "username",
  ];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  }: UseFormReturn = useForm({
    mode: "onChange",
  });
  const today = new Date();
  const watchForm = useWatch({
    control,
  });
  const getDateList = (type: string) => {
    const selectTotalDay = new Date(
      watchForm.birthday_year || new Date().getFullYear(),
      watchForm.birthday_month || new Date().getMonth() + 1,
      0
    ).getDate();
    const list = [];
    switch (type) {
      case "year":
        for (let i = today.getFullYear(); i > today.getFullYear() - 100; i--) {
          list.push(i);
        }
        break;
      case "month":
        for (let i = 1; i <= 12; i++) {
          list.push(i);
        }
        break;
      case "date":
        for (let i = 1; i <= selectTotalDay; i++) {
          list.push(i);
        }
        break;
    }
    return list;
  };
  const getDistrictList = () => {
    return Object.keys(zipcode[watchForm.address_city || "台北市"]);
  };
  const [dayOption, setDayOption] = useState(getDateList("date"));
  const [districtOption, setDistrictOption] = useState(getDistrictList());
  const signupInputs: InputGroup[] = [
    {
      id: "username",
      labelText: "姓名",
      input: [
        {
          id: "username",
          type: "text",
          placeholder: "請輸入姓名",
          defaultValue: "",
          rules: {
            required: {
              value: true,
              message: "姓名為必填欄位",
            },
          },
        },
      ],
    },
    {
      id: "phone",
      labelText: "手機號碼",
      input: [
        {
          id: "phone",
          type: "tel",
          placeholder: "請輸入手機號碼",
          defaultValue: "",
          rules: {
            required: {
              value: true,
              message: "手機號碼為必填欄位",
            },
            pattern: {
              value: /^09\d{8}$/,
              message: "手機號碼格式錯誤",
            },
          },
        },
      ],
    },
    {
      id: "birthday",
      labelText: "生日",
      class: "grid grid-cols-3 gap-[8px]",
      input: [
        {
          id: "birthday_year",
          type: "select",
          defaultValue: 2024,
          options: getDateList("year"),
        },
        {
          id: "birthday_month",
          type: "select",
          defaultValue: new Date().getMonth() + 1,
          options: getDateList("month"),
        },
        {
          id: "birthday_date",
          type: "select",
          defaultValue: new Date().getDate(),
          options: dayOption,
        },
      ],
    },
    {
      id: "address",
      labelText: "地址",
      class: "grid grid-cols-2 gap-[8px]",
      input: [
        {
          id: "address_city",
          type: "select",
          defaultValue: "台北市",
          options: Object.keys(zipcode),
        },
        {
          id: "address_district",
          type: "select",
          defaultValue: new Date().getMonth() + 1,
          options: districtOption,
        },
        {
          id: "address_detail",
          type: "text",
          placeholder: "請輸入詳細地址",
          defaultValue: "",
          class: "col-span-2",
          rules: {
            required: {
              value: true,
              message: "地址為必填欄位",
            },
          },
        },
      ],
    },
  ];
  const onSubmit = (data: FieldValues) => {
    const birthday = `${data.birthday_year}/${data.birthday_month}/${data.birthday_date}`;
    const address = {
      zipcode: parseInt(zipcode[data.address_city][data.address_district]),
      detail: `${data.address_city}${data.address_district}${data.address_detail}`,
    };
    const { username, phone } = data;

    simbut({ name: username, phone, address, birthday });
  };

  useEffect(() => {}, [watchForm]);
  useEffect(() => {
    setDayOption(getDateList("date"));
  }, [watchForm.birthday_month, watchForm.birthday_year]);
  useEffect(() => {
    setDistrictOption(getDistrictList());
  }, [watchForm.address_city]);
  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        {signupInputs.map((group) => {
          return (
            <div key={group.id} className="mb-[16px]">
              <Label id={group.id} labelText={group.labelText}></Label>
              <div className={group.class}>
                {group.input.map((input) => {
                  return input.type !== "select" ? (
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
                      class={input.class}
                    />
                  ) : (
                    <Select
                      key={input.id}
                      id={input.id}
                      name={input.id}
                      register={register}
                      defaultValue={input.defaultValue}
                      class={input.class}
                      options={(input as SelectItem).options}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="flex items-center mb-[40px]">
          <Input
            type="checkbox"
            id="isAgree"
            name="isAgree"
            inputClass="w-[24px] !h-[24px] mb-0"
            register={register}
            defaultValue={false}
          />
          <Label
            id="isAgree"
            labelText="我已閱讀並同意本網站個資使用規範"
            className="!mb-0 ml-[8px]"
          ></Label>
        </div>
        <Button
          title="會員登入"
          buttonStyle="primary"
          defaultClass="w-full h-[56px] mb-[40px]"
          buttonType="submit"
          disabled={
            Object.keys(errors).length !== 0 ||
            watchForm.length === 0 ||
            allDataName.some((item: keyof typeof watchForm) => !watchForm[item])
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
    </>
  );
};
export default Step_2;
