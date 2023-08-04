"use client";

import { logIn, logOut, toggleModerator } from "@/redux/feature/authSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function LogIn() {
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

  const onClickLogIn = () => {
    dispatch(logIn(userName));
  };
  const onClickLogOut = () => {
    dispatch(logOut());
  };
  const onClickToggle = () => {
    dispatch(toggleModerator());
  };
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

      {isAuth && (
        <button
          onClick={onClickToggle}
          className="px-4 py-2 rounded-full bg-teal-600 text-white"
        >
          Toggle Moderator
        </button>
      )}
    </div>
  );
}
