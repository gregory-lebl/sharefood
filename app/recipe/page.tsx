"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { recipeInputType } from "@/types/ReactHookForm/recipe";
import { newRecipe } from "@/ServerActions/Recipe";

const Recipe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<recipeInputType>();

  const onSubmit: SubmitHandler<recipeInputType> = async (data) => {
    newRecipe(data.name, data.description, data.ingredients, data.steps);
  };

  return (
    <div>
      <h1 className="text-xl mb-4">Add a recipe</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/2">
        <input
          type="text"
          defaultValue="test"
          {...register("name", { required: true })}
          className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        {errors.name && (
          <span className="text-red-500">Le nom de la recette est requis</span>
        )}
        <input
          type="text"
          {...register("description", { required: true })}
          className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        {errors.description && (
          <span className="text-red-500">
            La description de la recette est requise
          </span>
        )}
        <input
          type="text"
          {...register("ingredients", { required: true })}
          className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        {errors.ingredients && (
          <span className="text-red-500">
            Les ingrédients de la recette sont requis
          </span>
        )}
        <input
          type="textArea"
          {...register("steps", { required: true })}
          className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        {errors.steps && (
          <span className="text-red-500">
            Les étapes de la recette sont requises
          </span>
        )}
        <input
          type="submit"
          className="mt-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        />
      </form>
    </div>
  );
};

export default Recipe;
