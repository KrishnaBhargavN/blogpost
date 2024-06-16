import { Link } from "react-router-dom";
import InputBox from "./InputBox";
import Button from "./Button";
import { SigninType } from "blogpost-common";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

function LogintoAccount() {
  const [signin, setSignin] = useState<SigninType>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const submitSignin = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/login`,
        signin
      );
      localStorage.setItem("jwt", response.data.token);
      navigate("/blog");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex  justify-center">
      <div className="self-center">
        <div className="flex flex-col">
          <div className="text-3xl basis-16   flex flex-col justify-center px-28 py-2">
            <div className="text-center font-bold">Sign In</div>
          </div>
          <div className="text-base text-slate-400 text-center mb-4">
            Don't have an account?{" "}
            <Link className="underline" to={"/signup"}>
              Signup
            </Link>
          </div>
          <InputBox
            type="email"
            placeholder="Email"
            value=""
            onChange={(e) => {
              setSignin({ ...signin, email: e.target.value });
            }}
          />
          <InputBox
            type="password"
            placeholder="Password"
            value=""
            onChange={(e) => {
              setSignin({ ...signin, password: e.target.value });
            }}
          />
          <div className="flex justify-center mt-4 w-full">
            <div className="w-full max-w-md">
              {" "}
              {/* Optionally, you can add max-width to control the width */}
              <Button name="Signin" onClick={submitSignin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LogintoAccount;
