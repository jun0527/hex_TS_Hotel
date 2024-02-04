import signUp from "@/assets/images/desktop/register.png";
import logo_white from "@/assets/images/logo_white.svg";
import Button from "@/components/Common/Button";
import Step_1 from "@/components/SignUp/Step_1";
import Step_2 from "@/components/SignUp/Step_2";
import { SginUpStep1, SginUpStep2 } from "@/types/account.type";
import axios from "axios";
import clsx from "clsx";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    address: {
      zipcode: null,
      detail: "",
    },
  });
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const next = (data: SginUpStep1) => {
    setSignUpData(Object.assign(signUpData, data));

    setStep(2);
  };
  const simbut = (data: SginUpStep2) => {
    setSignUpData(Object.assign(signUpData, data));
    axios
      .post("https://freyja-t9uu.onrender.com/api/v1/user/signup", signUpData)
      .then(() => {
        alert("註冊成功");
        navigate("/login");
      })
      .catch((err) => {
        alert(err.response.data.message);
        navigate("/");
      });
  };
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
              <h2 className="h1 mb-[40px]">立即註冊</h2>
              {step === 1 ? <Step_1 next={next} /> : <Step_2 simbut={simbut} />}
              <span className="flex">
                已經有會員了嗎？
                <Button
                  title=""
                  buttonStyle="ghost"
                  defaultClass="underline !text-primary_100 hover:!text-neutral_0"
                >
                  <Link to="/login" className="w-full h-full">
                    立即登入
                  </Link>
                </Button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
