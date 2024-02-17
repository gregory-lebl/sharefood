"use server";

import { MongoClient } from "mongodb";
import { redirect } from "next/navigation";

export async function newRecipe(
  name: string,
  description: string,
  ingredients: string,
  steps: string
) {
  const stepsArray = steps.split(",");
  const ingredientsArray = ingredients.split(",");

  const client = new MongoClient(process.env.MONGODB_URI as string);
  await client.connect();

  const db = client.db("sharefood");
  const collection = db.collection("recipe");
  const user = await collection.insertOne({
    name: name,
    description: description,
    ingredients: ingredientsArray,
    steps: stepsArray,
  });

  if (user) {
    redirect("/");
  }
}
