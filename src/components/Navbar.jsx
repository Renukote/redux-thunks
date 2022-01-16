import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        border: "1px solid crimson",
        width: "90%",
        margin: "0px auto",
      }}
    >
      <h3 onClick={() => (window.location.href = "/login")}>Login</h3>
      <h3 onClick={() => (window.location.href = "/dashboard")}>Dashboard</h3>
      <h3 onClick={() => (window.location.href = "/register")}>Register</h3>
    </div>
  );
};
