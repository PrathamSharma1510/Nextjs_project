"use client";
import React, { useState } from "react";
import { axios } from "axios";
import Link from "next/link";

const login = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};
  return (
    <>
      <div className="container flex flex-col items-center justify-center py-2">
        <h1>Login</h1>
        <hr />
        <label htmlFor="email">email</label>
        <input
          className="form-control p-2 form"
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={(e) => setuser({ ...user, email: e.target.value })}
        ></input>
        <hr />
        <label htmlFor="password">password</label>
        <input
          className="form-control p-2 form"
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={(e) => setuser({ ...user, password: e.target.value })}
        ></input>
        <hr />
        <button className="p-2 border rounded" onClick={onLogin}>
          Login 
        </button>

        <Link href="/signup">Visit Signup page</Link>
      </div>
    </>
  );
};

export default login;
