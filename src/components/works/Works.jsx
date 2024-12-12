import { Link } from "react-router-dom";
import WorkTable from "../workTable/WorkTable";
import { useEffect, useState } from "react";
import* as service from "../../services/worksCrudServices";

const Works = () => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        service.getAllWorks(works=>{
            setWorks(works);
        });
    },[])

    console.log(works);

    return(
        <div className="container">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to="/add-work" className="nav-item btn btn-primary">Prideti atlikta darba</Link>
                </li>
            </ul>
            <h2>Works</h2>
            <WorkTable data={works}/>
        </div>
    )
}

export default Works;