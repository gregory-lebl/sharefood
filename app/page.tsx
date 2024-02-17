import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p className="mb-4">Welcome to the home page</p>
      <Link
        href="/register"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Register
      </Link>
      <Link
        href="/recipe"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Recipe
      </Link>
    </>
  );
}
