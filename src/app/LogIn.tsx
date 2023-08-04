"use client";

import { useState } from "react";

export default function logIn() {
  const [userName, setUserName] = useState("");
  const onClickLogIn = () => {};
  const onClickLogOut = () => {};
  const onClickToggle = () => {};
  return (
    <div className=" flex flex-col gap-2">
      <input
        className=" py-2 px-4 mb-5 outline-none rounded-lg"
        type="text"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        onClick={onClickLogIn}
        className="px-4 py-2 rounded-full bg-blue-600 text-white"
      >
        LogIn
      </button>
      <button
        onClick={onClickLogOut}
        className="px-4 py-2 rounded-full bg-red-600 text-white"
      >
        LogOut
      </button>
      <button
        onClick={onClickToggle}
        className="px-4 py-2 rounded-full bg-teal-600 text-white"
      >
        Toggle Moderator
      </button>
    </div>
  );
}
