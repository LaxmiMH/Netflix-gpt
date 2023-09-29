import React, { useRef, useState } from "react";
import Header from "./Header";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import { validate } from "../utils/validate";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleValidation = () => {
    console.log(email.current.value, password.current.value);

    //validate form data
    const message = validate(email.current.value, password.current.value);
    console.log(message);
    setErrMsg(message);

    //sign in sign up form
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="baground img"
        />
      </div>

      <Form className="w-4/12 mx-auto right-0 left-0 my-24 p-6   absolute bg-black text-white rounded-md bg-opacity-80">
        <h1 className="font-semibold text-3xl m-2 p-2">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        {!isLogin && (
          <FormGroup className="m-2 p-2">
            <input
              id="name"
              name="name"
              placeholder="Fullname"
              type="text"
              className="p-4 text-base w-full rounded bg-gray-700"
              ref={name}
            />
          </FormGroup>
        )}
        <FormGroup className="m-2 p-2">
          <input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
            className="p-4 text-base w-full rounded bg-gray-700"
            ref={email}
          />
        </FormGroup>{" "}
        <FormGroup className="m-2 p-2">
          <input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            className="p-4 text-base w-full rounded bg-gray-700"
            ref={password}
          />
        </FormGroup>{" "}
        <p className="text-yellow-600 ml-4 text-sm font-bold ">{errMsg}</p>
        <Button
          className="m-4 p-4 mt-6  w-11/12  rounded text-sm font-bold bg-red-700"
          onClick={handleValidation}
        >
          {isLogin ? "Sign In" : "Sign Up"}
        </Button>
        <div className="m-3 p-4">
          {isLogin ? "New to Netflix? " : "Already registerd? "}
          <span className="cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
            {!isLogin ? "Sign In" : "Sign Up"} now
          </span>
          .
        </div>
      </Form>
    </div>
  );
};

export default Login;
