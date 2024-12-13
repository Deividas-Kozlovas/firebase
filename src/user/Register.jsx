import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    passwords: "",
  });
  const navigation = useNavigate();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <h2 className="mt-3 text-center">Registruokis</h2>
      <form className="form">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Jusu vardas"
            name="name"
            onChange={handleChange}
            value={userData.name}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Jusu email"
            name="email"
            onChange={handleChange}
            value={userData.email}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Jusu passwordas"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <button type="submit">Registruotis</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
