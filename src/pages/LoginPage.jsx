import { useState } from "react";
import InputForm from "../compomemts/form/InputForm";
import { schemaLogin } from "../validator/schemalogin";
import { useNavigate } from "react-router";
import TodolistPage from "./TodolistPage";
import * as Yup from "yup";
import todoApi from "../api/todoApi";
import { toast } from "react-toastify";

const initailInput = {
  username: "",
  password: "",
};

function LoginPage() {
  const [input, setInput] = useState(initailInput);
  const [inputError, setInputError] = useState(initailInput);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const hdlChange = (e) => {
    const { id, value } = e.target;
    setInput((prev) => ({ ...prev, [id]: value }));
    setInputError((prev) => ({ ...prev, [id]: "" }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      //validator
      schemaLogin.validateSync(input, { abortEarly: false });
      console.log("input", input);

      //api
      const res = await todoApi.login(input);
      setInput(initailInput);
      console.log("res.data", res.data);

      toast.success("Login Success !")

      navigate("/todolist");
    } catch (error) {
      console.log(error);
      if (error instanceof Yup.ValidationError) {
        const err = error.inner.reduce((acc, cur) => {
          acc[cur.path] = cur.message;
          return acc;
        }, {});

        toast.error("Login Fail !")
        setInputError(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-gray-700">
      <div>
        <div className="border flex items-center bg-gray-500 w-120 h-80 rounded-xl justify-center gap-10">
          <form className="w-90" onSubmit={hdlSubmit}>
            <div>
              <p className="text-4xl mb-4 text-white font-bold">Welcome</p>
            </div>
            <div className="flex flex-col gap-6">
              <InputForm
                hdlChaneg={hdlChange}
                id="username"
                placeholder="Email"
                error={inputError.username}
                value={input.username}
              />
              <InputForm
                hdlChaneg={hdlChange}
                id="password"
                placeholder="Password"
                error={inputError.password}
                value={input.password}
                type="password"
              />
            </div>
            <button 
            isLoading={isLoading}>
              <></>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
