"use client";

import React from "react";
import { registerNewUser } from "@/ServerActions/UserRegister";
import { useForm, SubmitHandler } from "react-hook-form";
import { registerInputType } from "@/types/ReactHookForm/register";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerInputType>();

  const onSubmit: SubmitHandler<registerInputType> = async (data) => {
    await registerNewUser(data.username, data.password);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        type="text"
        defaultValue="test"
        {...register("username", { required: true })}
        className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        type="password"
        {...register("password", { required: true })}
        className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      {/* errors will return when field validation fails  */}
      {errors.username && <span>This field is required</span>}

      <input
        type="submit"
        className="mt-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      />
    </form>
  );
};

export default Register;
