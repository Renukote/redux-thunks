import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newRegister } from "../redux/registration/actionCreators";

export const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState("");

  const { isLoading, isError, isSuccess } = useSelector((state) => ({
    isLoading: state.register.isLoading,
    isError: state.register.isError,
    isSuccess: state.register.isSuccess,
  }));
  console.log(isLoading, isError, isSuccess);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      username,
      mobile,
      description,
    };

    dispatch(newRegister(userData));
  };

  return isLoading ? (
    <h1> ...Loading </h1>
  ) : isError ? (
    <h1>{isError}</h1>
  ) : (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Enter your mobile number"
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="Enter description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="submit" value="Register" />
      </form>

      {isSuccess ? <h1> Registration successful </h1> : null}
    </>
  );
};
