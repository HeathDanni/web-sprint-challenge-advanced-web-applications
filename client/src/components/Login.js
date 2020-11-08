import React, {useState} from "react";

const Login = () => {
  
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const onChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <br></br>
        <br></br>
        <label htmlFor='username'>
          Username:
          <input
            name="username"
            id="username"
          ></input>
        </label>
        <label htmlFor="password">
          Password
          <input
            name="password"
            id="password"
          ></input>
        </label>
      </form>
    </>
  );
};

export default Login;
