import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithEmailAndPassword } from "../services/AuthServices";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [loading, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!userData.name || !userData.email || !userData.password) {
      alert("Please fill in all fields.");
      return;
    }
    signInWithEmailAndPassword(userData.email, userData.password);
  };

  return (
    <div className="container">
      <h2 className="mt-3 text-center">Register</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error.message}</p>}
      <form className="form" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            name="name"
            onChange={handleChange}
            value={userData.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Your Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleChange}
            value={userData.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Your Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            name="password"
            onChange={handleChange}
            value={userData.password}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary w-100">
            Prisijungti
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
