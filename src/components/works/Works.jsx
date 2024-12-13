import { Link } from "react-router-dom";
import WorkTable from "../workTable/WorkTable";
import { useEffect, useState } from "react";
import * as service from "../../services/worksCrudServices";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";

const Works = () => {
  const [works, setWorks] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) {
      service.getAllWorks((works) => {
        setWorks(works), user;
      });
    }
  }, [user, loading]);

  return (
    <div className="container">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to="/add-work" className="nav-item btn btn-primary">
            Prideti atlikta darba
          </Link>
        </li>
      </ul>
      <h2>Works</h2>
      <WorkTable data={works} />
    </div>
  );
};

export default Works;
