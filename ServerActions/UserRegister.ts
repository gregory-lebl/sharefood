"use server";

import { MongoClient } from "mongodb";
import { FormEvent } from "react";

export async function registerNewUser(username: string, password: string) {
  try {
    const client = new MongoClient(process.env.MONGODB_URI as string);
    await client.connect();

    const db = client.db("sharefood");
    const collection = db.collection("user");
    const user = await collection.insertOne({
      username: username,
      password: password,
    });

    console.log(user);
  } catch (error) {
    console.error(error);
  }
}
