import React, { useState } from "react";
import InputForm from "../compomemts/form/InputForm";
import { useNavigate } from "react-router";
import * as Yup from 'yup'
import { schemaRegister } from "../validator/schemaRegister";
import todoApi from "../api/todoApi";
import { Loader, SquarePen } from "lucide-react";


const initailInput = {
  username: "",
  password: "",
  confirmPassword: "",
};

function RegisterPage() {
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
        schemaRegister.validateSync(input,{abortEarly:false})
        console.log("input", input);
  
        //api
        const reg = await todoApi.register(input);
        setInput(initailInput);
        console.log("res.data", reg.data);
  
        // toast.success("Login Success !")
  
        navigate("/");
      } catch (error) {
        console.log(error);
        if (error instanceof Yup.ValidationError) {
          const err = error.inner.reduce((acc, cur) => {
            acc[cur.path] = cur.message;
            return acc;
          }, {});
  
          // toast.error("Login Fail !")
          setInputError(err);
        }
      } 
    };


  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-gray-700">
      <div className="border flex items-center bg-gray-500 w-120 h-80 rounded-xl justify-center gap-10">
        <form>
          <div>
            <p className="text-4xl mb-4 text-white font-bold">Register</p>
          </div>
          <div className="flex flex-col gap-6" onSubmit={hdlSubmit}>
            <InputForm
              hdlChaneg={hdlChange}
              id="username"
              placeholder="Username"
              error={inputError.username}
              value={input.username}
            />
            <InputForm
              hdlChaneg={hdlChange}
              id="password"
              placeholder="password"
              error={inputError.password}
              value={input.password}
              type="password"
            />
            <InputForm
              hdlChaneg={hdlChange}
              id="confirmPassword"
              placeholder="Confirm Password"
              error={inputError.confirmPassword}
              value={input.confirmPassword}
              type="password"
            />
          </div>
           <button className="w-full flex justify-center gap-2 py-2 mt-2 rounded-xl bg-gray-700 text-white cursor-pointer hover:bg-gray-800 duration-300">
            {isLoading ? (
            <>
              <Loader className="w-5 h-5 animate-spin" strokeWidth={1.5} />
              <span>...Loading</span>
            </>
          ) : (
            <>
              <SquarePen className="w-5 h-5"strokeWidth={1.5} />
              <span>Submit</span>
            </>
          )}
            </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
