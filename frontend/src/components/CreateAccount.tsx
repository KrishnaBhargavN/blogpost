import { Link } from "react-router-dom";
import InputBox from "./InputBox";
import Button from "./Button";
import { SignupType } from "blogpost-common";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const [signup, setSignup] = useState<SignupType>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const submitSignup = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        signup
      );
      const jwt = response.data.token;
      localStorage.setItem("jwt", jwt);
      navigate("/blogs");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex  justify-center">
      <div className="self-center">
        <div className="flex flex-col">
          <div className="text-3xl basis-16   flex flex-col justify-center px-10 py-2">
            <div className="text-center font-bold">Create an Account</div>
          </div>
          <div className="text-base text-slate-400 text-center mb-4">
            Already have an account?{" "}
            <Link className="underline" to={"/signin"}>
              Login
            </Link>
          </div>
          <InputBox
            type="text"
            placeholder="Name"
            value=""
            onChange={(e) => {
              setSignup({ ...signup, name: e.target.value });
            }}
          />
          <InputBox
            type="email"
            placeholder="Email"
            value=""
            onChange={(e) => {
              setSignup({ ...signup, email: e.target.value });
            }}
          />
          <InputBox
            type="password"
            placeholder="Password"
            value=""
            onChange={(e) => {
              setSignup({ ...signup, password: e.target.value });
            }}
          />
          <div className="flex justify-center mt-4 w-full">
            <div className="w-full max-w-md">
              {" "}
              {/* Optionally, you can add max-width to control the width */}
              <Button name="Signup" onClick={submitSignup} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateAccount;
