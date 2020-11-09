import React, {useState} from "react";
import axios from 'axios';
import {useHistory} from 'react-router';

const Login = () => {

  const {push} = useHistory();
  
  const [form, setForm] = useState({
      username: "",
      password: ""}
  );

  const handleChange = (e) => {
    e.persist();
    setForm(
      {...form,
      [e.target.name]: e.target.value}
    )
  };

  //when the credentials are correct, this post request receives an JWT token and saves it to local storage

  const submitForm = (e) => { 
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);

      })
      .catch((err) => {
        console.log("sad", err)
      })
      push('/protected');
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={submitForm}>
        <br></br>
        <br></br>
        <label htmlFor='username'>
          Username:
          <input
            name="username"
            id="username"
            onChange={handleChange}
            value={form.username}
          ></input>
        </label>
        <label htmlFor="password">
          Password
          <input
            name="password"
            id="password"
            onChange={handleChange}
            value={form.password}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
