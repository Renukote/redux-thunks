import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../redux/login/actionCreators";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, err, token } = useSelector((state) => ({
    loading: state.login.isLoading,
    err: state.login.isError,
    token: state.login.token,
  }));

  console.log(loading, err, token);
  console.log("rendered ");

  const handleSubmit = (e) => {
    e.preventDefault();

    // had to use reqres cuz masai's server was not responding;
    const userData = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };

    dispatch(userLogin(userData));
  };

  useEffect(() => {
    console.log("useEffect is working");
    if (token) navigate("/dashboard");
  });

  return loading ? (
    <h1>...Loading </h1>
  ) : err ? (
    <h1>...Something went wrong</h1>
  ) : (
    <form onSubmit={handleSubmit}>
      <input
        // value={username}
        type="text"
        name="username"
        placeholder="Enter your username"
        onChange={(e) => setUsername(e.target.username)}
      />
      <input
        // value={password}
        type="password"
        name="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.username)}
      />
      <input type="submit" value="Login" />
    </form>
  );
};
