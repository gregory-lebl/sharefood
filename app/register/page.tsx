"use client";

import React from "react";
import { MongoClient } from "mongodb";
import { registerNewUser } from "@/ServerActions/UserRegister";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    registerNewUser(data.username, data.password);
  };

  console.log(watch("username")); // watch input value by passing the name of it

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
