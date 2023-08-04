"use client";

import { useAppSelector } from "@/redux/store";
import LogIn from "./LogIn";
import { useSelector } from "react-redux";
export default function Home() {
  const user = useAppSelector((state) => state.authReducer.value.username);
  const isModerator = useAppSelector(
    (state) => state.authReducer.value.isModerator
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LogIn />

      <h2 className=" text-2xl font-semibold text-blue-500 mt-8">
        UserName :{" "}
        <span className="ext-2xl font-semibold text-sky-800">{user}</span>
      </h2>

      {isModerator && (
        <h2 className="text-violet-600">This user is a Moderator.</h2>
      )}
    </main>
  );
}
