import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSearch } from "../redux/description/actionCreators";

export const Search = () => {
  const [username, setUsername] = useState("");

  const { loading, err, userData } = useSelector((state) => ({
    loading: state.description.isLoading,
    err: state.description.isError,
    userData: state.description.userData,
  }));

  const { token } = useSelector((state) => ({ token: state.login.token }));
  const navigate = useNavigate();
  console.log("token", token);

  useEffect(() => {
    if (!token) navigate("/login");
  });

  console.log(loading, err, userData);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userSearch(username));
  };

  return loading ? (
    <h1> ...Loading </h1>
  ) : err ? (
    <h1>User not found</h1>
  ) : (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter a username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>

      {userData ? (
        <div>
          <h3>Name: {userData.name}</h3>
          <h3>Company: {userData.company}</h3>
          <h3>Location: {userData.location}</h3>
          <h3>Bio: {userData.bio}</h3>
          <h3>Visit Profile: {userData.html_url}</h3>
          <img src={userData.avatar_url} alt="user profile pic" />
        </div>
      ) : null}
    </>
  );
};
