"use client";
import React, { useState } from "react";
import { axios } from "axios";
import Link from "next/link";

const signup = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};
  return (
    <>
      <div className="container flex flex-col items-center justify-center py-2">
        <h1>Signup</h1>
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
        <label htmlFor="username">username</label>
        <input
          className="form-control p-2 form"
          type="username"
          name="username"
          id="username"
          value={user.username}
          onChange={(e) => setuser({ ...user, username: e.target.value })}
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
        <button className="p-2 border rounded" onClick={onSignup}>
          Sign UP
        </button>

        <Link href="/login">Visit Login page</Link>
      </div>
    </>
  );
};

export default signup;
